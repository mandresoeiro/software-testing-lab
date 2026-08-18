import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";

const baseUrl = "http://localhost:3000";

function run(command, args, options = {}) {
  return spawn(command, args, {
    shell: false,
    stdio: "inherit",
    ...options,
  });
}

async function waitForServer(url) {
  const startedAt = Date.now();
  const timeoutMs = 60_000;

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    } catch {
      await wait(500);
    }
  }

  throw new Error(`Servidor nao respondeu em ${url}.`);
}

async function stopProcessTree(child) {
  if (child.exitCode !== null || child.pid == null) {
    return;
  }

  const childExit = new Promise((resolve) => {
    child.once("exit", resolve);
    child.once("error", resolve);
  });

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const taskkill = spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
        shell: false,
        stdio: "ignore",
      });

      taskkill.on("exit", resolve);
      taskkill.on("error", resolve);
    });

    await Promise.race([childExit, wait(2_000)]);
    child.unref();
    return;
  }

  child.kill("SIGTERM");
  await Promise.race([childExit, wait(2_000)]);
  child.unref();
}

const nextServer = run(process.execPath, [
  "node_modules/next/dist/bin/next",
  "dev",
]);

try {
  await waitForServer(baseUrl);

  const playwrightExitCode = await new Promise((resolve) => {
    const playwright = run(
      process.execPath,
      ["node_modules/@playwright/test/cli.js", "test"],
      {
        env: {
          ...process.env,
          SOFTWARE_TESTING_LAB_E2E_MANAGED: "1",
        },
      },
    );

    playwright.on("exit", (code) => resolve(code ?? 1));
    playwright.on("error", () => resolve(1));
  });

  process.exitCode = playwrightExitCode;
} finally {
  await stopProcessTree(nextServer);
}

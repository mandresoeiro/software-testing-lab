import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";

export default defineConfig({
  testDir: "./tests/e2e",
  webServer: process.env.SOFTWARE_TESTING_LAB_E2E_MANAGED
    ? undefined
    : {
        command: "node node_modules/next/dist/bin/next dev",
        url: baseURL,
        reuseExistingServer: true,
      },
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

import { expect, test } from "@playwright/test";

test("pagina inicial apresenta o laboratorio", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Software Testing Lab" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Casos de teste" }),
  ).toBeVisible();
});

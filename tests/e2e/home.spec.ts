import { expect, test } from "@playwright/test";

test("pagina inicial apresenta o laboratorio", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Software Testing Lab" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Cadastrar caso de teste" }),
  ).toBeVisible();
});

test("cadastra um caso de teste na tela inicial", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Titulo").fill("Login com senha correta");
  await page.getByLabel("Pre-condicao").fill("Usuario cadastrado");
  await page
    .getByLabel("Passos")
    .fill("Informar email\nInformar senha\nConfirmar login");
  await page
    .getByLabel("Resultado esperado")
    .fill("Usuario acessa a area logada.");

  await page
    .getByRole("button", { name: "Cadastrar caso de teste" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Login com senha correta" }),
  ).toBeVisible();
  await expect(page.getByText("3 passo(s)")).toBeVisible();
});

test("mostra erros visuais ao tentar cadastrar vazio", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("button", { name: "Cadastrar caso de teste" })
    .click();

  await expect(
    page.getByText("Revise os campos destacados antes de cadastrar."),
  ).toBeVisible();
  await expect(
    page.getByText("O titulo do caso de teste e obrigatorio."),
  ).toBeVisible();
  await expect(
    page.getByText("O caso de teste precisa ter pelo menos um passo."),
  ).toBeVisible();
  await expect(
    page.getByText("O resultado esperado e obrigatorio."),
  ).toBeVisible();
});

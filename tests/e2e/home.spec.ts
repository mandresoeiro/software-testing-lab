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

  await page
    .getByRole("textbox", { name: "Titulo" })
    .fill("Cadastrar caso de teste valido");
  await page
    .getByRole("textbox", { name: "Pre-condicao" })
    .fill("Tela Software Testing Lab aberta");
  await page
    .getByRole("textbox", { name: "Passos" })
    .fill(
      "Preencher titulo\nPreencher pre-condicao\nPreencher passos\nPreencher resultado esperado\nClicar em Cadastrar caso de teste",
    );
  await page
    .getByRole("textbox", { name: "Resultado esperado" })
    .fill("Caso de teste aparece na lista de casos cadastrados.");

  await page
    .getByRole("button", { name: "Cadastrar caso de teste" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Cadastrar caso de teste valido" }),
  ).toBeVisible();
  await expect(page.getByText("5 passo(s)")).toBeVisible();
});

test("exclui um caso de teste cadastrado", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("textbox", { name: "Titulo" })
    .fill("Cadastrar caso temporario");
  await page.getByRole("textbox", { name: "Passos" }).fill("Cadastrar\nExcluir");
  await page
    .getByRole("textbox", { name: "Resultado esperado" })
    .fill("Caso temporario deixa de aparecer na lista.");

  await page
    .getByRole("button", { name: "Cadastrar caso de teste" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Cadastrar caso temporario" }),
  ).toBeVisible();

  await page
    .getByRole("button", { name: "Excluir caso Cadastrar caso temporario" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Cadastrar caso temporario" }),
  ).not.toBeVisible();
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

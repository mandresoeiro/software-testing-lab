# Software Testing Lab

Projeto de estudo para a disciplina **Validacao e Teste de Software**.

## Ideia

Construir, aos poucos, uma plataforma web para registrar:

- casos de teste;
- planos de teste;
- execucoes de teste;
- defeitos encontrados;
- evidencias;
- aprendizados da disciplina.

## Primeiro objetivo

Comecar pequeno com um CRUD de `TestCase`.

Um `TestCase` e um caso de teste: uma descricao clara de algo que precisa ser verificado no sistema.

Exemplo simples:

```text
Titulo: Login com senha correta
Pre-condicao: usuario cadastrado
Passos: informar email e senha
Resultado esperado: sistema entra na area logada
```

## Stack planejada

- Next.js
- TypeScript
- React
- Prisma
- PostgreSQL
- Zod
- Tailwind CSS
- Vitest
- Playwright
- Docker
- GitHub Actions

## Ordem de construcao

1. Base minima do projeto.
2. Tela inicial.
3. Modelo inicial de `TestCase`.
4. Validacao com Zod.
5. Teste unitario.
6. Listagem de casos de teste.
7. Fluxo E2E com Playwright.
8. Banco de dados com Prisma e PostgreSQL.
9. CI com GitHub Actions.

## Como rodar

Depois de instalar as dependencias:

```bash
npm run dev
```

Aplicacao:

```text
http://localhost:3000
```

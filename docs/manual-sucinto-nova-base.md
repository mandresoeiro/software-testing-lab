# Manual sucinto - criar uma base web do zero

Este manual serve para criar outra base parecida com o **Software Testing Lab**.

Objetivo:

```text
criar uma pasta
-> iniciar Git
-> criar projeto Next.js
-> instalar dependencias
-> rodar a primeira tela
```

## 1. Instalar ferramentas

Antes de criar o projeto, instale:

- Node.js;
- Git;
- VS Code ou outro editor.

Para conferir se instalou:

```bash
node -v
npm -v
git --version
```

Se esses comandos mostrarem versoes, esta pronto para seguir.

## 2. Criar a pasta do projeto

Exemplo:

```bash
mkdir meu-novo-projeto
cd meu-novo-projeto
```

No seu caso, poderia ser:

```bash
mkdir software-testing-lab
cd software-testing-lab
```

## 3. Iniciar o Git

Dentro da pasta do projeto:

```bash
git init
```

Isso cria o controle de versao.

## 4. Criar a base Next.js

Rode:

```bash
npx create-next-app@latest .
```

Quando ele perguntar as opcoes, uma configuracao simples seria:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: No
import alias: Yes
```

Explicacao curta:

- TypeScript ajuda a evitar erros;
- ESLint ajuda a manter qualidade;
- Tailwind ajuda no visual;
- `src/` deixa o codigo mais organizado;
- App Router e o modelo atual do Next.js.

## 5. Instalar dependencias extras

Para validacao:

```bash
npm install zod
```

Para testes unitarios:

```bash
npm install -D vitest
```

Para testes E2E:

```bash
npm install -D @playwright/test
npx playwright install
```

## 6. Conferir comandos no `package.json`

Abra o arquivo:

```text
package.json
```

Confira se existem comandos parecidos:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

Voce pode adicionar depois:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

## 7. Rodar o projeto

Dentro da pasta do projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

Se a tela abrir, a base esta funcionando.

## 8. Se aparecer `next: not found`

Significa que as dependencias nao foram instaladas corretamente.

Rode:

```bash
npm install
```

Depois tente novamente:

```bash
npm run dev
```

Importante: use o mesmo terminal para instalar e rodar.

## 9. Criar primeira documentacao

Crie um arquivo:

```text
README.md
```

Coloque:

```md
# Nome do Projeto

Objetivo do projeto.

## Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Zod
- Vitest
- Playwright

## Como rodar

```bash
npm install
npm run dev
```
```

## 10. Validar a base

Rode:

```bash
npm run lint
npm run typecheck
npm run build
```

Se todos passarem, a base esta saudavel.

## 11. Primeiro commit

Veja os arquivos criados:

```bash
git status
```

Adicione tudo:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "chore: create initial web base"
```

## 12. Ordem ideal para nao se perder

1. Criar pasta.
2. Iniciar Git.
3. Criar Next.js.
4. Instalar dependencias.
5. Rodar `npm run dev`.
6. Criar README.
7. Fazer primeira tela simples.
8. Rodar validacoes.
9. Fazer commit.

## Resumo

Para criar uma nova base, o caminho principal e:

```bash
mkdir meu-projeto
cd meu-projeto
git init
npx create-next-app@latest .
npm install zod
npm install -D vitest @playwright/test
npx playwright install
npm run dev
```

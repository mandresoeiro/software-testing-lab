# Guia de instalacao da base - Software Testing Lab

Este guia explica, com calma, como preparar e rodar a primeira base do projeto
**Software Testing Lab**.

## 1. O que estamos construindo

O Software Testing Lab sera uma plataforma web para estudar **Validacao e Teste
de Software** na pratica.

No futuro, ele tera cadastros como:

- casos de teste;
- planos de teste;
- execucoes de teste;
- defeitos;
- evidencias;
- aprendizados.

Mas neste primeiro momento a ideia e bem menor:

```text
Criar uma base simples
-> abrir uma tela inicial
-> entender a estrutura do projeto
-> validar que o ambiente funciona
```

## 2. O que significa "base do projeto"

Pense no projeto como uma casa.

Antes de colocar moveis, portas e decoracao, precisamos preparar:

- terreno;
- fundacao;
- paredes principais;
- instalacao eletrica;
- encanamento.

No software acontece algo parecido.

A base criada aqui prepara:

- a pasta do projeto;
- o controle de versao com Git;
- o Next.js para criar a aplicacao web;
- o TypeScript para ajudar a evitar erros;
- o Tailwind CSS para estilos;
- o Vitest para testes unitarios;
- o Playwright para testes de navegador;
- arquivos de configuracao.

Ainda nao estamos criando o cadastro de casos de teste. Isso vem depois.

## 3. Ferramentas principais

### Node.js

O Node.js permite rodar ferramentas JavaScript/TypeScript no computador.

Sem ele, comandos como `npm run dev` nao funcionam.

### npm

O npm vem junto com o Node.js.

Ele serve para instalar as dependencias do projeto.

Dependencias sao bibliotecas prontas que o projeto usa.

Exemplo:

```text
Next.js, React, TypeScript, Tailwind, Vitest, Playwright
```

### Git

O Git registra o historico do projeto.

Com ele conseguimos saber:

- o que mudou;
- quando mudou;
- quais arquivos foram criados;
- quais arquivos foram alterados.

### Next.js

O Next.js e a ferramenta principal da aplicacao web.

Ele usa React e organiza as paginas do sistema.

### TypeScript

TypeScript e JavaScript com verificacao de tipos.

Ele ajuda a evitar erros antes mesmo de abrir o sistema.

### Tailwind CSS

Tailwind CSS ajuda a estilizar a tela usando classes prontas.

### Vitest

Vitest sera usado para testar regras do sistema.

Exemplo futuro:

```text
Um caso de teste precisa ter titulo?
Um caso de teste pode ser criado sem resultado esperado?
```

### Playwright

Playwright testa o sistema como se fosse uma pessoa usando o navegador.

Exemplo futuro:

```text
Abrir a pagina
clicar em "Novo caso de teste"
preencher formulario
salvar
verificar se apareceu na lista
```

## 4. Estrutura inicial criada

Arquivos principais:

```text
software-testing-lab/
  README.md
  package.json
  tsconfig.json
  next.config.ts
  eslint.config.mjs
  postcss.config.mjs
  vitest.config.ts
  playwright.config.ts
  docs/
    01-primeira-aula.md
    guia-instalacao-base.md
  src/
    app/
      layout.tsx
      page.tsx
      globals.css
  tests/
    e2e/
      home.spec.ts
```

## 5. Para que serve cada arquivo

### `README.md`

E a apresentacao do projeto.

Ele explica:

- o nome do projeto;
- o objetivo;
- a stack planejada;
- a ordem de construcao.

### `package.json`

E como uma ficha tecnica do projeto.

Ele guarda:

- nome do projeto;
- dependencias;
- comandos disponiveis.

Exemplos de comandos:

```bash
npm run dev
npm run test
npm run build
```

### `src/app/page.tsx`

E a primeira pagina do sistema.

Hoje ela mostra a tela inicial do Software Testing Lab.

### `src/app/layout.tsx`

E a estrutura geral das paginas.

Pense nele como o molde principal da aplicacao.

### `src/app/globals.css`

E o arquivo de estilos globais.

Ele vale para a aplicacao inteira.

### `docs/01-primeira-aula.md`

E a primeira anotacao de estudo.

Ela explica, de forma simples, o conceito inicial de testes de software.

### `tests/e2e/home.spec.ts`

E um teste automatizado de navegador.

Ele verifica se a pagina inicial aparece corretamente.

## 6. Como abrir o terminal na pasta correta

A pasta do projeto e:

```text
C:\dev\software-testing-lab
```

No PowerShell, entre nela com:

```powershell
cd C:\dev\software-testing-lab
```

Para confirmar que esta na pasta certa:

```powershell
pwd
```

O resultado deve mostrar:

```text
C:\dev\software-testing-lab
```

## 7. Como instalar as dependencias

Dentro da pasta do projeto, rode:

```powershell
npm install
```

Esse comando cria a pasta:

```text
node_modules
```

Explicando como leigo:

`node_modules` e a caixa onde ficam as ferramentas baixadas para o projeto
funcionar.

Voce normalmente nao edita essa pasta.

## 8. Se o npm der problema

Se aparecer erro dizendo que o npm nao encontrou algum arquivo, pode ser um
problema na instalacao do Node/npm no Windows.

Um comando alternativo e chamar o npm diretamente pelo caminho do Node:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

Se esse comando tambem travar ou nao responder, o problema provavelmente nao e o
codigo do projeto. Pode ser:

- instalacao quebrada do npm;
- internet ou registry npm bloqueado;
- antivirus verificando muitos arquivos;
- permissao do Windows;
- cache do npm com problema.

Nesse caso, vale verificar:

```powershell
node -v
npm -v
```

O projeto foi planejado para Node.js moderno. A versao recomendada neste inicio e
Node 24 ou superior.

### Erro: `next: not found`

Se voce rodar:

```powershell
npm run dev
```

e aparecer:

```text
sh: 1: next: not found
```

isso significa que o projeto tentou iniciar o Next.js, mas a ferramenta `next`
nao foi encontrada dentro das dependencias instaladas.

Em palavras simples:

```text
o projeto sabe que precisa do Next.js
-> mas o Next.js ainda nao esta instalado nessa pasta
```

Para corrigir, rode primeiro:

```powershell
npm install
```

Depois rode novamente:

```powershell
npm run dev
```

Importante: rode `npm install` no mesmo tipo de terminal em que voce vai rodar o
projeto.

Exemplo:

- se voce vai usar PowerShell, instale pelo PowerShell;
- se voce vai usar WSL/Linux, instale pelo WSL/Linux;
- se voce vai usar Git Bash, instale pelo Git Bash.

Evite instalar em um ambiente e rodar em outro enquanto estiver aprendendo,
porque isso pode deixar a pasta `node_modules` incompleta ou diferente do
esperado.

## 9. Como rodar o projeto

Depois que `npm install` terminar com sucesso, rode:

```powershell
npm run dev
```

Isso inicia o servidor de desenvolvimento.

Se tudo der certo, o terminal deve mostrar um endereco parecido com:

```text
http://localhost:3000
```

Abra esse endereco no navegador.

Voce deve ver a pagina:

```text
Software Testing Lab
```

## 10. O que e `localhost`

`localhost` significa "este proprio computador".

Quando voce acessa:

```text
http://localhost:3000
```

voce nao esta acessando um site publico na internet.

Voce esta acessando o sistema rodando localmente na sua maquina.

## 11. Como parar o projeto

No terminal onde o servidor esta rodando, pressione:

```text
Ctrl + C
```

Se o terminal perguntar se deseja encerrar, confirme com:

```text
S
```

ou:

```text
Y
```

dependendo do idioma do terminal.

## 12. Comandos importantes

### Rodar o projeto

```powershell
npm run dev
```

### Verificar TypeScript

```powershell
npm run typecheck
```

Esse comando verifica se existem erros de tipo.

### Rodar lint

```powershell
npm run lint
```

Esse comando procura problemas de padrao e qualidade no codigo.

### Rodar testes unitarios

```powershell
npm run test
```

Neste inicio, ainda vamos criar mais testes unitarios quando implementarmos as
regras de `TestCase`.

### Rodar testes E2E

```powershell
npm run test:e2e
```

Esse comando usa o Playwright para abrir o sistema como um usuario abriria.

### Gerar build de producao

```powershell
npm run build
```

Esse comando verifica se a aplicacao consegue ser preparada para producao.

## 13. Ordem recomendada para estudar

Nao tente entender tudo de uma vez.

Use esta ordem:

1. Ler o `README.md`.
2. Ler `docs/01-primeira-aula.md`.
3. Abrir `src/app/page.tsx`.
4. Rodar `npm install`.
5. Rodar `npm run dev`.
6. Abrir `http://localhost:3000`.
7. Alterar um texto pequeno na tela.
8. Salvar e ver o navegador atualizar.
9. Rodar `npm run typecheck`.
10. Rodar `npm run build`.

## 14. Primeiro exercicio simples

Abra o arquivo:

```text
src/app/page.tsx
```

Procure este texto:

```text
Um projeto web para estudar testes de software na pratica
```

Altere uma palavra pequena.

Salve o arquivo.

Se o servidor estiver rodando com `npm run dev`, volte ao navegador e veja se a
mudanca apareceu.

Esse exercicio ensina uma ideia importante:

```text
codigo alterado
-> arquivo salvo
-> aplicacao atualizada
-> resultado visivel
```

## 15. Proximo passo do projeto

Depois que a base estiver rodando, o proximo passo sera criar o primeiro conceito
real do dominio:

```text
TestCase
```

Ou seja:

```text
Caso de teste
```

Um caso de teste tera, no minimo:

- titulo;
- descricao;
- passos;
- resultado esperado.

Depois disso, criaremos:

- validacao com Zod;
- teste unitario com Vitest;
- tela de listagem;
- primeiro fluxo E2E com Playwright.

## 16. Resumo em uma frase

Esta base existe para voce aprender devagar, vendo cada parte nascer com
explicacao, codigo, teste e evidencia.

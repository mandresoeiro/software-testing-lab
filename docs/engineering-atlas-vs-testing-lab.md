# Engineering Atlas vs Software Testing Lab

Este documento explica a diferenca entre os dois projetos e onde cada coisa deve
ser cadastrada.

## Resumo simples

```text
Engineering Atlas
= mapa profissional da evolucao

Software Testing Lab
= laboratorio pratico da disciplina
```

## Engineering Atlas

O **Engineering Atlas** e o lugar onde registramos a evolucao profissional.

Ele responde perguntas como:

- qual projeto foi criado?
- qual skill foi praticada?
- qual contexto justifica essa pratica?
- qual evidencia comprova o aprendizado?
- qual decisao tecnica foi tomada?

Pense nele como um portfolio organizado.

Ele nao e o lugar principal para cadastrar todos os casos de teste da disciplina.

Ele e o lugar para registrar que o projeto existe e que ele gera evidencias de
aprendizado.

### O que cadastrar no Engineering Atlas

Cadastrar:

```text
Projeto: Software Testing Lab
Skill: Software Testing
Contexto: Projeto criado para aplicar a disciplina Validacao e Teste de Software.
Evidencias: commits, testes, prints, README, documentacao e links do GitHub.
```

## Software Testing Lab

O **Software Testing Lab** e o sistema que estamos construindo para praticar a
disciplina.

Ele sera usado para cadastrar elementos do dominio de testes.

Exemplos:

- casos de teste;
- planos de teste;
- execucoes de teste;
- defeitos;
- evidencias;
- aprendizados.

Pense nele como o laboratorio onde a teoria vira pratica.

### O que cadastrar no Software Testing Lab

Cadastrar:

```text
TestCase: Login com senha correta
Pre-condicao: usuario cadastrado
Passos: informar email e senha
Resultado esperado: usuario entra no sistema
```

Tambem entram aqui, no futuro:

```text
TestPlan
TestRun
Defect
Evidence
```

## Ordem correta

1. Criar ou evoluir algo no **Software Testing Lab**.
2. Validar com teste, print, commit ou documentacao.
3. Registrar a evidencia no **Engineering Atlas**.

Fluxo:

```text
estudo da apostila
-> pratica no Software Testing Lab
-> teste ou validacao
-> evidencia no GitHub
-> registro no Engineering Atlas
```

## Exemplo completo

### No Software Testing Lab

Criamos uma regra:

```text
Um TestCase precisa ter titulo e resultado esperado.
```

Depois criamos:

- validacao com Zod;
- teste unitario com Vitest;
- commit no GitHub.

### No Engineering Atlas

Registramos:

```text
Projeto: Software Testing Lab
Skill: Software Testing
Contexto: Validacao de regras de caso de teste usando Zod e Vitest.
Evidencia: link do commit ou teste automatizado.
```

## Regra de ouro

O **Software Testing Lab** guarda a pratica da disciplina.

O **Engineering Atlas** guarda a prova organizada da sua evolucao.

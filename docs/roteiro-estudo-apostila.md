# Roteiro de estudo da apostila

Este roteiro explica como vamos usar a apostila para construir o
**Software Testing Lab** devagar.

## Ideia principal

Voce estuda um pedaco pequeno da apostila.

Depois disso, nos transformamos esse estudo em uma pequena entrega no projeto.

O ciclo sera:

```text
estudar
-> anotar
-> praticar no codigo
-> testar
-> registrar evidencia
```

## Como estudar cada parte

Para cada aula ou capitulo da apostila, use este modelo:

## 1. Ler sem programar

Primeiro leia a parte da apostila sem tentar codar ao mesmo tempo.

Objetivo:

- entender o tema geral;
- marcar palavras importantes;
- perceber exemplos usados na aula.

Nao precisa entender tudo de primeira.

## 2. Escrever um resumo simples

Depois da leitura, escreva com suas palavras:

- qual era o assunto;
- qual problema esse assunto resolve;
- quais termos novos apareceram;
- qual exemplo ficou mais claro.

Exemplo:

```text
Tema: caso de teste
Resumo: um caso de teste descreve uma verificacao que sera feita no sistema.
Termos: pre-condicao, passos, resultado esperado.
```

## 3. Escolher uma pratica pequena

Depois do resumo, escolhemos uma pratica no projeto.

Exemplos:

- criar um tipo `TestCase`;
- criar uma validacao com Zod;
- criar um teste unitario;
- criar uma tela simples de listagem;
- criar um fluxo E2E com Playwright.

Regra importante:

```text
uma aula
-> uma pratica pequena
```

## 4. Validar com teste

Quando a pratica envolver regra, criaremos teste.

Exemplo:

```text
Regra: um caso de teste precisa ter titulo.
Teste: tentar criar um caso de teste sem titulo deve falhar.
```

Isso ajuda a transformar teoria em comprovacao.

## 5. Registrar evidencia

Depois da pratica, registramos uma evidencia.

Pode ser:

- commit;
- teste automatizado;
- print da tela;
- anotacao no README;
- registro no Engineering Atlas.

O Atlas nao deve guardar apenas plano.

Ele deve guardar o que foi realmente feito.

## Ordem recomendada para a primeira etapa

1. Estudar o conceito de teste de software.
2. Estudar o conceito de caso de teste.
3. Criar o modelo inicial de `TestCase`.
4. Criar validacao com Zod.
5. Criar testes unitarios com Vitest.
6. Criar tela de listagem.
7. Criar o primeiro teste E2E com Playwright.
8. Registrar evidencia no Engineering Atlas.

## Modelo de anotacao por aula

Use este modelo para cada aula:

```md
# Aula X - Nome da aula

## O que eu entendi

Escreva com suas palavras.

## Conceitos importantes

- conceito 1;
- conceito 2;
- conceito 3.

## Exemplo da apostila

Explique o exemplo de forma simples.

## Como isso entra no Software Testing Lab

Explique qual parte do projeto pode nascer desse conceito.

## Pratica feita

Descreva o que foi implementado.

## Evidencia

Link ou descricao da evidencia.
```

## Como vamos trabalhar juntos

Voce pode me mandar:

- o titulo da aula;
- um trecho da apostila;
- uma foto/print da pagina;
- seu resumo;
- uma duvida.

Eu ajudo a transformar isso em:

- explicacao simples;
- anotacao organizada;
- pequena tarefa de codigo;
- teste;
- commit;
- evidencia para o Engineering Atlas.

## Regra de ouro

Nao vamos correr.

O objetivo nao e terminar o sistema rapido.

O objetivo e aprender bem, criando um projeto real que prova o aprendizado.

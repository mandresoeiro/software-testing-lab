# Aula 1 - Conceitos de validacao

## Fonte

```text
Apostila: Validacao e Teste de Software
Tema: TEMA 01 - CONCEITOS DE VALIDACAO
Arquivo: validacao-e-teste-de-software.pdf
Professor: Rodrigo Cantu Polo
```

## O que eu entendi

Testar software e verificar se o sistema funciona como deveria e se atende ao
que o usuario precisa.

A aula mostra que teste nao e apenas "clicar e ver se funciona". Teste envolve
planejamento, estrategia, diferentes niveis e evidencias.

Tambem ficou claro que testar nao garante qualidade sozinho. A qualidade nasce
do processo inteiro de engenharia de software, e os testes ajudam a revelar se
esse processo produziu algo confiavel.

## Conceitos importantes

- teste de software;
- verificacao;
- validacao;
- teste unitario;
- teste de componente;
- equipe de testes;
- estrategia incremental de testes;
- depuracao;
- objetos mock;
- condicoes de fronteira.

## Explicacao como leigo

Teste de software e como conferir um trabalho antes de entregar.

Mas existem duas perguntas diferentes:

```text
Validacao: estamos fazendo o produto certo?
Verificacao: estamos fazendo certo o produto?
```

Exemplo simples:

```text
O sistema foi feito exatamente como o documento pedia.
Isso pode passar na verificacao.

Mas se o documento nao resolvia o problema real do usuario,
o sistema pode falhar na validacao.
```

## Ideias principais da aula

### Testes de software

Testes servem para encontrar defeitos antes que o usuario encontre.

Eles usam dados preparados para exercitar o sistema e comparar o resultado
obtido com o resultado esperado.

### Verificacao e validacao

Verificacao olha para a conformidade com documentos, requisitos, planos e
artefatos de desenvolvimento.

Validacao olha para a necessidade real do usuario.

### Organizacao dos testes

O desenvolvedor deve testar suas unidades de codigo, mas uma equipe de testes
independente ajuda a reduzir conflito de interesse.

Quem construiu tende a querer provar que funciona.

Quem testa precisa tentar encontrar problemas.

### Estrategia incremental

Os testes devem comecar pequenos e crescer:

```text
teste unitario
-> teste de integracao
-> teste de validacao
-> teste de sistema
```

### Testes unitarios

Testes unitarios verificam pequenas unidades do software, como funcoes,
metodos, classes ou objetos.

Um teste unitario costuma ter tres partes:

```text
preparacao
-> chamada do que sera testado
-> verificacao do resultado
```

### Testes de componentes

Testes de componentes verificam se componentes integrados funcionam bem por
meio de suas interfaces.

Eles ajudam a encontrar erros que nao aparecem quando cada objeto e testado
isoladamente.

## Como isso entra no Software Testing Lab

O primeiro conceito pratico do projeto sera:

```text
TestCase
```

Um `TestCase` representa uma verificacao planejada.

Ele precisa descrever:

- titulo;
- pre-condicao;
- passos;
- resultado esperado.

## Pratica pequena escolhida

```text
Pratica: criar validacao inicial de TestCase com Zod.
Motivo: a aula fala que testes comparam resultado obtido com resultado esperado.
```

Nesta etapa, ainda nao criaremos banco de dados nem CRUD.

Vamos primeiro criar a regra do que e um caso de teste valido.

## Teste ou validacao

Vamos provar com Vitest que:

- um caso de teste valido passa;
- um caso de teste sem titulo falha;
- um caso de teste sem passos falha;
- um caso de teste sem resultado esperado falha.

## Evidencia

```text
Commit: a registrar apos implementacao
Registro no Engineering Atlas: registrar depois da validacao
```

## Duvidas abertas

- Quando criar `TestPlan`?
- Quando ligar `TestCase` a `TestRun`?
- Quando persistir os dados com Prisma e PostgreSQL?

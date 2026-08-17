# Guia rapido - abrir outro curso

Este guia explica como organizar um novo curso usando a mesma ideia do
**Software Testing Lab**.

## Ideia principal

Para cada curso importante, voce pode criar um laboratorio proprio.

O laboratorio e onde a pratica acontece.

O **Engineering Atlas** e onde voce registra a evolucao e as evidencias.

Fluxo:

```text
curso novo
-> laboratorio pratico
-> estudos e pequenas entregas
-> evidencias
-> registro no Engineering Atlas
```

## Quando criar um novo laboratorio

Crie um novo projeto quando o curso gerar:

- codigo;
- exercicios praticos;
- documentacao propria;
- experimentos;
- telas;
- banco de dados;
- testes;
- evidencias tecnicas.

Exemplo:

```text
Curso: Banco de Dados
Laboratorio: database-lab
```

## Quando nao criar outro laboratorio

Nao precisa criar outro projeto se o curso for apenas:

- leitura rapida;
- revisao teorica;
- anotacao pequena;
- tema complementar de outro projeto.

Nesse caso, registre apenas uma anotacao ou evidencia no **Engineering Atlas**.

## Como escolher o nome

Use nomes simples e em ingles, no formato:

```text
tema-lab
```

Exemplos:

```text
database-lab
requirements-lab
architecture-lab
security-lab
frontend-lab
devops-lab
```

## O que criar no laboratorio

Estrutura inicial recomendada:

```text
nome-do-lab/
  README.md
  docs/
    roteiro-estudo.md
    aulas/
      TEMPLATE-AULA.md
  src/
  tests/
```

Nem todo curso precisa ter tudo desde o primeiro dia.

Comece pequeno.

## O que cadastrar no Engineering Atlas

No Atlas, cadastre:

```text
Projeto: nome-do-lab
Skill: skill principal do curso
Contexto: curso usado para aplicar a skill em um projeto pratico
Evidencias: commits, testes, prints, documentos e links
```

Exemplo:

```text
Projeto: database-lab
Skill: PostgreSQL
Contexto: laboratorio criado para estudar modelagem, consultas SQL e persistencia.
Evidencia: commit com primeiro schema e consultas documentadas.
```

## Ciclo de estudo

Para cada aula:

```text
ler
-> resumir
-> praticar
-> testar ou validar
-> registrar evidencia
```

## Exemplo completo

Curso:

```text
Engenharia de Requisitos
```

Laboratorio:

```text
requirements-lab
```

Primeira pratica:

```text
Criar documento com problema, stakeholders e requisitos iniciais.
```

Registro no Atlas:

```text
Projeto: requirements-lab
Skill: Requirements Engineering
Contexto: aplicacao pratica da disciplina de Engenharia de Requisitos.
Evidencia: README, documento inicial e commit.
```

## Regra de ouro

O laboratorio guarda a pratica do curso.

O Engineering Atlas guarda a prova organizada da sua evolucao.

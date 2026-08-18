"use client";

import { FormEvent, useState } from "react";
import { ZodError } from "zod";
import { TestCase, validateTestCase } from "@/lib/test-case";

type FormState = {
  title: string;
  precondition: string;
  steps: string;
  expectedResult: string;
};

const initialFormState: FormState = {
  title: "",
  precondition: "",
  steps: "",
  expectedResult: "",
};

export function TestCaseRegistration() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [error, setError] = useState<string | null>(null);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    try {
      const testCase = validateTestCase({
        title: form.title,
        precondition: form.precondition,
        steps: form.steps
          .split("\n")
          .map((step) => step.trim())
          .filter(Boolean),
        expectedResult: form.expectedResult,
      });

      setTestCases((current) => [...current, testCase]);
      setForm(initialFormState);
    } catch (validationError) {
      if (validationError instanceof ZodError) {
        setError(validationError.issues[0]?.message ?? "Dados invalidos.");
        return;
      }

      setError("Nao foi possivel cadastrar o caso de teste.");
    }
  }

  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
      <form
        className="rounded-lg border border-zinc-800 bg-zinc-900 p-5"
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className="text-xl font-semibold">Cadastrar caso de teste</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Registre uma verificacao com passos claros e resultado esperado.
          </p>
        </div>

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-medium" htmlFor="title">
            Titulo
            <input
              className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-50 outline-none focus:border-cyan-300"
              id="title"
              onChange={(event) => updateField("title", event.target.value)}
              value={form.title}
            />
          </label>

          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="precondition"
          >
            Pre-condicao
            <input
              className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-50 outline-none focus:border-cyan-300"
              id="precondition"
              onChange={(event) =>
                updateField("precondition", event.target.value)
              }
              value={form.precondition}
            />
          </label>

          <label className="grid gap-2 text-sm font-medium" htmlFor="steps">
            Passos
            <textarea
              className="min-h-28 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-50 outline-none focus:border-cyan-300"
              id="steps"
              onChange={(event) => updateField("steps", event.target.value)}
              placeholder="Um passo por linha"
              value={form.steps}
            />
          </label>

          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="expectedResult"
          >
            Resultado esperado
            <textarea
              className="min-h-24 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-50 outline-none focus:border-cyan-300"
              id="expectedResult"
              onChange={(event) =>
                updateField("expectedResult", event.target.value)
              }
              value={form.expectedResult}
            />
          </label>
        </div>

        {error ? (
          <p className="mt-4 rounded-md border border-red-500/40 bg-red-950/40 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        ) : null}

        <button
          className="mt-6 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-cyan-200"
          type="submit"
        >
          Cadastrar caso de teste
        </button>
      </form>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Casos cadastrados</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Lista temporaria desta sessao.
            </p>
          </div>
          <span className="rounded-md border border-zinc-700 px-2 py-1 text-sm text-zinc-300">
            {testCases.length}
          </span>
        </div>

        {testCases.length === 0 ? (
          <p className="mt-6 rounded-md border border-dashed border-zinc-700 p-4 text-sm leading-6 text-zinc-400">
            Nenhum caso cadastrado ainda.
          </p>
        ) : (
          <ul className="mt-6 grid gap-3">
            {testCases.map((testCase, index) => (
              <li
                className="rounded-md border border-zinc-800 bg-zinc-950 p-4"
                key={`${testCase.title}-${index}`}
              >
                <h3 className="font-semibold">{testCase.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {testCase.steps.length} passo(s)
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Resultado esperado: {testCase.expectedResult}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ZodError } from "zod";
import { TestCase, validateTestCase } from "@/lib/test-case";

type FormState = {
  title: string;
  precondition: string;
  steps: string;
  expectedResult: string;
};

type RegisteredTestCase = TestCase & {
  id: string;
  createdAt: string;
};

const storageKey = "software-testing-lab:test-cases";

const initialFormState: FormState = {
  title: "",
  precondition: "",
  steps: "",
  expectedResult: "",
};

function createId() {
  return `tc-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function TestCaseRegistration() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [testCases, setTestCases] = useState<RegisteredTestCase[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isStorageReady, setIsStorageReady] = useState(false);

  const totalSteps = useMemo(
    () => testCases.reduce((total, testCase) => total + testCase.steps.length, 0),
    [testCases],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(storageKey);

      if (!stored) {
        setIsStorageReady(true);
        return;
      }

      try {
        setTestCases(JSON.parse(stored) as RegisteredTestCase[]);
      } catch {
        window.localStorage.removeItem(storageKey);
      } finally {
        setIsStorageReady(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isStorageReady) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(testCases));
  }, [isStorageReady, testCases]);

  function updateField(field: keyof FormState, value: string) {
    setSuccessMessage(null);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

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

      const registeredTestCase: RegisteredTestCase = {
        ...testCase,
        id: createId(),
        createdAt: new Date().toISOString(),
      };

      setTestCases((current) => [registeredTestCase, ...current]);
      setForm(initialFormState);
      setSuccessMessage("Caso de teste cadastrado.");
    } catch (validationError) {
      if (validationError instanceof ZodError) {
        setError(validationError.issues[0]?.message ?? "Dados invalidos.");
        return;
      }

      setError("Nao foi possivel cadastrar o caso de teste.");
    }
  }

  function clearTestCases() {
    setTestCases([]);
    setSuccessMessage(null);
    setError(null);
  }

  return (
    <section className="grid gap-6 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard label="Casos" value={String(testCases.length)} />
          <SummaryCard label="Passos" value={String(totalSteps)} />
          <SummaryCard label="Armazenamento" value="Local" />
        </div>

        <form
          className="rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-2xl shadow-black/20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3 border-b border-zinc-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-cyan-300">
                TestCase
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Cadastrar caso de teste
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Descreva o comportamento que precisa ser verificado e qual
                resultado prova que ele funcionou.
              </p>
            </div>
            <span className="w-fit rounded-md border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              Aula 1 aplicada
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-medium" htmlFor="title">
              Titulo
              <input
                className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-3 text-zinc-50 outline-none transition focus:border-cyan-300"
                id="title"
                onChange={(event) => updateField("title", event.target.value)}
                placeholder="Login com senha correta"
                value={form.title}
              />
            </label>

            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="precondition"
            >
              Pre-condicao
              <input
                className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-3 text-zinc-50 outline-none transition focus:border-cyan-300"
                id="precondition"
                onChange={(event) =>
                  updateField("precondition", event.target.value)
                }
                placeholder="Usuario cadastrado"
                value={form.precondition}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium" htmlFor="steps">
              Passos
              <textarea
                className="min-h-32 resize-y rounded-md border border-zinc-700 bg-zinc-950 px-3 py-3 text-zinc-50 outline-none transition focus:border-cyan-300"
                id="steps"
                onChange={(event) => updateField("steps", event.target.value)}
                placeholder={"Informar email\nInformar senha\nConfirmar login"}
                value={form.steps}
              />
            </label>

            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="expectedResult"
            >
              Resultado esperado
              <textarea
                className="min-h-24 resize-y rounded-md border border-zinc-700 bg-zinc-950 px-3 py-3 text-zinc-50 outline-none transition focus:border-cyan-300"
                id="expectedResult"
                onChange={(event) =>
                  updateField("expectedResult", event.target.value)
                }
                placeholder="Usuario acessa a area logada."
                value={form.expectedResult}
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-md border border-red-500/40 bg-red-950/40 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          {successMessage ? (
            <p className="mt-4 rounded-md border border-emerald-500/40 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-200">
              {successMessage}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className="rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
              type="submit"
            >
              Cadastrar caso de teste
            </button>
            <button
              className="rounded-md border border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500"
              onClick={() => setForm(initialFormState)}
              type="button"
            >
              Limpar formulario
            </button>
          </div>
        </form>
      </div>

      <aside className="grid gap-6">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
          <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-cyan-300">
                Sessao atual
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Casos cadastrados
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Estes dados ficam salvos no navegador.
              </p>
            </div>
            <span className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
              {testCases.length}
            </span>
          </div>

          {testCases.length === 0 ? (
            <div className="mt-6 rounded-md border border-dashed border-zinc-700 p-4">
              <p className="text-sm font-medium text-zinc-200">
                Nenhum caso cadastrado ainda.
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Cadastre o primeiro caso para transformar a aula em pratica.
              </p>
            </div>
          ) : (
            <ul className="mt-6 grid max-h-[560px] gap-3 overflow-auto pr-1">
              {testCases.map((testCase) => (
                <li
                  className="rounded-md border border-zinc-800 bg-zinc-950 p-4"
                  key={testCase.id}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{testCase.title}</h3>
                    <span className="shrink-0 rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-400">
                      {testCase.steps.length} passo(s)
                    </span>
                  </div>
                  {testCase.precondition ? (
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      Pre-condicao: {testCase.precondition}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    Resultado esperado: {testCase.expectedResult}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {testCases.length > 0 ? (
            <button
              className="mt-5 rounded-md border border-zinc-700 px-3 py-2 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500"
              onClick={clearTestCases}
              type="button"
            >
              Limpar casos da sessao
            </button>
          ) : null}
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="text-lg font-semibold">Fluxo aplicado</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
            <li className="rounded-md bg-zinc-950 p-3">1. Ler a aula</li>
            <li className="rounded-md bg-zinc-950 p-3">
              2. Transformar conceito em TestCase
            </li>
            <li className="rounded-md bg-zinc-950 p-3">
              3. Validar com Zod e testar
            </li>
            <li className="rounded-md bg-zinc-950 p-3">
              4. Registrar evidencia no Atlas
            </li>
          </ol>
        </div>
      </aside>
    </section>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

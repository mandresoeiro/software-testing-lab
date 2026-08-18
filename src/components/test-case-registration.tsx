"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ZodError } from "zod";
import type { TestCase } from "@/lib/test-case";
import { validateTestCase } from "@/lib/test-case";

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
    <section className="workspace-grid">
      <div className="primary-column">
        <div className="summary-grid">
          <SummaryCard label="Casos" value={String(testCases.length)} />
          <SummaryCard label="Passos" value={String(totalSteps)} />
          <SummaryCard label="Armazenamento" value="Local" />
        </div>

        <form className="panel" onSubmit={handleSubmit}>
          <div className="panel-header">
            <div>
              <p className="eyebrow">TestCase</p>
              <h2>Cadastrar caso de teste</h2>
              <p>
                Descreva o comportamento que precisa ser verificado e qual
                resultado prova que ele funcionou.
              </p>
            </div>
            <span className="badge">Aula 1 aplicada</span>
          </div>

          <div className="form-grid">
            <label className="field" htmlFor="title">
              Titulo
              <input
                className="input"
                id="title"
                onChange={(event) => updateField("title", event.target.value)}
                placeholder="Login com senha correta"
                value={form.title}
              />
            </label>

            <label
              className="field"
              htmlFor="precondition"
            >
              Pre-condicao
              <input
                className="input"
                id="precondition"
                onChange={(event) =>
                  updateField("precondition", event.target.value)
                }
                placeholder="Usuario cadastrado"
                value={form.precondition}
              />
            </label>

            <label className="field" htmlFor="steps">
              Passos
              <textarea
                className="textarea textarea-large"
                id="steps"
                onChange={(event) => updateField("steps", event.target.value)}
                placeholder={"Informar email\nInformar senha\nConfirmar login"}
                value={form.steps}
              />
            </label>

            <label
              className="field"
              htmlFor="expectedResult"
            >
              Resultado esperado
              <textarea
                className="textarea"
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
            <p className="message-error">{error}</p>
          ) : null}

          {successMessage ? (
            <p className="message-success">{successMessage}</p>
          ) : null}

          <div className="actions">
            <button
              className="primary-button"
              type="submit"
            >
              Cadastrar caso de teste
            </button>
            <button
              className="secondary-button"
              onClick={() => setForm(initialFormState)}
              type="button"
            >
              Limpar formulario
            </button>
          </div>
        </form>
      </div>

      <aside className="side-column">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Sessao atual</p>
              <h2>Casos cadastrados</h2>
              <p>
                Estes dados ficam salvos no navegador.
              </p>
            </div>
            <span className="counter">{testCases.length}</span>
          </div>

          {testCases.length === 0 ? (
            <div className="empty-state">
              <p>Nenhum caso cadastrado ainda.</p>
              <span>
                Cadastre o primeiro caso para transformar a aula em pratica.
              </span>
            </div>
          ) : (
            <ul className="test-case-list">
              {testCases.map((testCase) => (
                <li
                  className="test-case-card"
                  key={testCase.id}
                >
                  <div className="test-case-card-header">
                    <h3>{testCase.title}</h3>
                    <span className="step-badge">
                      {testCase.steps.length} passo(s)
                    </span>
                  </div>
                  {testCase.precondition ? (
                    <p className="muted-text">
                      Pre-condicao: {testCase.precondition}
                    </p>
                  ) : null}
                  <p className="body-text">
                    Resultado esperado: {testCase.expectedResult}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {testCases.length > 0 ? (
            <button
              className="secondary-button compact-button"
              onClick={clearTestCases}
              type="button"
            >
              Limpar casos da sessao
            </button>
          ) : null}
        </div>

        <div className="panel">
          <h2 className="small-title">Fluxo aplicado</h2>
          <ol className="flow-list">
            <li>1. Ler a aula</li>
            <li>
              2. Transformar conceito em TestCase
            </li>
            <li>
              3. Validar com Zod e testar
            </li>
            <li>
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
    <div className="summary-card">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

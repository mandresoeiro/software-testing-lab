import { TestCaseRegistration } from "@/components/test-case-registration";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <header className="border-b border-zinc-800 pb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">
                Validacao e Teste de Software
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Software Testing Lab
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Laboratorio para transformar aulas em casos de teste,
                validacoes, execucoes e evidencias tecnicas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
              <div className="min-w-24 rounded-md bg-zinc-950 p-3">
                <p className="text-xs text-zinc-500">Fase</p>
                <p className="mt-1 text-sm font-semibold">TestCase</p>
              </div>
              <div className="min-w-24 rounded-md bg-zinc-950 p-3">
                <p className="text-xs text-zinc-500">Aula</p>
                <p className="mt-1 text-sm font-semibold">Tema 01</p>
              </div>
              <div className="min-w-24 rounded-md bg-zinc-950 p-3">
                <p className="text-xs text-zinc-500">Modo</p>
                <p className="mt-1 text-sm font-semibold">Local</p>
              </div>
            </div>
          </div>
        </header>

        <TestCaseRegistration />
      </section>
    </main>
  );
}

const plannedModules = [
  "Casos de teste",
  "Planos de teste",
  "Execucoes",
  "Defeitos",
  "Evidencias",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12">
        <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">
          Validacao e Teste de Software
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Software Testing Lab
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Um projeto web para estudar testes de software na pratica, registrando
          casos de teste, execucoes, defeitos, evidencias e aprendizados.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plannedModules.map((module) => (
            <div
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-5"
              key={module}
            >
              <h2 className="text-base font-semibold">{module}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Modulo planejado para evoluir aos poucos durante as aulas.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

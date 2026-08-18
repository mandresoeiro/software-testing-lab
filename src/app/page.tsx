import { TestCaseRegistration } from "@/components/test-case-registration";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
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

        <TestCaseRegistration />
      </section>
    </main>
  );
}

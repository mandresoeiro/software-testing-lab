import { TestCaseRegistration } from "@/components/test-case-registration";

export default function Home() {
  return (
    <main className="app-page">
      <section className="app-shell">
        <header className="app-header">
          <div className="header-content">
            <div>
              <p className="eyebrow">
                Validacao e Teste de Software
              </p>

              <h1 className="title">Software Testing Lab</h1>

              <p className="subtitle">
                Laboratorio para transformar aulas em casos de teste,
                validacoes, execucoes e evidencias tecnicas.
              </p>
            </div>

            <div className="status-grid">
              <div className="status-card">
                <p>Fase</p>
                <strong>TestCase</strong>
              </div>
              <div className="status-card">
                <p>Aula</p>
                <strong>Tema 01</strong>
              </div>
              <div className="status-card">
                <p>Modo</p>
                <strong>Local</strong>
              </div>
            </div>
          </div>
        </header>

        <TestCaseRegistration />
      </section>
    </main>
  );
}

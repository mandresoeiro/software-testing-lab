import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Testing Lab",
  description: "Laboratorio de estudos de Validacao e Teste de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

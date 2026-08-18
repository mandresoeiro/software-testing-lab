# Corrigir node_modules entre Windows e WSL

## Problema

Se aparecer erro parecido com:

```text
Cannot find module '../lightningcss.linux-x64-gnu.node'
```

isso significa que o projeto esta rodando no Linux/WSL, mas as dependencias
foram instaladas para outro ambiente, normalmente Windows.

Em palavras simples:

```text
Windows precisa de binarios Windows.
Linux/WSL precisa de binarios Linux.
```

Alguns pacotes do Next.js, Tailwind CSS, Rollup e Lightning CSS usam partes
nativas. Essas partes sao diferentes para cada sistema operacional.

## Regra principal

Use sempre o mesmo ambiente para instalar e rodar.

Escolha um:

```text
Opcao A: PowerShell/Windows
Opcao B: WSL/Linux
```

Nao instale pelo Windows e rode pelo WSL.

Nao instale pelo WSL e rode pelo Windows.

## Corrigir usando PowerShell/Windows

Dentro da pasta do projeto:

```powershell
cd C:\dev\software-testing-lab
```

Apague a instalacao atual:

```powershell
Remove-Item -Recurse -Force node_modules
```

Instale novamente:

```powershell
npm ci
```

Rode:

```powershell
npm run dev
```

## Corrigir usando WSL/Linux

Dentro do WSL:

```bash
cd /mnt/c/dev/software-testing-lab
```

Apague a instalacao atual:

```bash
rm -rf node_modules
```

Instale novamente pelo WSL:

```bash
npm ci
```

Rode:

```bash
npm run dev
```

## Se o WSL nao tiver Node.js

Instale Node.js no WSL antes.

Exemplo com `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 24
nvm use 24
node -v
npm -v
```

Depois volte para a pasta do projeto e rode:

```bash
npm ci
npm run dev
```

## Melhor escolha para este projeto

Para evitar confusao enquanto voce esta aprendendo, escolha um ambiente fixo.

Recomendacao simples:

```text
Se voce usa VS Code/PowerShell: fique no Windows.
Se voce usa terminal Ubuntu/WSL: fique no WSL.
```

O importante e nao misturar.

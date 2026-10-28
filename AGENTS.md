# AGENTS.md - Instruções para Agentes

## Comandos Essenciais

```bash
npm run dev          # Servidor dev em http://localhost:5173
npm run build        # Compila TypeScript E faz build Vite (tsc -b && vite build)
npm run lint         # Lint com oxlint (NÃO ESLint)
npm test             # Vitest em modo watch
npm run test:run     # Vitest execução única
```

## Configurações Críticas

### Tailwind CSS v4
- **Não existe** `tailwind.config.js`
- Configuração em `src/index.css` usando `@theme` block
- Plugin `@tailwindcss/vite` (não PostCSS)
- Cores customizadas: `--color-primary-*` (50-900)
- Dark mode: classe `.dark` no `<html>` via `@custom-variant`

### TypeScript Strict
- `verbatimModuleSyntax`: **obrigatório** usar `import type` para tipos
- `noUnusedLocals` e `noUnusedParameters`: remove imports/params não usados
- Build falha se `tsc -b` tiver erros (executa antes do Vite)

### Lint: oxlint (não ESLint)
- Config: `.oxlintrc.json`
- Regras: `react/rules-of-hooks` (error), `react/only-export-components` (warn)
- **Não crie** arquivos `.eslintrc`

## Arquitetura

### Fluxo de Execução
```
index.html → src/main.tsx → App.tsx → routes/index.tsx → Layout + Pages
```

### Estrutura
- **Rotas**: `src/routes/index.tsx` (createBrowserRouter)
  - `/` → HomePage
  - `/sobre` → AboutPage
  - `/projetos` → ProjectsPage
  - `/projetos/:id` → ProjectDetailPage
  - `/contato` → ContactPage
- **Dados**: `src/data/*.json` (about, projects, socials) - conteúdo editável
- **Estado**: Zustand stores em `src/store/` com persistência localStorage
- **Tema**: `useThemeStore` alterna classe `.dark` no documentElement

### Componentes
- `components/layout/` → Header, Footer, Layout
- `components/ui/` → Button, Card, Badge, ThemeToggle
- `components/sections/` → Hero, AboutPreview, FeaturedProjects

## Testes

### Configuração
- **Vitest** com `globals: true` (describe/it/expect disponíveis globalmente)
- **jsdom** environment
- Setup: `src/test/setup.ts` importa `@testing-library/jest-dom/vitest`
- **Co-localizados**: `*.test.ts(x)` ao lado dos arquivos fonte

### Padrões
- Stores: testados diretamente via `useStore.getState()` e `.setState()`
- Pages: envolvem em `<BrowserRouter>` antes de renderizar
- Reset state no `beforeEach` quando necessário (ex: `localStorage.clear()`)

## Convenções

### Rotas em Português
 URLs das rotas são em português (`/sobre`, `/projetos`, `/contato`)

### Importações
```typescript
// Correto (verbatimModuleSyntax)
import type { Theme } from './types'
import { useThemeStore } from './store/theme'

// Incorreto
import { Theme } from './types'  // Erro: Theme é type-only
```

### Dados Dinâmicos
- Editar `src/data/*.json` para atualizar conteúdo do site
- Projects filtrados por tag/tecnologia
- Social links em `socials.json`

## Diretrizes de Trabalho

### Qualidade
- **Validação obrigatória**: antes de considerar trabalho concluído, execute `npm run build && npm run lint && npm run test:run`
- **Testes são mandatórios**: toda nova funcionalidade ou mudança deve incluir testes
- **Componentes pequenos**: mantenha componentes focados com lógica mínima; extraia para hooks ou utils quando crescer
- **Iteração rápida**: prefira soluções funcionais sobre abstrações perfeitas, mas sem sacrificar qualidade

### Dependências
- **Bundle pequeno**: evite adicionar dependências desnecessárias; verifique se a funcionalidade já existe ou pode ser implementada de forma simples
- Avalie o tamanho do pacote antes de instalar; prefira alternativas leves quando possível

### Git
- **Trabalho direto na main**: não criar branches de feature; commits diretos na branch principal
- Mensagens de commit claras e descritivas

### Antes de Fazer Mudanças
1. Execute `npm run build` para verificar tipos (tsc -b)
2. Execute `npm run lint` para validar código
3. Execute `npm run test:run` para garantir que testes passam
4. Só considere trabalho concluído se todos os comandos acima passarem

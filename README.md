# Portfólio Pessoal

Um portfólio moderno e minimalista desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Vite** - Build tool ultra-rápida
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento
- **Zustand** - Gerenciamento de estado
- **Framer Motion** - Animações
- **Vitest** - Framework de testes
- **React Testing Library** - Testes de componentes

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 🏗️ Build

```bash
npm run build
```

## 🧪 Testes

```bash
npm test          # Modo watch
npm run test:run  # Execução única
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout
│   ├── ui/            # Button, Card, Badge, ThemeToggle
│   └── sections/      # Hero, AboutPreview, FeaturedProjects
├── pages/             # Home, About, Projects, Contact
├── store/             # Zustand (theme, projects)
├── hooks/             # useLocalStorage, useAbout
├── data/              # JSON files (about, projects, socials)
├── routes/            # Configuração React Router
├── types/             # Interfaces TypeScript
├── utils/             # Helpers
└── test/              # Setup de testes
```

## 🎨 Funcionalidades

- ✅ Dark/Light mode com toggle
- ✅ Animações suaves com Framer Motion
- ✅ Filtros de projetos por tag/tecnologia
- ✅ Dados carregados de JSON local
- ✅ Persistência no localStorage
- ✅ Design responsivo e minimalista
- ✅ Totalmente testado

## 📝 Personalização

Edite os arquivos JSON em `src/data/`:
- `about.json` - Suas informações pessoais
- `projects.json` - Seus projetos
- `socials.json` - Links de redes sociais

## 🚀 Deploy (GitHub Pages)

```bash
npm run build
```

Configure o GitHub Pages para usar a branch `gh-pages` ou o diretório `dist`.

## 📄 Licença

MIT

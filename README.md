# enjanga-next-3-components-lib

[![npm version](https://img.shields.io/npm/v/enjanga-next-3-components-lib?color=blue)](https://www.npmjs.com/package/enjanga-next-3-components-lib)

A reusable React component library built for Next.js 13+ applications, implementing the IBM Carbon Design System. This library is designed for **consumption only** — JavaScript and CSS files are pre-built, minified, and optimized for production use.

> ⚠️ **Important:** This library is built on top of the [IBM Carbon Design System](https://carbondesignsystem.com/). To function correctly, **Carbon must be installed and configured** in the consuming project.

## 📚 Live Storybook

Explore the interactive documentation and try all components in Storybook, hosted on Chromatic:  
**[https://6856ac512f4faa67a7d9c5c2-ijmvkylkad.chromatic.com/](https://6856ac512f4faa67a7d9c5c2-ijmvkylkad.chromatic.com/)**

## 🚀 Stack & Features

- **Framework:** Next.js 13+ (App Router), React 18+
- **Language:** TypeScript
- **Design System:** IBM Carbon Design System
- **Styling:** SASS
- **Development & Testing:** Storybook, Chromatic, React Testing Library, Vitest
- **Build Tool:** Tsup

## 📦 Installation

1. **Install the library and peer dependencies:**

   ```bash
   npm install enjanga-next-3-components-lib next@^15.0.0 react@^18.0.0 react-dom@^18.0.0
   # or
   yarn add enjanga-next-3-components-lib next@^15.0.0 react@^18.0.0 react-dom@^18.0.0
   ```

2. **Install and configure IBM Carbon:**
   Follow the [official Carbon React setup guide](https://carbondesignsystem.com/developing/frameworks/react#install).
   ```bash
   npm install @carbon/react @carbon/styles
   # or
   yarn add @carbon/react @carbon/styles
   ```
   Import Carbon’s global styles (e.g., in `app/layout.tsx`):
   ```tsx
   import '@carbon/styles/css/index.css';
   ```

## 🔧 Usage

Import components directly from the package. Only components listed in the public API (`src/components/index.ts`) are exposed.

```tsx
// Example: Using the ContactButton component
import { ContactButton } from 'enjanga-next-3-components-lib';

export default function MyPage() {
  return <ContactButton text="Get in Touch" />;
}
```

✅ **Note:** Component CSS is automatically included — no manual CSS imports needed.

## 🧪 Testing

This library is tested for quality and reliability:

- **Unit Tests**: React Testing Library + Vitest
- **Interaction Tests**: Covers complex user flows
- **Accessibility (a11y)**: Validated via Storybook’s a11y addon
- **Visual Regression**: Chromatic snapshots prevent UI regressions

Run tests locally:

```bash
yarn test
# or in watch mode
yarn test:watch
```

## 🛠 Development

For contributors and maintainers.

### Prerequisites

- Node.js (LTS recommended)
- Yarn

### Local Setup

```bash
git clone https://github.com/ericnjanga/enjanga-next-3-components-lib.git
cd enjanga-next-3-components-lib
yarn install
yarn storybook
```

Visit **http://localhost:6006** to start developing components.

### Key Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `yarn storybook`       | Start Storybook dev server           |
| `yarn build`           | Build the library (TypeScript + CSS) |
| `yarn build-storybook` | Export static Storybook site         |
| `yarn chromatic`       | Publish Storybook to Chromatic       |
| `yarn lint`            | Run ESLint + TypeScript checks       |
| `yarn format`          | Format code with Prettier            |

### Project Structure

```txt
enjanga-next-3-components-lib/
├── .storybook/        # Storybook config
├── src/
│   ├── app/           # Next.js App Router setup
│   ├── components/    # React components
│   │   ├── ContactButton/
│   │   │   ├── ContactButton.tsx
│   │   │   ├── _ContactButton.scss
│   │   │   └── index.ts
│   │   └── index.ts   # Public API (exports components)
│   ├── stories/       # Storybook stories
│   ├── tests/         # Component tests
│   ├── styles/        # Global styles + SASS utilities
│   └── utils/         # Shared utilities
├── package.json
└── tsconfig.json
```

## 🧠 Philosophy

### Carbon as Foundation

This library builds on [Carbon](https://carbondesignsystem.com/) to create opinionated, purpose-driven components.  
For example, `ContactButton` wraps Carbon’s `Button`, exposing only a simplified prop API for consistency.

### Design Principles

- **Modularity** – Components built in isolation, easily extended
- **Reusability** – Single-purpose, but broadly applicable
- **Robustness** – Strong typing & validated props
- **Performance** – Memoized components minimize re-renders
- **Flexibility** – Smart defaults, minimal configuration needed

### Component Types

- **Public Components** – Exported via `src/components/index.ts` (documented, tested, stable)
- **Internal Components** – Used only inside the library (not exported)

## 📄 License

Licensed under the **Apache License 2.0**. See [LICENSE](./LICENSE).

## 🤝 Contributing

This is primarily a personal portfolio/project library. Contributions are welcome — open an issue before major changes.

## 🐛 Reporting Issues

Please report bugs or request features via [GitHub Issues](https://github.com/ericnjanga/enjanga-next-3-components-lib/issues).

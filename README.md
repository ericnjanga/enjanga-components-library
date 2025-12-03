# enjanga-components-library

[![npm version](https://img.shields.io/npm/v/enjanga-components-library?color=blue)](https://www.npmjs.com/package/enjanga-components-library)

A reusable React component library built for Next.js 13+ applications, implementing the IBM Carbon Design System. This library is designed for **consumption only** — JavaScript and CSS files are pre-built, minified, and optimized for production use.

> ⚠️ **Important:** This library is built on top of the [IBM Carbon Design System](https://carbondesignsystem.com/). To function correctly, **Carbon must be installed and configured** in the consuming project.

---

## 🔗 Dependency on enjanga-core-setup

This library depends on **[enjanga-core-setup](https://github.com/ericnjanga/enjanga-core-setup)** for design tokens, Carbon utilities, and shared SASS configuration.  
- `enjanga-core-setup` bundles Carbon’s design tokens (spacing, type, colors, motion, grid, etc.) and forwards them through a single entry point:  

  ```scss
  @use 'enjanga-core-setup/styles' as core;
  ```

- Components in this library rely on these tokens to ensure **consistent theming, spacing, and typography** across all consuming projects.  
- This separation keeps **core design tokens/utilities** (in `enjanga-core-setup`) independent from **components** (in `enjanga-components-library`).

---

## 📚 Live Storybook

Explore the interactive documentation and try all components in Storybook, hosted on Chromatic:  
**[https://6856ac512f4faa67a7d9c5c2-ijmvkylkad.chromatic.com/](https://6856ac512f4faa67a7d9c5c2-ijmvkylkad.chromatic.com/)**

## 🚀 Stack & Features

- **Framework:** Next.js 13+ (App Router), React 19
- **Language:** TypeScript
- **Design System:** IBM Carbon Design System
- **Styling:** SASS (+ enjanga-core-setup)
- **Development & Testing:** Storybook, Chromatic, React Testing Library, Vitest
- **Build Tool:** Tsup

## 📦 Installation

1. **Install the library and peer dependencies:**

   ```bash
   npm install enjanga-components-library next@^15.0.0 react@^19.0.0 react-dom@^19.0.0 react-is@^19.0.0
   # or
   yarn add enjanga-components-library next@^15.0.0 react@^19.0.0 react-dom@^19.0.0 react-is@^19.0.0
   ```

   > 🔑 `react-is` is required when using **Carbon Tabs** (and certain other Carbon components) with React 19, due to compatibility issues in Carbon’s internals.

2. **Install and configure IBM Carbon and core setup:**  
   ```bash
   npm install @carbon/react @carbon/styles enjanga-core-setup
   # or
   yarn add @carbon/react @carbon/styles enjanga-core-setup
   ```

   Import Carbon’s global styles (e.g., in `app/layout.tsx`):  
   ```tsx
   import '@carbon/styles/css/index.css';
   ```

---

## 🔧 Usage

Import components directly from the package. Only components listed in the public API (`src/components/index.ts`) are exposed.

```tsx
// Example: Using the ContactButton component
import { ContactButton } from 'enjanga-components-library';

export default function MyPage() {
  return <ContactButton text="Get in Touch" />;
}
```

✅ **Note:** Component CSS is automatically included — no manual CSS imports needed.

---

## 🐛 Troubleshooting

- **Error:**  
  ```
  Dynamic require of "react-is" is not supported
  ```
  **Fix:** Ensure `react-is` is installed as a direct dependency in your project:  
  ```bash
  npm install react-is@^19.0.0
  ```

---

## 🎨 Styling Structure

This library’s styles follow a **three-tier structure** for clarity and maintainability:

1. **Core (via `enjanga-core-setup`)**  
   - Provides Carbon design tokens, utilities, and mixins.  
   - Always imported with:  
     ```scss
     @use 'enjanga-core-setup/styles' as core;
     ```
   - Example usage: `core.$spacing-03`.

2. **Global (library-wide styles in `src/styles/global/`)**  
   - Apply across components (e.g., typography, skeleton loading animation, utilities).  
   - Imported into the main stylesheet (`src/styles/index.scss`).  

3. **Component-level (scoped styles in `src/components/*/_Component.scss`)**  
   - Define structure, layout, and visuals for individual components.  
   - Can extend/override global styles when necessary.

This separation ensures **consistent design foundations (core)**, **predictable global rules**, and **flexible, isolated component styles**.

---

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
git clone https://github.com/ericnjanga/enjanga-components-library.git
cd enjanga-components-library
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
enjanga-components-library/
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

Please report bugs or request features via [GitHub Issues](https://github.com/ericnjanga/enjanga-components-library/issues).

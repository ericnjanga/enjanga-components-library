# Eric Njanga Portfolio – Component Library

This is a [React component library](https://www.chromatic.com/library?appId=6856ac512f4faa67a7d9c5c2) built for Eric Njanga’s portfolio. The library is designed for **consumption only** — JavaScript and CSS files are minified and optimized for external use.

> ⚠️ **Important:** This library depends on the [IBM Carbon Design System](https://carbondesignsystem.com/). It leverages Carbon’s components, patterns, and styles. To function correctly, **Carbon must be installed and configured** in the consuming project.

## <br />

<br />

## 🚀 Stack & Features

- **Next.js (React)**
- **TypeScript**
- **IBM Carbon Design System**
- **SASS**
- **Storybook**
- **Chromatic CLI** (for live Storybook deployment)
- **React Testing Library**

---

## 🛠 Development Workflow

### Storybook for UI Development

Storybook is used to develop and test components in isolation. The development environment mirrors production by:

- Injecting Carbon styles via `.storybook/preview.ts`
- Including **only** the component styles from this library in the npm package (not Carbon’s), to reduce duplication and keep the package lightweight

---

## 📘 Live Storybook

View the published version of this component library on [Chromatic](https://www.chromatic.com/library?appId=6856ac512f4faa67a7d9c5c2).

---

## 📁 Project Structure

```txt
eric-njanga-component-library/
├── .next/ # Next.js configuration
├── .storybook/ # Storybook configuration
├── src/
│ ├── app/ # ...
│ ├── components/ # All React components
│ │ ├── ContactButton/ # Example component (contains both public & internal)
│ │ │ ├── ContactButton.tsx # Component implementation
│ │ │ ├── \_ContactButton.scss # Component styles
│ │ │ └── index.ts # Component exporting file
│ │ ├── ... # Other components follow same pattern
│ │ └── index.ts # Public API (exports only public components)
│ ├── stories/ # Storybook stories
│ │ ├── components/ # All React components
│ │ │ ├── ContactButton.stories.tsx # Component implementation
│ │ │ ├── \*\*\*.stories.tsx # Other stories
│ ├── tests/ # Components tests
│ ├── styles/ # Global styles and SASS utilities
│ └── utils/ # Shared utility functions
├── package.json
└── tsconfig.json
```

### Component Visibility

The library maintains two types of components:

1. **Public Components**

   - Exported in `src/components/index.ts`
   - Available for external consumption
   - Fully documented in Storybook
   - Type definitions automatically generated

2. **Internal Components**
   - Used only by other components in the library
   - Not exported in the public API
   - Example: `ContactModal` (used internally but not exposed externally)

### Key Implementation Details

- **Carbon Integration**: All components build upon IBM Carbon's design system
- **Scoped Styles**: Each component manages its own styles via SASS modules
- **Type Safety**: Full TypeScript support with generated type definitions
- **Testing**: Components include React Testing Library unit tests and accessibility checks

### Using the Library

1. Install the library:

   ```bash
   npm install eric-njanga-component-library
   # or
   yarn add eric-njanga-component-library
   ```

2. Ensure [Carbon Design System](https://carbondesignsystem.com/) is properly configured in your project

3. Import components from the public API:
   ```ts
   import { ContactButton } from 'eric-njanga-component-library';
   ```

------------ (the part below needs refinement | last uodate: Jun 23, 2024) ------------
...

## 📦 Getting Started

...

## 🧪 Testing

...

## 📚 Component Library

...

## 📄 License

...

## 📦 Getting Started

1. **Install the library** (coming soon):

# Philosophy

A few observations on what's the thoughts behind the creation of this components' library

## Carbon's Selective implementation

[Carbon](https://carbondesignsystem.com/) is a toolbox from which I pick my library's features. It is the design prototypes that drive my implementation decisions. For example, the "ContactButton" component will always be a primary, or secondary button at most and will always display a select number of icons related to the action of connecting with someone (email, chat, ...). Therefore, the component will have limited properties, options, and the story will have limites edge cases (no need of a "ContactButton" story with no icons, or in danger mode). See the component story for illustration.

the component will only offer the following possibilities to consummers:

- text: (string)
- kind: 'primary' | 'secondary' (Optional and 'primary' by default)
- size: 'sm' | 'md' (Optional and 'md' by default)

## Scalabiity

This component library follows the following principles:

- Modularity: Components built in isolation and made easier to extens
- Reusability: Components focused on a single purpose, needed in many places
- Separation of concerns: Larger components recompose smaller components in a cleaner way

## Robustness

- Strong typing: Component props are strictly typed

## Flexibility

- Flexible rendering: Some components support dynamic wrapper tags (div/section, ul/ol, ...)
- Conditional rendering: Using safely checks before rendering (list?.content?.length)

## Performance Optimization

A memoized version is offered for components that tends to grow in complexity, re-renders frequency, and have diverse usage patterns. These components are:
Most components can be imported in their .

- HeadlinedList
- List
  Note: Lightweight components unusally don't need to be memoized

# How to use this component library

## Installation:

Run the commands:

- yarn install (All hey dependencies will be installed)

## Ready for export after changes

yarn build (Bundles up the component library)
yarn link (Registers the component library with yarn)

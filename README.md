# Eric Njanga Portfolio – Component Library

This is a [React component library](https://www.chromatic.com/library?appId=6856ac512f4faa67a7d9c5c2) built for Eric Njanga’s portfolio. The library is designed for **consumption only** — JavaScript and CSS files are minified and optimized for external use.

> ⚠️ **Important:** This library depends on the [IBM Carbon Design System](https://carbondesignsystem.com/). It leverages Carbon’s components, patterns, and styles. To function correctly, **Carbon must be installed and configured** in the consuming project.

---

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

------------ (the part below needs refinement | last uodate: Jun 21, 2024) ------------

# Philosophy

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

# List of components

- ...
- ...
- ...
- ...

## Ready for export after changes

yarn build (Bundles up the component library)
yarn link (Registers the component library with yarn)

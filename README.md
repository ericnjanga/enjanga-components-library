# enjanga-components-library

A focused React component package currently exporting one component: `Navbar`.

## Install

```bash
npm install enjanga-components-library
```

Import the component and its stylesheet:

```tsx
import { Navbar, type NavbarItem } from 'enjanga-components-library';
import 'enjanga-components-library/navbar.css';

const items: NavbarItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
];

export function SiteNavigation() {
  return <Navbar brand="Enjanga" items={items} />;
}
```

The component supports controlled or uncontrolled active links, responsive
desktop and drawer layouts, external and disabled links, custom action content,
Escape-to-close behavior, focus restoration, and body scroll locking.

## Development

```bash
npm install
npm test
npm run type-check
npm run storybook
```

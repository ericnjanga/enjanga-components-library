# enjanga-components-library

A focused React component package exporting `Navbar` and `Button`.

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

Every newly created component must include a Storybook Docs page with a
`Unit tests` section. Add one heading per test and a paragraph explaining the
behavior and contract that test protects.

## Button

```tsx
import { Button } from 'enjanga-components-library';
import 'enjanga-core-setup/typography.css';
import 'enjanga-core-setup/design-tokens.css';
import 'enjanga-components-library/button.css';

<Button variant="primary" icon="chevron-right" onClick={handleContinue}>Continue</Button>
```

Install `enjanga-core-setup` alongside the library. It is the sole source of button
color, typography, sizing, and interaction tokens; load its updated token build.
Variants: `primary` (default), `secondary`, `tertiary`. Optional trailing icons:
`chevron-right`, `close`. Native button props and refs are supported, including
`disabled` and `type="submit"`; the default type is `button`.

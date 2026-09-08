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

## CaseStudyCard

```tsx
import { CaseStudyCard } from 'enjanga-components-library';
import 'enjanga-core-setup/typography.css';
import 'enjanga-core-setup/design-tokens.css';
import 'enjanga-components-library/case-study-card.css';

<CaseStudyCard
  title="Accessible experiences"
  description={["The challenge.", "The outcome."]}
  posterSrc="/case-study.jpg"
  posterAlt="Project preview"
  onWatchIntro={openVideo}
  onReadCaseStudy={openCaseStudy}
/>
```

The title is always an h2 using the core heading preset. The reading action uses
Button; the card stylesheet includes its styles. The layout stacks below 1056px
and uses two columns from 1056px. Both responsive boundaries and all visual tokens
are defined in core setup. Action labels and disabled states can be customized.

### Case study detail page

Import `CaseStudyPage` from `enjanga-components-library` and its styles from
`enjanga-components-library/case-study-page.css`, alongside the core typography
and design token styles. Pass `title`, optional `description`, and article markup
as children. Contentful fetching and rich-text conversion belong to the consuming
application; headings, paragraphs, links, dividers, quotes, lists and media receive
scoped article styling. Navigation and footer remain part of the application shell.

```tsx
<CaseStudyPage title={entry.title}>
  {renderRichText(entry.description)}
</CaseStudyPage>
```

Storybook → Pages / Case Study includes the financial records article, mobile,
dark and introductory-text examples. Its screenshot placeholder matches the
current Figma design; the component supports real images supplied by the app.

CaseStudyPage opens article links ending in `.mp4`, `.webm`, or `.ogv` in the
shared video dialog (query strings are supported). Link text becomes the dialog
title. Download links and modified clicks retain native browser behavior. The
`walkthrough` dialog variant reuses the player and close controls without a
case-study navigation action.

Component design values are provided by `enjanga-core-setup/design-tokens.css`.
Navbar dimensions, focus indicators, dialog compact styles, colors and motion
have no local fallback values. Load the core stylesheet before component CSS.
Shared responsive mixins are exported by `enjanga-core-setup/styles-responsive`.

### Router integration for Button

`Button` renders a native button when no `href` is supplied, and a native
anchor by default when `href` is supplied. Wrap consumers in
`ButtonLinkProvider` to supply a framework-specific link adapter. This also
applies to Buttons nested inside `CaseStudyCard` and `CaseStudiesPage`.
The adapter receives `ButtonLinkProps`, including the anchor ref, children,
styles, accessibility attributes, and event handlers. Define the adapter
inside a client component when using Next.js App Router. The portfolio's
adapter uses `next/link` for relative internal destinations and native anchors
for absolute URLs, special schemes, downloads, and new-tab destinations.
Action buttons never pass through the adapter.

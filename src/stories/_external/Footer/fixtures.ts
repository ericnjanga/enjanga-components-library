import type { FooterProps } from '../../../components/Footer';

// Contentful master / en-CA snapshot, refreshed 2026-09-17.
// Site settings: 4LFV6OgBj0Clr7KyiX5LUV. Shared by standalone and page stories.
export const footerFixture = {
  siteName: 'Eric Njanga',
  copyright: 'Copyright @ Toronto, Canada.',
  links: [
    {
      label: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/ericnjanga/',
      openInNewTab: true,
      accessibleLabel: 'Visit Eric Njanga’s LinkedIn profile (opens in a new tab)',
    },
    {
      label: 'GitHub Profile',
      href: 'https://github.com/ericnjanga',
      openInNewTab: false,
      accessibleLabel: '...',
    },
    {
      label: 'Publications',
      href: 'https://www.linkedin.com/newsletters/modern-ui-architecture-7498340545321123840/',
      openInNewTab: true,
      accessibleLabel: 'Visit Eric Njanga’s publications dedicated to Modern UI Architecture.',
    },
  ],
} satisfies FooterProps;

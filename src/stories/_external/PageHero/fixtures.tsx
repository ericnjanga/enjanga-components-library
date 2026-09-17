import { Button } from '../../../components/Button';
import type { PageHeroProps } from '../../../components/PageHero';

// Contentful master / en-CA snapshot, refreshed 2026-09-17.
// Hero: 5LHzwm6iqSZnqoBr1A8k3C; CTA: 2brSgjbNGVjTP6anLk42x4.
export const homeHeroFixture = {
  title: 'Architecting modern enterprise interfaces.',
  description: 'I engineer scalable front-end systems that transform complex business requirements into intuitive, maintainable digital experiences.',
  action: <Button variant="primary" icon="chevron-down" href="/#expertise">Explore my expertise</Button>,
} satisfies PageHeroProps;

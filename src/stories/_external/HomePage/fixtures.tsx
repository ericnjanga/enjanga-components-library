import dashboard from './assets/enterprise-dashboard.png';
import portrait from './assets/eric-njanga-portrait.jpeg';
import { InteractiveImage } from '../../../components/InteractiveImage';
import type { HomePageProps } from '../../../components/HomePage';
import { Button } from '../../../components/Button';

export const homePageFixture = {
    title: 'Architecting modern enterprise interfaces.',
    description:
      'I engineer scalable front-end systems that transform complex business requirements into intuitive, maintainable digital experiences.',
    expertise: {
      title: 'Engineering beyond the interface.',
      items: [
        {
          title: 'Core web application architecture',
          description:
            'I design scalable front-end architectures that turn complex business requirements into maintainable systems—connecting UI components, data, APIs, state, accessibility, performance, and testing into a cohesive application.',
        },
        {
          title: 'Product engineering',
          description:
            'I approach software as both an engineering system and a business product—balancing user experience, technical constraints, maintainability, and evolving business needs throughout the product lifecycle.',
        },
      ],
      action: (
        <Button href="/case-studies" icon="chevron-right">
          Explore case studies
        </Button>
      ),
      image: (
        <InteractiveImage src={dashboard} alt="Core web application architecture example" href="/case-studies" interactionLabel="Explore case studies" />
      ),
    },
    about: {
      title: 'Passionate about enterprise software',
      image: <InteractiveImage src={portrait} alt="Eric Njanga" href="https://www.linkedin.com/in/ericnjanga/" target="_blank" interactionLabel="LinkedIn Profile" />,
      paragraphs: [
        'My career has been shaped by large organizations, complex systems, and the challenge of bringing established software forward. Over the years, I’ve learned that successful modernization is about more than technology—it requires understanding users, business priorities, organizational constraints, and the people responsible for delivering change.',
        'That perspective shapes how I work today: combining front-end architecture, product thinking, and enterprise experience to help build software that remains useful, adaptable, and maintainable as organizations evolve.',
      ],
      action: (
        <Button
          href="https://www.linkedin.com/in/ericnjanga/"
          icon="chevron-right"
        >
          LinkedIn Profile
        </Button>
      ),
    },
  } satisfies HomePageProps;

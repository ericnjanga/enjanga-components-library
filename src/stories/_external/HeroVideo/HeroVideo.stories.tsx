import type { Meta, StoryObj } from '@storybook/react';
import HeroVideo from '../../../components/HeroVideo/HeroVideo';

const informationBlockPayload = {
  data: {
    infoBlock: {
      sys: {
        id: '4llAs4gW4mc1fikxbW6u4V',
      },
      description: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'A User Interface is the visual layer through which people interact with complex systems. What you are experiencing right now is a set of business rules translated into actions you can understand and complete with confidence.',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'My job is to design and engineer these systems of interaction.',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'document',
        },
      },
      title: 'Leading the Architecture of User Interface Systems.',
    },
  },
};

const featuredObjectPayload1 = {
  data: {
    blogPost: {
      sys: {
        id: '33GP5W7X2M6W8rZQlQnRCN',
      },
      title:
        'Architecting a Resilient Bank Deposit Flow for High-Volume Service Operations',
        slug: 'resilient-bank-deposit-flow',
      businessDomain: [
        'Financial Services',
        'Enterprise Applications',
        'Government Services',
      ],
      techstack: ['Next.js', 'React'],
      introVideo: {
        url: 'https://videos.ctfassets.net/z41mabrhnu57/7FnVqipmlpPTQgEZzOVuST/be704925131d45c72092497143d2b16f/Architecting_a_Resilient_Bank_Deposit_Flow.mp4',
        contentType: 'video/mp4',
        fileName: 'Architecting a Resilient Bank Deposit Flow.mp4',
        size: 23293348,
        width: null,
        height: null,
        title: 'Architecting a Resilient Bank Deposit Flow',
        description: '',
      },
      introVideoImage: {
        url: 'https://images.ctfassets.net/z41mabrhnu57/3VpLS8X4hILdJcW8fke2yH/04f0425ee11ffb56c5d0a2f14dbf96f4/aedfb4ac-d064-4225-a6da-316981ab13e5.png',
        contentType: 'image/png',
        fileName: 'Screenshot 2026-06-06 at 8.38.57 AM.png',
        size: 661994,
        width: 1911,
        height: 1070,
        title: 'Screenshot 2026-06-06 at 8.38.57 AM',
        description: '',
      },
    },
  },
};

const featuredObjectPayload2 = {
  "data": {
    "blogPost": {
      "sys": {
        "id": "6CYpnNFqeIPAZoMFmzLFmB"
      },
      "title": "Operationalizing a Resilient Bank Deposit Workflow: From Mocked Data to Production APIs",
      "slug": "bank-deposit-api-integration",
      "businessDomain": [
        "Government Services",
        "Enterprise Applications",
        "Financial Systems"
      ],
      "techstack": [
        "Next.js",
        "APIs",
        "React",
        "TypeScript"
      ],
      "introVideo": {
        "url": "https://videos.ctfassets.net/z41mabrhnu57/4rZE2vr7k6KbAdNiFDYmgT/ff6358303c95a1c2a06740d40cae71f0/Bank-Deposit-Flow-Integration2.safari.compressed.mp4",
        "contentType": "video/mp4",
        "fileName": "Bank Deposit Flow Integration.mp4",
        "size": 10690021,
        "width": null,
        "height": null,
        "title": "Bank Deposit Flow Integration",
        "description": ""
      },
      "introVideoImage": {
        "url": "https://images.ctfassets.net/z41mabrhnu57/i7dUjMx7ZlvJCKBAyYiz1/8dcaca2fa2d329a74ada538338d72710/Bank_Deposit_Flow_Integration.png",
        "contentType": "image/png",
        "fileName": "Bank Deposit Flow Integration.png",
        "size": 804856,
        "width": 2874,
        "height": 1610,
        "title": "Bank Deposit Flow Integration",
        "description": ""
      }
    }
  }
};

const featuredObjectPayload = {
  ...featuredObjectPayload2
};

export const heroVideoMappedArgs = {
  informationBlock: {
    title: informationBlockPayload.data.infoBlock.title,
    description: informationBlockPayload.data.infoBlock.description,
  },
  featuredObject: {
    title: featuredObjectPayload.data.blogPost.title,
    slug: featuredObjectPayload.data.blogPost.slug,
    businessDomain: featuredObjectPayload.data.blogPost.businessDomain,
    teckStack: featuredObjectPayload.data.blogPost.techstack,
    video: featuredObjectPayload.data.blogPost.introVideo,
    videoImage: featuredObjectPayload.data.blogPost.introVideoImage,
  },
};

const meta: Meta<typeof HeroVideo> = {
  title: 'External Components/HeroVideo',
  component: HeroVideo,
  tags: [],
  args: {
    ...heroVideoMappedArgs,
  },
};

export default meta;

type Story = StoryObj<typeof HeroVideo>;

export const Default: Story = {};

export const AutoPlayMuted: Story = {
  args: {
    autoPlay: true,
    muted: true,
    loop: true,
  },
};

export const ImageFallback: Story = {
  args: {
    featuredObject: {
      ...heroVideoMappedArgs.featuredObject,
      video: undefined,
    },
  },
};

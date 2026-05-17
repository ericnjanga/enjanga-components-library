import type { Meta, StoryObj } from '@storybook/react';
import TileValue from '../../../components/TileValue';
import { mockRichTextLarge, mockRichTextSmall } from '@/mockData/mockRichText';

const mockInlineEntryDescription = {
  json: {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'See the full ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'entry-hyperlink',
            data: {
              target: {
                sys: {
                  id: 'case-study-123',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            content: [
              {
                nodeType: 'text',
                value: 'case study',
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: 'text',
            value: ' for implementation details.',
            marks: [],
            data: {},
          },
        ],
      },
    ],
  },
  links: {
    assets: {
      block: [],
    },
    entries: {
      inline: [
        {
          sys: { id: 'case-study-123' },
          __typename: 'CaseStudy',
          slug: 'inline-entry-link-check',
        },
      ],
    },
  },
};

const meta: Meta<typeof TileValue> = {
  title: 'External Components/TileValue',
  component: TileValue,
  args: {
    pictogramName: 'Leadership',
    title: 'Leadership principles',
    slug: 'leadership-principles',
    description: mockRichTextSmall.description,
  },
};

export default meta;
type Story = StoryObj<typeof TileValue>;

export const Default: Story = {
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <TileValue {...args} />
    </div>
  ),
};

export const LongDescription: Story = {
  args: {
    description: mockRichTextLarge.description,
    title: 'Governance and accountability',
    slug: 'Transforming legacy applications into scalable, accessible, and maintainable platforms while preserving critical business workflows and minimizing operational disruption.',
    pictogramName: 'DataScience',
  },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <TileValue {...args} />
    </div>
  ),
};

export const WithInlineEntryHyperlink: Story = {
  args: {
    title: 'Inline entry hyperlink',
    slug: 'open-modal-to-verify-link',
    pictogramName: 'Leadership',
    description: mockInlineEntryDescription,
  },
};

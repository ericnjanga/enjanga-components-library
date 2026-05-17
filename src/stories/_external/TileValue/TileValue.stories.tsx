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
            value: 'Verify entry hyperlink styles in ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'entry-hyperlink',
            data: {
              target: {
                sys: {
                  id: 'blog-post-123',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            content: [
              {
                nodeType: 'text',
                value: 'this case study',
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: 'text',
            value: ' and compare it to ',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            data: {
              uri: 'https://example.com',
            },
            content: [
              {
                nodeType: 'text',
                value: 'a regular external link',
                marks: [],
                data: {},
              },
            ],
          },
          {
            nodeType: 'text',
            value: '.',
            marks: [],
            data: {},
          },
        ],
      },
      {
        nodeType: 'unordered-list',
        data: {},
        content: [
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'entry-hyperlink',
                    data: {
                      target: {
                        sys: {
                          id: 'blog-post-456',
                          type: 'Link',
                          linkType: 'Entry',
                        },
                      },
                    },
                    content: [
                      {
                        nodeType: 'text',
                        value: 'Unordered list entry hyperlink',
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'hyperlink',
                    data: {
                      uri: 'https://example.org',
                    },
                    content: [
                      {
                        nodeType: 'text',
                        value: 'Unordered list standard hyperlink',
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        nodeType: 'ordered-list',
        data: {},
        content: [
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'entry-hyperlink',
                    data: {
                      target: {
                        sys: {
                          id: 'blog-post-789',
                          type: 'Link',
                          linkType: 'Entry',
                        },
                      },
                    },
                    content: [
                      {
                        nodeType: 'text',
                        value: 'Ordered list entry hyperlink',
                        marks: [],
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            nodeType: 'list-item',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                data: {},
                content: [
                  {
                    nodeType: 'text',
                    value: 'Plain list item text for spacing verification',
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
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
      hyperlink: [
        {
          sys: { id: 'blog-post-123' },
          __typename: 'BlogPost',
          slug: 'inline-entry-link-check',
        },
        {
          sys: { id: 'blog-post-456' },
          __typename: 'BlogPost',
          slug: 'unordered-entry-link-check',
        },
        {
          sys: { id: 'blog-post-789' },
          __typename: 'BlogPost',
          slug: 'ordered-entry-link-check',
        },
      ],
      inline: [],
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

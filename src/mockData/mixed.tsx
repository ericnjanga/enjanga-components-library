import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeOpt,
  CP_sizeType,
} from '@/components/CustomPictogram/libs/types';
import { CP_propsType } from '@/components/CustomPictogram/libs/types';

export const mockPlainText =
  'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.';

// For Heading.stories.tsx ...
export const mockHeading = {
  plain: `Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.`,
  jsx: (
    <>
      Liquorice <a href="#">liquorice fruitcake </a> tiramisu
      <span>🔔</span>
      sesame snaps {/* JSX Fragment */}
    </>
  ),
};

export const mockCustomPictogram = {
  name: CP_nameOpt[0] as CP_nameType,
  size: CP_sizeOpt[0] as CP_sizeType,
  className: '',
} as CP_propsType;
import { red60 } from '@carbon/colors';

export const mockTextLengthList = [50, 100, 200, 300, 500, 1000];

// ....
const textColor = red60;
export const styleHeadingLabel = {
  display: 'block',
  marginBottom: '0.25rem',
  color: textColor,
};



export const quoteSamples = [
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "paragraph",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Great design is ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "not just what it looks like",
              "marks": [
                { "type": "bold" },
                { "type": "italic" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": " but ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "how it works",
              "marks": [
                { "type": "underline" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": ". - Steve Jobs",
              "marks": [],
              "data": {}
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "heading-2",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Innovation distinguishes",
              "marks": [
                { "type": "bold" }
              ],
              "data": {}
            }
          ]
        },
        {
          "nodeType": "paragraph",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Between a ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "leader",
              "marks": [
                { "type": "bold" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": " and a ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "follower",
              "marks": [
                { "type": "italic" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": ". Stay hungry, stay foolish.",
              "marks": [],
              "data": {}
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "blockquote",
          "data": {},
          "content": [
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "The only way to do ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "great work",
                  "marks": [
                    { "type": "bold" },
                    { "type": "underline" }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " is to ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "love what you do",
                  "marks": [
                    { "type": "italic" }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ".",
                  "marks": [],
                  "data": {}
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "paragraph",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Check out our ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "hyperlink",
              "data": {
                "uri": "https://example.com/portfolio"
              },
              "content": [
                {
                  "nodeType": "text",
                  "value": "latest portfolio",
                  "marks": [
                    { "type": "bold" }
                  ],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "text",
              "value": " for more ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "inspiring work",
              "marks": [
                { "type": "italic" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "!",
              "marks": [],
              "data": {}
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "unordered-list",
          "data": {},
          "content": [
            {
              "nodeType": "list-item",
              "data": {},
              "content": [
                {
                  "nodeType": "paragraph",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "text",
                      "value": "Quality is ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "more important",
                      "marks": [
                        { "type": "bold" }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " than quantity",
                      "marks": [],
                      "data": {}
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "list-item",
              "data": {},
              "content": [
                {
                  "nodeType": "paragraph",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "text",
                      "value": "One home run is ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "much better",
                      "marks": [
                        { "type": "italic" }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " than two doubles",
                      "marks": [],
                      "data": {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "paragraph",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Simple can be ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "harder than complex",
              "marks": [
                { "type": "bold" },
                { "type": "underline" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": ": You have to work hard to get your thinking ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "clean",
              "marks": [
                { "type": "italic" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": " to make it simple.",
              "marks": [],
              "data": {}
            }
          ]
        }
      ]
    }
  },
  {
    "json": {
      "nodeType": "document",
      "data": {},
      "content": [
        {
          "nodeType": "heading-3",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "Mixed formatting example",
              "marks": [
                { "type": "bold" }
              ],
              "data": {}
            }
          ]
        },
        {
          "nodeType": "paragraph",
          "data": {},
          "content": [
            {
              "nodeType": "text",
              "value": "This text has ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "bold",
              "marks": [
                { "type": "bold" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": ", ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "italic",
              "marks": [
                { "type": "italic" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": ", and ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "underlined",
              "marks": [
                { "type": "underline" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": " text. Even ",
              "marks": [],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "combined styles",
              "marks": [
                { "type": "bold" },
                { "type": "italic" },
                { "type": "underline" }
              ],
              "data": {}
            },
            {
              "nodeType": "text",
              "value": "!",
              "marks": [],
              "data": {}
            }
          ]
        }
      ]
    }
  }
];

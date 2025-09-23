import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeOpt,
  CP_sizeType,
} from '@/components/CustomPictogram/libs/types';
import { CP_propsType } from '@/components/CustomPictogram/libs/types';

import { CQ_quote_propsType } from '@/components';

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
        "sys": {
            "id": "3ATxDVOweuGOcZVfkqNIak"
        },
        "description": {
            "json": {
                "data": {},
                "content": [
                    {
                        "data": {},
                        "content": [
                            {
                                "data": {},
                                "marks": [],
                                "value": "Giving up too early is the surest path to mediocrity. Resilience is what separates good engineers from great ones.",
                                "nodeType": "text"
                            }
                        ],
                        "nodeType": "paragraph"
                    }
                ],
                "nodeType": "document"
            }
        }
    },
    {
        "sys": {
            "id": "4zLtlAvfEGGxAVa79mqBUh"
        },
        "description": {
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
                                "value": "It's all about ",
                                "marks": [],
                                "data": {}
                            },
                            {
                                "nodeType": "text",
                                "value": "focusing on the next step",
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
                                ],
                                "data": {}
                            },
                            {
                                "nodeType": "text",
                                "value": "—consistent, small steps of progress. The rest is history.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        "sys": {
            "id": "1QvStbBpnrH6owRo0akbuZ"
        },
        "description": {
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
                                "value": "A roadblock is a challenge that ",
                                "marks": [],
                                "data": {}
                            },
                            {
                                "nodeType": "text",
                                "value": "hasn't been solved yet",
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
                                ],
                                "data": {}
                            },
                            {
                                "nodeType": "text",
                                "value": ". Period!",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        "sys": {
            "id": "1Kuva9w4aCDPmd96RbBYrB"
        },
        "description": {
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
                                "value": "The most exceptional software engineers are defined by a relentless pursuit of ",
                                "marks": [],
                                "data": {}
                            },
                            {
                                "nodeType": "text",
                                "value": "better solutions",
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
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
        }
    },
    {
        "sys": {
            "id": "5UbwtfLpW5S8ZcUYQ73tQJ"
        },
        "description": {
            "json": {
                "data": {},
                "content": [
                    {
                        "data": {},
                        "content": [
                            {
                                "data": {},
                                "marks": [],
                                "value": "Think critically, leverage AI as a ",
                                "nodeType": "text"
                            },
                            {
                                "data": {},
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
                                ],
                                "value": "strategic tool",
                                "nodeType": "text"
                            },
                            {
                                "data": {},
                                "marks": [],
                                "value": "—not as a god—and you'll always be invaluable.",
                                "nodeType": "text"
                            }
                        ],
                        "nodeType": "paragraph"
                    }
                ],
                "nodeType": "document"
            }
        }
    }
] as CQ_quote_propsType[];
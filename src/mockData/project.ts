export const project1 = {
   "data": {
    "en": {
      "sys": {
        "id": "2UJqmr6lFkc80z1Qm3LUfr"
      },
      "title": "Bridging Design and Engineering: A Next.js Contentful Platform",
      "blurb": "A Next.js app powered by Contentful and a custom React component library — delivering scalable, accessible, CMS-driven experiences that accelerate content publishing and strengthen design consistency.",
      "description": {
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
                  "value": "1. Context & Problem",
                  "marks": [],
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
                  "value": "As digital products scale, three recurring challenges surface:",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Content bottlenecks",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " — Marketing and business teams relied on developers for content updates, slowing time-to-market.",
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
                          "value": "Inconsistent design",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " — New pages were built without a unified component system, causing design drift.",
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
                          "value": "Limited scalability",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " — Each new feature required duplicated effort across content, code, and design.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "5euzSDvP8fBTqUCSoCkfKs",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "During my years as a front-end developer, I saw how these issues grow costly in enterprise environments. For this project, I set out to build not just a site, but a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "scalable platform",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " where design, content, and code worked together.",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "2. Solution",
                  "marks": [],
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
                  "value": "I built a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "React-based application with Next.js",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ", powered by a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "headless CMS (Contentful)",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " and integrated with my ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "custom component library",
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
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Key goals, each tied to business value:",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Reusable, CMS-driven components →",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Faster feature development and reduced duplication.",
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
                          "value": "Design consistency →",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Strengthening brand identity and reduced design drift.",
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
                          "value": "Decoupled content from code →",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Empowering business teams to update content without developer bottlenecks.",
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
                          "value": "Accessibility baked in →",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Minimizing compliance risks and broadened user reach.",
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
                          "value": "SEO & performance →",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Leveraging Next.js static site generation to deliver fast, optimized, and discoverable pages.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "2tmCvQTj5NkT33x54NGifS",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "3. Implementation",
                  "marks": [],
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
                  "value": "I built this app on top of ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "hyperlink",
                  "data": {
                    "uri": "https://carbondesignsystem.com/"
                  },
                  "content": [
                    {
                      "nodeType": "text",
                      "value": "Carbon Design Systems",
                      "marks": [],
                      "data": {}
                    }
                  ]
                },
                {
                  "nodeType": "text",
                  "value": ", chosen NextJS for its ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "built-in server-side rendering (SSR) and static site generation (SSG)",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ", and went for ContentFul because it’s a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "headless CMS with a clean GraphQL/REST API",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ", which makes it easy to ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "fetch structured content",
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
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "heading-3",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Tech Stack & Architecture",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Framework:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Next.js (for hybrid static & server-side rendering, SEO, and performance).",
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
                          "value": "CMS:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Contentful (for structured content modeling and editorial flexibility).",
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
                          "value": "UI Foundation:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Custom React component library (",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "hyperlink",
                          "data": {
                            "uri": "http://localhost:3000/blog/19oHD8PCWxtpsAQ0vrZm80/"
                          },
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "ensuring accessibility,",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        },
                        {
                          "nodeType": "text",
                          "value": " consistency, and reusability).",
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
                          "value": "Documentation:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Storybook (for component showcase and developer onboarding).",
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
                          "value": "CI/CD:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " GitHub Actions (for automated build, test, and deploy).",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "heading-3",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Example: Page Assembly with Contentful + Component Library",
                  "marks": [],
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
                  "value": "Here is how everything works:",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Content authors",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " build pages by combining reusable modules (hero banners, tiles, etc.).",
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
                          "value": "React components",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " consume structured data from Contentful, rendering accessible, responsive layouts.",
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
                          "value": "Design system tokens",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " ensure consistent typography, spacing, and color usage across all pages.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "2PTOFm9dXKBR0MPsr711XG",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "4. Impact",
                  "marks": [],
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
                  "value": "✨ ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "Business + Technical Outcomes:",
                  "marks": [
                    {
                      "type": "bold"
                    }
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
                  "value": "Integrating library components made the building process so much faster. The bulk of the development process had to do with the scaffholding, the routing system, pulling the content from ContentFul and more. Given that I completed the project on my own, here are some estimations:",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "40% faster feature delivery",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " due to reusable, CMS-powered components.",
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
                          "value": "Content author empowerment:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Easy to manage and publish without developer intervention, improving marketing agility.",
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
                          "value": "Strengthened design consistency:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Reduced drift and accessibility gaps.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "📸 ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "[Insert chart or graphic comparing time-to-publish before vs. after CMS integration]",
                  "marks": [
                    {
                      "type": "italic"
                    }
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
                  "value": "“These results validated that the platform was not just a technical improvement but a business-enabling solution.”",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "5. Solution Engineering Mindset",
                  "marks": [],
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
                  "value": "This project demonstrates my approach as a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "Design Technologist bridging design, engineering, and business goals",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ":",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Business Alignment:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Designed architecture to reduce content bottlenecks and accelerate marketing initiatives.",
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
                          "value": "Cross-Functional Collaboration:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Partnered with designers to define reusable modules, and with content stakeholders to model flexible structures in Contentful.",
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
                          "value": "Scalability:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Built the app as a platform, not a one-off site, enabling long-term growth and reuse.",
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
                          "value": "Enablement:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " Documentation and Storybook empowered developers to contribute confidently, while content teams gained autonomy.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "🎥 ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "[Optional short video: walkthrough of component library in Storybook + integration with CMS]",
                  "marks": [
                    {
                      "type": "italic"
                    }
                  ],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "6. Commitment to Quality",
                  "marks": [],
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
                  "value": "This application is more than a demo — it’s a blueprint for scalable, enterprise-grade digital platforms. My commitments include:",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "ordered-list",
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
                          "value": "Performance benchmarking",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " (Lighthouse scores and Core Web Vitals).",
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
                          "value": "Comprehensive testing",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " (unit + integration).",
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
                          "value": "SEO optimization",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " (leveraging Next.js static site generation)",
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
                          "value": "Future roadmap",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": ": localization, visual regression testing, and multi-site scalability.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "✨ Takeaway",
                  "marks": [],
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
                  "value": "This project reflects my role as a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "Design Technologist with solution engineering focus",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ":",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "I don’t just build features — I design systems.",
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
                          "value": "I don’t just code interfaces — I create scalable solutions that empower teams, improve workflows, and deliver measurable business impact.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "",
                  "marks": [],
                  "data": {}
                }
              ]
            }
          ]
        },
        "links": {
          "assets": {
            "block": [
              {
                "sys": {
                  "id": "5euzSDvP8fBTqUCSoCkfKs"
                },
                "url": "https://images.ctfassets.net/z41mabrhnu57/5euzSDvP8fBTqUCSoCkfKs/411d2f2df48806e44c68290a8ce61559/case_study_2_-_Figure_1.png",
                "title": "Case study 2 - Figure 1: Screenshot of portfolio with consistent UI patterns.",
                "description": "Screenshot of portfolio with consistent UI patterns."
              },
              {
                "sys": {
                  "id": "2tmCvQTj5NkT33x54NGifS"
                },
                "url": "https://videos.ctfassets.net/z41mabrhnu57/2tmCvQTj5NkT33x54NGifS/2f2acbb6041c4068f2874e7c10c50ba0/Case_study_2_-_Video_1.mp4",
                "title": "Case study 2: Contentful seemless integration with a React app",
                "description": null
              },
              {
                "sys": {
                  "id": "2PTOFm9dXKBR0MPsr711XG"
                },
                "url": "https://images.ctfassets.net/z41mabrhnu57/2PTOFm9dXKBR0MPsr711XG/2af9129f2dbc52968b2102dde6340558/case-study2-screenshot-3.png",
                "title": "Screenshot of Contentful content model with a “Page” entry referencing reusable components.",
                "description": ""
              }
            ]
          }
        }
      }
    }
  }
};



export const project2 = { 
  "data": {
    "en": {
      "sys": {
        "id": "3t7j9BUNAZNUwsc7alBNJ1"
      },
      "title": "Composition Principle in JavaScript: Acheiving code reuse",
      "blurb": "Discover the reasons behind the Composition Principle in JavaScript, its usefulness for code resuse, and some of its techniques.",
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
                  "value": "In JavaScript, composition is a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "code-reuse",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " principle. Instead of relying on rigid class hierarchies with inheritance, composition allows UI engineers ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "to build complex objects by combining smaller, more focused ones",
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
            },
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
                      "value": "Composition encourages the ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "building of complex",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " objects using simpler ones, thus fostering code reuse..",
                      "marks": [],
                      "data": {}
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "The underlying principle of composition",
                  "marks": [],
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
                  "value": "Composition is the foundation upon which mixins and decorators are built. It's a ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "\"has-a\"",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " relationship, contrasting with the ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "\"is-a\"",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " relationship of inheritance.",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "Example:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " A ",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": "Car",
                          "marks": [
                            {
                              "type": "code"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " class doesn't inherit from an ",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": "Engine",
                          "marks": [
                            {
                              "type": "code"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " class. Instead, it holds a reference to an ",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": "Engine",
                          "marks": [
                            {
                              "type": "code"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " object.",
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
                          "value": "Flexibility:",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " It promotes loose coupling and greater flexibility because you can swap out the smaller, \"composed\" parts without affecting the larger object.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "5r85DyaeWZRGK75BT1CmVR",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "How to acheive composition?",
                  "marks": [],
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
                  "value": "Let's explore two composition techniques: ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "Mixins",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " and ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "the Decorator Pattern",
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
            },
            {
              "nodeType": "heading-3",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Option 1: Mixins",
                  "marks": [],
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
                  "value": "In JavaScript, mixins are ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "objects that provide reusable methods",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": ". You can \"mix\" their functionality into a class or object by copying the methods over. This allows a class to gain new abilities without extending from the mixin, which is not possible in JavaScript's single-inheritance model.",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                      "value": "🧐 ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "Drawbacks",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": ": There are risks of ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "collision",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " (method name conflicts) and",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " implicit contracts",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " (implicit dependencies making the code hard to understand).",
                      "marks": [],
                      "data": {}
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "d08nibZsFEgveJ3ZnOU0a",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-3",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Option 2: Decorator pattern",
                  "marks": [],
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
                  "value": "The decorator pattern involves creating a \"wrapper\" object that contains the original object. The wrapper ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "delegates method calls to the original object",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": " while potentially ",
                  "marks": [],
                  "data": {}
                },
                {
                  "nodeType": "text",
                  "value": "adding or overriding behavior before or after.",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "data": {}
                }
              ]
            },
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
                      "value": "😀 Ideal for Composition:",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " he decorator pattern is ideal for ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "achieving",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " composition because ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "of its",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " flexibility. It conforms to the object's interface ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "and",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " allows the addition or removal of specific behavior ",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": "from",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " an individual object without affecting all instances of the class",
                      "marks": [],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": ",",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "data": {}
                    },
                    {
                      "nodeType": "text",
                      "value": " like mixins do.",
                      "marks": [],
                      "data": {}
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "embedded-asset-block",
              "data": {
                "target": {
                  "sys": {
                    "id": "2RMRfeB0gAKqGpdnPF0mMX",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": []
            },
            {
              "nodeType": "hr",
              "data": {},
              "content": []
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Recap and relationships at a glance",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "table",
              "data": {},
              "content": [
                {
                  "nodeType": "table-row",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "table-header-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Aspect \t\t\t",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-header-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Composition",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-header-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Mixins",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-header-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Decorator Pattern",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "table-row",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Concept",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "The general principle of building complex objects by combining simpler ones.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "A pattern for sharing reusable functionality between classes or objects without inheritance",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "A structural design pattern that wraps an object to dynamically add new behaviors.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "table-row",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Mechanism",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "An object \"has\" or \"uses\" another object to perform a task.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Copies methods and properties from one object (the mixin) onto another.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Wraps an object with another object that implements the same interface.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "table-row",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Analogy",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "A car is made of a wheel, an engine, and a steering wheel.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Adding toppings (mixins) to vanilla ice cream (the target object) to create a custom flavor.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "Putting on layers of clothing (decorators) over a base outfit (the core object) for extra warmth.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "table-row",
                  "data": {},
                  "content": [
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "When to use",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "For building flexible, reusable systems, often favored over inheritance.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "To add related behaviors, especially to multiple unrelated classes.",
                              "marks": [],
                              "data": {}
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "nodeType": "table-cell",
                      "data": {},
                      "content": [
                        {
                          "nodeType": "paragraph",
                          "data": {},
                          "content": [
                            {
                              "nodeType": "text",
                              "value": "To add or remove specific, optional functionality to individual objects at runtime.",
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
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "",
                  "marks": [],
                  "data": {}
                }
              ]
            },
            {
              "nodeType": "heading-2",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Takeaway",
                  "marks": [],
                  "data": {}
                }
              ]
            },
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
                          "value": "JavaScript composition",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " is the underlying principle for creating complex objects by combining simple ones.",
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
                          "value": "It can be acheived through two techniques:",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    },
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
                                  "value": "Mixins:",
                                  "marks": [
                                    {
                                      "type": "bold"
                                    }
                                  ],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": " Adding reusable methods to a class prototype (all class instances ",
                                  "marks": [],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": "will have the new functionality",
                                  "marks": [
                                    {
                                      "type": "bold"
                                    }
                                  ],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": ").",
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
                                  "value": "Decorator pattern:",
                                  "marks": [
                                    {
                                      "type": "bold"
                                    }
                                  ],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": " Wrapping a single object with new methods (only that object ",
                                  "marks": [],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": "gets the new functionality",
                                  "marks": [
                                    {
                                      "type": "bold"
                                    }
                                  ],
                                  "data": {}
                                },
                                {
                                  "nodeType": "text",
                                  "value": ").",
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
                          "value": "The decorator pattern is the most ideal ",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": "of the two because",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " of its flexibility and ",
                          "marks": [],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": "because it is",
                          "marks": [
                            {
                              "type": "bold"
                            }
                          ],
                          "data": {}
                        },
                        {
                          "nodeType": "text",
                          "value": " less invasive.",
                          "marks": [],
                          "data": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "",
                  "marks": [],
                  "data": {}
                }
              ]
            }
          ]
        },
        "links": {
          "assets": {
            "block": [
              {
                "sys": {
                  "id": "5r85DyaeWZRGK75BT1CmVR"
                },
                "url": "https://images.ctfassets.net/z41mabrhnu57/5r85DyaeWZRGK75BT1CmVR/aa2decaf19d953c3f5c55c8fde91fd0a/js-composition-1.png",
                "title": "js-composition-1",
                "description": "js-composition-1"
              },
              {
                "sys": {
                  "id": "d08nibZsFEgveJ3ZnOU0a"
                },
                "url": "https://images.ctfassets.net/z41mabrhnu57/d08nibZsFEgveJ3ZnOU0a/57ff0870f6597309592d6ae4ec0738aa/js-composition-2.png",
                "title": "js-composition-2",
                "description": "js-composition-2"
              },
              {
                "sys": {
                  "id": "2RMRfeB0gAKqGpdnPF0mMX"
                },
                "url": "https://images.ctfassets.net/z41mabrhnu57/2RMRfeB0gAKqGpdnPF0mMX/7b187adead4eddaabd921846cbdfdce9/js-composition-3.png",
                "title": "js-composition-3",
                "description": "js-composition-3"
              }
            ]
          }
        }
      }
    }
  } 
};
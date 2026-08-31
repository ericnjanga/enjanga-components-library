# Contentful model: Expertise section

Use two content types and let references carry the relationship.

## `expertiseSection`

| Field | Contentful type | Validation / note |
| --- | --- | --- |
| `internalName` | Short text | Required; editorial only |
| `eyebrow` | Short text | Required; default `Expertise` |
| `heading` | Short text | Required |
| `description` | Long text | Required |
| `items` | References, many | Required; accepts only `expertiseItem`; order in this list is display order |
| `profileStatement` | Long text | Required |
| `profileImage` | Media | Required; add meaningful description for image alt text |
| `profileModalHeading` | Short text | Required |
| `profileModalBody` | Rich text | Required |
| `sectionId` | Short text | Required, unique; e.g. `expertise` |

## `expertiseItem`

| Field | Contentful type | Validation / note |
| --- | --- | --- |
| `internalName` | Short text | Required; editorial only |
| `slug` | Short text | Required and unique |
| `title` | Short text | Required |
| `summary` | Long text | Required |
| `modalLabel` | Short text | Optional; default `Expertise` |
| `modalHeading` | Short text | Required |
| `modalBody` | Rich text | Required |

Do not add a numeric `order` field unless the same item must appear in different
orders in several sections. Contentful preserves the order of entries in the
`items` reference list, which keeps the query and editorial workflow simpler.

Suggested GraphQL query:

```graphql
query ExpertiseSection($sectionId: String!, $locale: String) {
  expertiseSectionCollection(
    limit: 1
    where: { sectionId: $sectionId }
    locale: $locale
  ) {
    items {
      eyebrow
      heading
      description
      profileStatement
      profileModalHeading
      profileModalBody { json }
      profileImage {
        url
        description
        width
        height
      }
      itemsCollection(limit: 10) {
        items {
          sys { id }
          slug
          title
          summary
          modalLabel
          modalHeading
          modalBody { json }
        }
      }
    }
  }
}
```

Fetch by stable `sectionId`, not by heading or entry ID. Map `sys.id` to the
component `id`, the ordered `itemsCollection.items` to `items`, and the media
description to `imageAlt`. This shape can be passed to `ExpertiseSection` with
one small adapter at the page boundary.

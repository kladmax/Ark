import type { TextFieldSingleValidation } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  type LinkFields,
  HeadingFeature,
  InlineCodeFeature,
  BlockquoteFeature,
  OrderedListFeature,
  UnorderedListFeature,
  HorizontalRuleFeature,
  UploadFeature,
  FixedToolbarFeature,
  AlignFeature,
  BlocksFeature, // Додаємо основу для майбутніх YouTube-блоків
} from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: [
    FixedToolbarFeature(),
    ParagraphFeature(),
    UnderlineFeature(),
    BoldFeature(),
    ItalicFeature(),
    AlignFeature(),
    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
    OrderedListFeature(),
    UnorderedListFeature(),
    BlockquoteFeature(),
    InlineCodeFeature(),
    HorizontalRuleFeature(),
    UploadFeature({
      collections: {
        media: {
          fields: [
            {
              name: 'caption',
              type: 'text',
              label: 'Підпис',
            },
          ],
        },
      },
    }),
    // BlocksFeature — це база для YouTube та інших кастомних штук
    BlocksFeature({
      blocks: [
        // Сюди ми завтра-післязавтра додамо твій YouTube блок
      ],
    }),
    LinkFeature({
      enabledCollections: ['pages', 'posts'],
      fields: ({ defaultFields }) => {
        return [
          ...defaultFields,
          {
            name: 'rel',
            type: 'select',
            label: 'Rel (SEO)',
            options: ['noopener', 'noreferrer', 'nofollow'],
            hasMany: true,
          },
        ]
      },
    }),
  ],
})

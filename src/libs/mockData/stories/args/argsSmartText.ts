import { SMT_propsType } from '@/components/SmartText/libs/types';
import { mockPlainText } from '@/libs/mockData/mixed';
import { mockRichTextLarge, mockRichTextSmall } from '@/libs/mockData/mockRichText';
import { mockHeading } from '@/libs/mockData/mixed';

export const argsSmartTextwPlainT = {
  className: '',
  plainText: mockPlainText,
} as SMT_propsType;

export const argsSmartTextwRichT = {
  className: '',
  richText: mockRichTextSmall.description,
} as SMT_propsType;

// SmartText.stories.tsx ...
export const argsSmartTextPlain = {
  className: '',
  plainText: mockHeading.plain,
  richText: undefined,
};
export const argsSmartTextRich = {
  className: '',
  plainText: undefined,
  richText: {
    ...mockRichTextSmall.description,
  },
};

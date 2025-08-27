import { SMT_propsType } from '@/components/SmartText/libs/types';
import { mockPlainText } from '@/mockData/mixed';
import { mockRichText } from '@/mockData/mockRichText';
import { mockHeading } from '@/mockData/mixed';

export const argsSmartTextwPlainT = {
  className: '',
  plainText: mockPlainText,
} as SMT_propsType;

export const argsSmartTextwRichT = {
  className: '',
  richText: mockRichText.description,
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
    ...mockRichText.description,
  },
};

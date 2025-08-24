import {
  CI_nameOpt,
  CI_nameType,
  CI_sizeOpt,
  CI_sizeType,
} from '@/components/CustomIcon/libs/types';
import { CI_propsType } from '@/components/CustomIcon/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { BNN_propsType } from '@/components/Banner/libs/types';
import {
  HDG_levelOpt,
  HDG_levelPropsType,
} from '@/components/Heading/libs/types';
import {
  CTL_LinkTargetType,
  CTL_LinkTargetOpt,
  CTL_LayoutStyleType,
  CTL_LayoutStyleOpt,
  CTL_propsType,
} from '@/components/CustomTile/lib/types';

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

export const mockCustomIcon = {
  name: CI_nameOpt[0] as CI_nameType,
  size: CI_sizeOpt[0] as CI_sizeType,
  className: '',
} as CI_propsType;
import { red60 } from '@carbon/colors';

// For CustomTile.stories.tsx ...
export const mockCustomTile = {
  className: '',
  heading: mockHeading.plain,
  headingLevel: 3 as HDG_levelPropsType,
  headingMaxLength: 50,

  layoutStyle: CTL_LayoutStyleOpt[0] as CTL_LayoutStyleType,

  media: undefined,
  mediaIcon: undefined,
  mediaImage: undefined,

  blurb: mockPlainText,
  blurbMaxLength: 300,

  modalIsAvailable: undefined,
  modalPlainDescription: undefined,
  modalRichDescription: undefined,

  linksTo: undefined,
  linkTarget: CTL_LinkTargetOpt[1] as CTL_LinkTargetType,
} as CTL_propsType;

export const mockTextLengthList = [50, 100, 200, 300, 500, 1000];

// For Banner.stories.tsx ...
export const mockBanner = {
  className: '',
  heading: mockHeading.plain,
  headingLevel: HDG_levelOpt[0] as HDG_levelPropsType,
  headingMaxLength: 50,

  isHuge: false,

  plainDescription: mockPlainText,
  richDescription: undefined,
  blurbMaxLength: 300,
} as BNN_propsType;

// For FeatureText.stories.tsx ...
export const mockFeatureText = {
  className: '',
  heading: mockHeading.plain,
  headingLevel: HDG_levelOpt[0] as HDG_levelPropsType,
  headingMaxLength: 50,
  plainText: mockPlainText,
  richText: undefined,
  blurbMaxLength: 300,
} as FTX_propsType;

// ....
const textColor = red60;
export const styleHeadingLabel = { marginBottom: 0, color: textColor };

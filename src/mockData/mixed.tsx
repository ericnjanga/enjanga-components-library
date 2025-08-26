import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeOpt,
  CP_sizeType,
} from '@/components/CustomPictogram/libs/types';
import { CP_propsType } from '@/components/CustomPictogram/libs/types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import {
  CTL_LinkTargetType,
  CTL_LinkTargetOpt,
  CTL_LayoutStyleType,
  CTL_LayoutStyleOpt,
  CTL_propsType,
} from '@/components/CustomTile/lib/types';
import { mockRichText } from './mockRichText';
import { SMT_propsType } from '@/components/SmartText/libs/types';
import { argsHeadingPlain } from './stories/args/argsHeading';

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
export const styleHeadingLabel = { marginBottom: 0, color: textColor };

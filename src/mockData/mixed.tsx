import {
  CI_nameOpt,
  CI_nameType,
  CI_sizeOpt,
  CI_sizeType,
} from '@/components/CustomIcon/libs/types';
import { CI_propsType } from '@/components/CustomIcon/libs/types';

import {
  CTL_LinkTargetType,
  CTL_LinkTargetOpt,
  CTL_StackOrderType,
  CTL_propsType,
} from '@/components/CustomTile/lib/types';

export const mockCustomIcon = {
  name: CI_nameOpt[0] as CI_nameType,
  size: CI_sizeOpt[0] as CI_sizeType,
  className: '',
} as CI_propsType;

// For CustomTile.stories.tsx ...
export const mockCustomTile = {
  stackOrder: CI_nameOpt[0] as CTL_StackOrderType,
  titleLength: 50,
  blurbLength: 300,
  iconName: undefined,
  linksTo: undefined,
  linkTarget: CTL_LinkTargetOpt[1] as CTL_LinkTargetType,
  showsModal: undefined,
  title:
    'Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.',
  blurb:
    'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
  plainDescription: undefined,
} as CTL_propsType;

export const mockTextLengthList = [50, 100, 200, 300, 500, 1000];

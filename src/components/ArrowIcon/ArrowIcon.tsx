import { AIC_propsType } from './libs/types';
import { ArrowRight, ArrowUpRight, Information } from '@carbon/icons-react';

export const ArrowIcon = ({ className, title, name }: AIC_propsType) => {
  const C = name === 'Right' ? ArrowRight : ArrowUpRight;

  return (
    <C
      className={className}
      width="1.3rem"
      height="1.3rem"
      aria-label={`${title} pictogram`}
      aria-hidden="true"
    />
  );
};

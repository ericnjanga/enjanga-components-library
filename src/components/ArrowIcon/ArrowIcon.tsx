import { AIC_propsType } from './libs/types';
import { ArrowRight, ArrowUpRight, Information } from '@carbon/icons-react';

export const ArrowIcon = ({ className, title, orientation }: AIC_propsType) => {
  const C = orientation === 'Right' ? ArrowRight : ArrowUpRight;

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

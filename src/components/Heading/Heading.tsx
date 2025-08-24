import { HDG_propsType } from './libs/types';
import { SkeletonAnimation } from '../SkeletonAnimation';
import { className_propsType } from '@/libs/commonTypes';

const Heading = ({ level = 1, children, className = '' }: HDG_propsType) => {
  if (children === undefined) {
    return <SkeletonAnimation part="heading" />;
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;

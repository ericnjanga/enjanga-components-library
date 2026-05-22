import { TBN_globalContentPropsType } from './types';
import { FeatureText } from '@/components/FeatureText';

export const getTileContent = ({
  featuredText,
  iconContent,
  pictogramName,
}: TBN_globalContentPropsType) => {
  const featuredTextLocalProps = {
    ...featuredText,
    pictogramName,
    heading: {
      ...featuredText.heading,
      className: 'enj-TileBanner-title',
    },
  };

  return (
    <>
      <FeatureText {...featuredTextLocalProps} />
      {iconContent && iconContent}
    </>
  );
};

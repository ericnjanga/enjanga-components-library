import CMSRichText from '../CMSRichText/CMSRichText';
import { SMT_propsType } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';
import { SkeletonAnimation } from '../SkeletonAnimation';

const SmartText = ({ className, plainText, richText }: SMT_propsType) => {
  // Throw errors if smart text validation rules aren't applied ...
  smartTextPropsValidation({ plainText, richText });

  if (!plainText && !richText) {
    return <SkeletonAnimation part="body" />;
  }

  return (
    <>
      {plainText ? (
        <p>{plainText}</p>
      ) : richText ? (
        <CMSRichText data={richText} className={className} />
      ) : null}
    </>
  );
};

export default SmartText;

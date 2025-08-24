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
        <>{plainText}</>
      ) : richText ? (
        <CMSRichText data={richText} className={className} />
      ) : null}
    </>
  );
};

// /**
//  * TODO: Move this as a separate component/story/test...
//  */
// const PlainText = ({ plainText } : { plainText: string }) => {
//   return (
//     <>
//     {plainText ? (
//        <>{plainText}</>
//     ) : (
//       <SkeletonAnimation part='body' />
//     )}
//     </>
//   );
// };

export default SmartText;

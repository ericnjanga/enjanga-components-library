import CMSRichText from '../CMSRichText/CMSRichText';
import { SMT_propsType } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';

const SmartText = ({ className, plainText, richText }: SMT_propsType) => {
  // Throw errors if smart text validation rules aren't applied ...
  smartTextPropsValidation({ plainText, richText });

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

export default SmartText;

import CMSRichText from '../CMSRichText/CMSRichText';
import { SmartTextProps } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';

const SmartText = ({ className, plainText, richText }: SmartTextProps) => {
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

import CMSRichText from '../CMSRichText/CMSRichText';
import { SmartTextProps } from './libs/types';
import { propsValidation } from './libs/propsValidation';

const SmartText = ({ className, plainText, richText }: SmartTextProps) => {
  // Local level prop-type validation ...
  propsValidation({ plainText, richText, className });

  return (
    <>
      {plainText ? (
        <article className={className}>{plainText}</article>
      ) : richText ? (
        <CMSRichText data={richText} className={className} />
      ) : null}
    </>
  );
};

export default SmartText;

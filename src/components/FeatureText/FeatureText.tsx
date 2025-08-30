import clsx from 'clsx';
import { SmartText } from '../SmartText';
import { textTrimmer } from '@/libs/textTrimmer';
import { FTX_propsType } from './libs/types';
import { Heading } from '../Heading';

const FeatureText = ({
  className,
  heading = { children: undefined, level: 3, className: '' },
  smartText,
  headingMaxLength,
  plainTextMaxLength,
  isHidden,
}: FTX_propsType) => {
  // Trim heading only if it applies ...

  // [*] If heaing is not hidden:
  // Assign the content and make sure the text is trimmed if necessary (content is of type string and max length provided)
  let headingContent;

  if (isHidden !== 'heading') {
    headingContent = heading?.children; // Assign the content

    // Make sure the text is trimmed if necessary (content is of type string and max length provided)
    if (
      headingMaxLength &&
      headingMaxLength > 0 &&
      typeof heading?.children === 'string'
    ) {
      headingContent = textTrimmer({
        text: heading?.children,
        length: headingMaxLength,
      });
    }
  }

  // [*] Trim description only if it applies ...
  let descriptionContent,
    smartTextContent = {};
  if (
    isHidden !== 'smartText' &&
    plainTextMaxLength &&
    plainTextMaxLength > 0 &&
    smartText?.plainText
  ) {
    descriptionContent = textTrimmer({
      text: smartText?.plainText,
      length: plainTextMaxLength,
    });
  }
  smartTextContent = {
    ...smartText,
    plainText: descriptionContent,
  };

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      {isHidden !== 'heading' && (
        <Heading className={clsx('enj-FeatureText-title')} {...heading}>
          {headingContent}
        </Heading>
      )}

      {isHidden !== 'smartText' && (
        <article className="enj-FeatureText-article">
          <SmartText {...smartTextContent} />
        </article>
      )}
    </div>
  );
};

export default FeatureText;

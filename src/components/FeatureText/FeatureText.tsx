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
}: FTX_propsType) => {
  // Trim heading only if it applies ...
  let headingContent;
  if (
    headingMaxLength &&
    headingMaxLength > 0 &&
    typeof heading.children === 'string'
  ) {
    headingContent = textTrimmer({
      text: heading.children,
      length: headingMaxLength,
    });
  }

  // Trim description only if it applies ...
  let descriptionContent,
    smartTextContent = {};
  if (plainTextMaxLength && plainTextMaxLength > 0 && smartText.plainText) {
    descriptionContent = textTrimmer({
      text: smartText.plainText,
      length: plainTextMaxLength,
    });
  }
  smartTextContent = {
    ...smartText,
    plainText: descriptionContent,
  };

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      <Heading className={clsx('enj-FeatureText-title')} {...heading}>
        {headingContent}
      </Heading>

      <SmartText {...smartTextContent} />
    </div>
  );
};

export default FeatureText;

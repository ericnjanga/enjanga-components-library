import clsx from 'clsx';
import { SmartText } from '../SmartText';
import { textTrimmer } from '@/libs/textTrimmer';
import { FTX_propsType } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';
import { Heading } from '../Heading';

const FeatureText = ({
  className,
  heading,
  headingLevel,
  headingMaxLength,
  plainText,
  richText,
  blurbLength,
}: FTX_propsType) => {
  // Throw errors if smart text validation rules aren't applied ...
  smartTextPropsValidation({ plainText, richText });

  // Trim title and plain text if necessary ...
  const trimmedHeading = textTrimmer({
    text: heading,
    length: headingMaxLength,
  });
  const trimmedPlainText = plainText
    ? textTrimmer({ text: plainText, length: blurbLength })
    : undefined;

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      <Heading className={clsx('enj-FeatureText-title')} level={headingLevel}>
        {trimmedHeading}
      </Heading>

      {/** Render plain text if available */}
      {plainText && (
        <article className={clsx('enj-FeatureText-blurb')}>
          <p>
            <SmartText plainText={trimmedPlainText} />
          </p>
        </article>
      )}

      {/** Render rich text if available */}
      {richText && <SmartText richText={richText} />}
    </div>
  );
};

export default FeatureText;

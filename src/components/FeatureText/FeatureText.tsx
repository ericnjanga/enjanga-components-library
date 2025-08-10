import clsx from 'clsx';
import { SmartText } from '../SmartText';
import { textTrimmer } from '@/libs/textTrimmer';
import { FTX_propsType } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';

const FeatureText = ({
  className,
  title,
  plainText,
  richText,
  titleLength,
  blurbLength,
}: FTX_propsType) => {
  // Throw errors if smart text validation rules aren't applied ...
  smartTextPropsValidation({ plainText, richText });

  // Trim title and plain text if necessary ...
  const trimmedTitle = textTrimmer({ text: title, length: titleLength });
  const trimmedPlainText = plainText
    ? textTrimmer({ text: plainText, length: blurbLength })
    : undefined;

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      <h3 className={clsx('enj-FeatureText-title')}>{trimmedTitle}</h3>

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

import clsx from 'clsx';
import { SmartText } from '../SmartText';
import { textTrimmer } from '@/libs/textTrimmer';
import { FTX_propsType } from './libs/types';
import { smartTextPropsValidation } from '@/libs/smartTextPropsValidation';
import { Heading } from '../Heading';

// { // HDG_propsType
//   className?: string;
//   level?: HDG_levelPropsType;
//   children?: React.ReactNode;
// };

// {// SMT_propsType
//   className?: string;
//   plainText?: string;
//   richText?: { json: { content: Node[] } };
// }

const FeatureText = ({
  className,
  heading,
  smartText,
}: // headingLevel = 1,
// headingMaxLength,
// plainText,
// richText,
// blurbMaxLength,
FTX_propsType) => {
  // // Throw errors if smart text validation rules aren't applied ...
  // smartTextPropsValidation({ plainText, richText });

  // // Trim title and plain text if necessary ...
  // const trimmedHeading = textTrimmer({
  //   text: heading,
  //   length: headingMaxLength,
  // });
  // const trimmedPlainText = plainText
  //   ? textTrimmer({ text: plainText, length: blurbMaxLength })
  //   : undefined;

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      <Heading className={clsx('enj-FeatureText-title')} {...heading}>
        {heading.children} {/*trimmedHeading*/}
      </Heading>

      <SmartText {...smartText} />

      {/** Render plain text if available */}
      {/* {plainText && (
        <article className={clsx('enj-FeatureText-blurb')}>
          <p>
            <SmartText plainText={trimmedPlainText} />
          </p>
        </article>
      )} */}

      {/** Render rich text if available */}
      {/* {richText && <SmartText richText={richText} />} */}
    </div>
  );
};

export default FeatureText;

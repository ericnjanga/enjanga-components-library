import CMSRichText from '../../CMSRichText/CMSRichText';
import { CustomTileDescriptionProps } from './ct-types';
import { validateDescriptionProps } from '../lib/propsValidation';

const CustomTileDescription = ({
  plainDescription,
  richDescription,
}: CustomTileDescriptionProps) => {
  // Local level prop-type validation ...
  validateDescriptionProps({ plainDescription, richDescription });

  return (
    <>
      {plainDescription ? (
        <article>{plainDescription}</article>
      ) : richDescription ? (
        <CMSRichText data={richDescription} />
      ) : null}
    </>
  );
};

export default CustomTileDescription;

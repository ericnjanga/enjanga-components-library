import CMSRichText from '../../CMSRichText/CMSRichText';
import { CustomTileDescriptionProps } from './ct-types';
import { validateDescriptionProps } from './utils';

const CustomTileDescription = ({
  plainDescription,
  richDescription,
}: CustomTileDescriptionProps) => {
  // Type-safe validation
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

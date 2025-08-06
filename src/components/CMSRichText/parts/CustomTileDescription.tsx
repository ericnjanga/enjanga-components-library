import type { Node } from '@contentful/rich-text-types';
import CMSRichText from '../CMSRichText';

export interface CustomTileDescriptionProps {
  plainDescription?: string;
  richDescription?: { json: { content: Node[] } };
}

const CustomTileDescription = ({
  plainDescription,
  richDescription,
}: CustomTileDescriptionProps) => {
  // Rule: both properties cannot be displayed at the same time
  if (plainDescription !== undefined && richDescription !== undefined) {
    throw new Error(
      `Invalid props: plain and rich descriptions cannot be provided at the same time. Use either "plainDescription" OR "richDescription", never both.`
    );
  }
  return (
    <>
      {plainDescription && <article>{plainDescription}</article>}

      {richDescription && <CMSRichText data={richDescription} />}
    </>
  );
};

export default CustomTileDescription;

import { useState } from 'react';
import { Tile } from '@carbon/react';
import { Information } from '@carbon/icons-react';
import { ContentModal } from '@/components/ContentModal/ContentModal';
import { CustomPictogram } from '@/components/CustomPictogram';
import SmartText from '@/components/SmartText/SmartText';
import { TVL_propsType } from './lib/types';

const TileValue = ({
  className,
  pictogramName,
  title,
  slug,
  description,
}: TVL_propsType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean | undefined>(false);

  return (
    <>
      <Tile
        className={`enj-TileValue ${className ?? ''}`.trim()}
        aria-label={`${title} tile`}
        role="article"
        data-slug={slug}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="enj-TileValue-copy">
          <h3 className="enj-TileValue-title">{title}</h3>
          <span className="enj-TileValue-slug">{slug}</span>
        </div>

        <div className="enj-TileValue-header">
          <CustomPictogram
            name={pictogramName}
            className="enj-TileValue-pictogram"
            size="sm"
          />

          <div className="enj-TileValue-icon-wrapper">
            <Information className="enj-TileValue-icon" aria-hidden="true" />
          </div>
        </div>
      </Tile>

      <ContentModal
        isOpen={!!isModalOpen}
        setIsOpen={setIsModalOpen}
        modalHeading={title}
        modalSecondaryButtonText="Close"
      >
        <SmartText richText={description} />
      </ContentModal>
    </>
  );
};

export default TileValue;

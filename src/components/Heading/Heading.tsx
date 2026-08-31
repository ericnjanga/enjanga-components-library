import { HDG_propsType } from "./libs/types";
import { CustomPictogram } from "../CustomPictogram";
import type { ElementType } from 'react';

const Heading = ({
  level = 1,
  children,
  className = "",
  pictogramName,
}: HDG_propsType) => {
  if (children === undefined) {
    return null;
  }

  const Tag = `h${level}` as ElementType;
  return (
    <Tag className={className}>
      {pictogramName && (
        <CustomPictogram
          name={pictogramName}
          className="enj-TileBanner-pictogram"
        />
      )}
      {children}
    </Tag>
  );
};

export default Heading;

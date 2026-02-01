export const handlePictogramTileClick = ({
  modal,
  setModalIsOpen,
}: {
  modal: { plainDescription?: string; richDescription?: { json: { content: any[] } } } | undefined;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {
  if (modal !== undefined) {
    setModalIsOpen(true);
  }
};

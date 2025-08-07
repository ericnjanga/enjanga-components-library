// ...
// Opens modal up when triggered
export const handleCustomTileClick = ({
  showsModal,
  setModalIsOpen,
}: {
  showsModal: boolean | undefined;
  /** State setter */
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {
  if (showsModal !== undefined) {
    setModalIsOpen(true);
    // ...
    // ...
  }
};

// ...
// Opens modal up when triggered
export const handleCustomTileClick = ({
  modalIsAvailable,
  setModalIsOpen,
}: {
  modalIsAvailable: boolean | undefined;
  /** State setter */
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {
  if (modalIsAvailable !== undefined) {
    setModalIsOpen(true);
    // ...
    // ...
  }
};

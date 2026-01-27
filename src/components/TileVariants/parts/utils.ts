export const handleCustomTileClick = ({
  modalIsAvailable,
  setModalIsOpen,
}: {
  modalIsAvailable: boolean | undefined;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) => {
  if (modalIsAvailable !== undefined) {
    setModalIsOpen(true);
  }
};

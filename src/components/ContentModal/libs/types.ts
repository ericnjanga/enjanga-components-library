// ContentModal props type
// ----------------

export interface ContentM_propsType {
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** State setter for modal visibility (Component won't be rendered is prop is not provided) */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  /** Optional label text displayed above the title */
  modalLabel?: string;
  /** Main modal heading/title */
  modalHeading: string | React.ReactNode;
  /** Optional subheading text */
  modalSubHeading?: string;
  /** Text for the secondary action button */
  modalSecondaryButtonText: string;
  /** Callback when secondary button is clicked */
  onSecondaryButtonClick?: () => void;
  /** Modal content children */
  children?: React.ReactNode;
}

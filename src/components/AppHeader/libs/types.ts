// AppHeader props type
// ----------------

// HeaderContainer
export interface AHC_propsType {
  isSideNavExpanded: boolean;
  onClickSideNavExpand: () => void;
}

// AppHeader
export interface AH_propsType {
  brandLabel: string;
  brandRoute: string;
  // ReactNode can be anything we want: string, number, JSX, component, etc ...
  brand: React.ReactNode;
  navigation: React.ReactNode;
  globalBarItems: React.ReactNode;
}

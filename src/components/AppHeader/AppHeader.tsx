/**
 * App Header:
 * ---------------
 * The AppHeader component shows how to balance Carbon’s rigor with real-world flexibility:
 * 🔹 Smart architecture:
 *  ✔️ Extends Carbon’s UIShell.Header
 *  ✔️ Exposes logo, nav, and actions as ReactNode props
 *  ✔️ Maintains Carbon’s spacing/accessibility guarantees
 *
 * 🔹 Consumer benefits:
 *  ✔️ Render anything – SVG logos, custom nav components, etc.
 *  ✔️ Zero wrapper hell – No nested prop-drilling
 *  ✔️ Type-safe – children validated via TypeScript
 */

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  SkipToContent,
  SideNav,
  HeaderSideNavItems,
} from "@carbon/react";

import { Link, usePathname } from "enjanga-core-setup/next";
import { AHC_propsType, AH_propsType } from "./libs/types";
import { useWindowBreakpoint } from '@/libs/useWindowBreakpoint';
import { useEffect, useState } from "react";
import {
  modalEvents,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "@/utils/EventEmitters/modalEvents";

const AppHeader = ({
  brand,
  brandLabel,
  brandRoute = "/",
  isHomeRoute,
  navigation,
}: AH_propsType) => {
  const labelOpenMenu = "Open menu";
  const labelSideNav = "Side navigation";
  const [visible, setVisible] = useState<boolean>(true);
  const pathname = usePathname();

  // Track viewport breakpoint
  const { activeBreakpoint } = useWindowBreakpoint();

  /**
   * Register 2 events and toggle the component visibility accordingly,
   * then unregister these events when the component unmounts
   */
  useEffect(() => {
    // Hide component when the modal opens up (if breakpoint is 'sm' or 'md')
    const handleOpen = () => {
      if (activeBreakpoint !== "sm" && activeBreakpoint !== "md") return;
      setVisible(false);
    };

    // Show component when the modal closes up (if breakpoint is 'sm' or 'md')
    const handleClose = () => {
      if (activeBreakpoint !== "sm" && activeBreakpoint !== "md") return;
      setVisible(true);
    };

    // Register events ...
    modalEvents.on(MODAL_OPEN, handleOpen);
    modalEvents.on(MODAL_CLOSE, handleClose);

    // Unregister events on component unmount ...
    return () => {
      modalEvents.off(MODAL_OPEN, handleOpen);
      modalEvents.off(MODAL_CLOSE, handleClose);
    };
  }, [activeBreakpoint]);

  // Don't render this component visibility flag is set to false
  if (!visible) return null;

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }: AHC_propsType) => (
        <Header aria-label={brandLabel} className="enj-AppHeader"> 
          <div className={`header-inner header-inner-${activeBreakpoint}`}>
            <SkipToContent />
            <HeaderMenuButton
              aria-label={labelOpenMenu}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName 
              prefix="" 
              as={Link} 
              href={brandRoute} 
              passHref
              aria-current={isHomeRoute ? 'page' : undefined}
              className={isHomeRoute ? 'cds--header__name--current' : ''}
            >
              {brand}
            </HeaderName>

            <HeaderNavigation aria-label={brandLabel}>
              {navigation}
            </HeaderNavigation>

            <SideNav
              aria-label={labelSideNav}
              expanded={isSideNavExpanded}
              isPersistent={false}
              onOverlayClick={onClickSideNavExpand} // ✅ use the same toggle handler
            >
              <HeaderSideNavItems>{navigation}</HeaderSideNavItems>
            </SideNav>
          </div> 
        </Header>
      )}
    />
  );
};

export default AppHeader;
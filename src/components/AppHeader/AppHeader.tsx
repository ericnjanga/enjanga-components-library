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
  // HeaderGlobalBar,
  // SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

import { Link } from "enjanga-core-setup/next";
import { AHC_propsType, AH_propsType } from './libs/types';

const AppHeader = ({
  brand,
  brandLabel,
  brandRoute = '/',
  navigation,
}: // globalBarItems,
AH_propsType) => {
  // ARIA labels
  const labelOpenMenu = 'Open menu';
  const labelSideNav = 'Side navigation';

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }: AHC_propsType) => (
        <Header aria-label={brandLabel} className="enj-AppHeader">
          <div className="header-inner">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={labelOpenMenu}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName prefix="" as={Link} href={brandRoute} passHref>
              {brand}
            </HeaderName>
            <HeaderNavigation aria-label={brandLabel}>
              {navigation}
            </HeaderNavigation>
            <SideNav
              aria-label={labelSideNav}
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <HeaderSideNavItems>{navigation}</HeaderSideNavItems>
            </SideNav>
            {/* <HeaderGlobalBar>{globalBarItems}</HeaderGlobalBar> */}
          </div>
        </Header>
      )}
    />
  );
};

export default AppHeader;

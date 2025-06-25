'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

import Link from 'next/link';

/**
 * App Header:
 * ---------------
 * The App Header has 3 main props, they are ReactNodes and can be anything we want: string, number, JSX, component, etc ...
 * - brand
 * - navigation
 * - globalBarItems
 *
 * The 2 other props deal with the brand's routing and accessibility labelling
 * brandLabel: Brand ARIA label for accessibility
 * brandRoute: string representing the route to which the brand points to
 */

interface HeaderContainerType {
  isSideNavExpanded: boolean;
  onClickSideNavExpand: () => void;
}

interface AppHeaderProps {
  brandLabel: string;
  brandRoute: string;
  // ReactNode can be anything we want: string, number, JSX, component, etc ...
  brand: React.ReactNode;
  navigation: React.ReactNode;
  globalBarItems: React.ReactNode;
}

const AppHeader = ({
  brand,
  brandLabel,
  brandRoute = '/',
  navigation,
  globalBarItems,
}: AppHeaderProps) => {
  // ARIA labels
  const labelOpenMenu = 'Open menu';
  const labelSideNav = 'Side navigation';

  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }: HeaderContainerType) => (
        <Header aria-label={brandLabel}>
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
            <SideNavItems>
              <HeaderSideNavItems>{navigation}</HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>{globalBarItems}</HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default AppHeader;

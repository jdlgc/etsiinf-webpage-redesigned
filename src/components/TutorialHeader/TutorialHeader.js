'use client'

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import {
  UserAvatar,
} from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM">
            Carbon Tutorial
          </HeaderName>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/news" passHref legacyBehavior>
            <HeaderMenuItem >
              News
            </HeaderMenuItem>
          </Link>
          <Link href="/subjects" passHref legacyBehavior>
            <HeaderMenuItem >
              Subjects
            </HeaderMenuItem>
          </Link>
          <HeaderMenu aria-label="Exams" menuLinkName="Exams">
            <Link href="/exams#first-quarter" passHref legacyBehavior>
              <HeaderMenuItem >
                First quarter
              </HeaderMenuItem>
            </Link>
            <Link href="/exams#second-quarter" passHref legacyBehavior>
              <HeaderMenuItem >
                Second quarter
              </HeaderMenuItem>
            </Link>
            <Link href="/exams#third-quarter" passHref legacyBehavior>
              <HeaderMenuItem >
                Third quarter
              </HeaderMenuItem>
            </Link>
          </HeaderMenu>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="/news" passHref legacyBehavior>
                <HeaderMenuItem >
                  News
                </HeaderMenuItem>
              </Link>
              <Link href="/subjects" passHref legacyBehavior>
                <HeaderMenuItem >
                  Subjects
                </HeaderMenuItem>
              </Link>
              <HeaderMenu aria-label="Exams" menuLinkName="Exams">
                <Link href="/exams#first-quarter" passHref legacyBehavior>
                  <HeaderMenuItem >
                    First quarter
                  </HeaderMenuItem>
                </Link>
                <Link href="/exams#second-quarter" passHref legacyBehavior>
                  <HeaderMenuItem >
                    Second quarter
                  </HeaderMenuItem>
                </Link>
                <Link href="/exams#third-quarter" passHref legacyBehavior>
                  <HeaderMenuItem >
                    Third quarter
                  </HeaderMenuItem>
                </Link>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;

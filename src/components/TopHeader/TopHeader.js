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
import Image from 'next/image';


const TopHeader = () => (
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
          <HeaderName prefix="">
          <Image
              className="logo-header"
              src="/logo.png"
              alt="Carbon illustration"
              width={40}
              height={40}
            />
            ETS Ingenieros Informáticos
          </HeaderName>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/home" passHref legacyBehavior>
            <HeaderMenuItem >
              Home
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
              <Link href="/home" passHref legacyBehavior>
                <HeaderMenuItem >
                  Home
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

export default TopHeader;

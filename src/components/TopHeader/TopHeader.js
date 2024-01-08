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


import { usePathname, useSearchParams } from 'next/navigation'; // Importa los hooks de next/navigation

const TopHeader = () => {
  const pathname = usePathname(); // Utiliza el hook para acceder a la ruta actual
  const searchParams = useSearchParams(); // Utiliza el hook para acceder a los parámetros de búsqueda de la ruta actual

  return (
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
              <HeaderMenuItem isActive={!!(pathname === '/home') || !!(pathname === '/')}>
                Home
              </HeaderMenuItem>
            </Link>
            <Link href="/subjects" passHref legacyBehavior>
              <HeaderMenuItem isActive={!!(pathname === '/subjects')}>
                Subjects
              </HeaderMenuItem>
            </Link>
            <Link href="/exams" passHref legacyBehavior>
              <HeaderMenuItem isActive={!!(pathname === '/exams')}>
                Exams
              </HeaderMenuItem>
            </Link>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/home" passHref legacyBehavior>
                  <HeaderMenuItem isActive={!!(pathname === '/home') || !!(pathname === '/')}>
                    Home
                  </HeaderMenuItem>
                </Link>
                <Link href="/subjects" passHref legacyBehavior>
                  <HeaderMenuItem isActive={!!(pathname === '/subjects')}>
                    Subjects
                  </HeaderMenuItem>
                </Link>
                <Link href="/exams" passHref legacyBehavior>
                  <HeaderMenuItem isActive={!!(pathname === '/exams')}>
                    Exams
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <Link href="/profile" passHref legacyBehavior>
              <HeaderGlobalAction
                aria-label="User"
                tooltipAlignment="end">
                <Image
                  src="https://www.fi.upm.es/GestorTablon/GTimgPortada/4993-imagen_2023_12_19_105619500.png"
                  alt="Descripción de la imagen"
                  width={20}
                  height={20}
                  className="profile-image"
                />
              </HeaderGlobalAction>
            </Link>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default TopHeader;

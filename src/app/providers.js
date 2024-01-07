'use client'

import { Content, Theme } from '@carbon/react';

import TopHeader from '@/components/TopHeader/TopHeader';
import Footer from '@/components/Footer/Footer';

export function Providers({ children }) {
  return (
    <div>
        <Theme theme="g100">
          <TopHeader />
        </Theme>
        <Content>
          {children}
        </Content>
        <Footer />
    </div>
  )
}

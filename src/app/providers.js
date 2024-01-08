'use client'

import { Content, Theme } from '@carbon/react';
import TopHeader from '@/components/TopHeader/TopHeader';
import Footer from '@/components/Footer/Footer';

export function Providers({ children }) {
  return (
    <div style={{ minHeight: '145vh', display: 'flex', flexDirection: 'column' }}>
      <Theme theme="g100">
        <TopHeader />
      </Theme>
      <Content style={{ flex: 1 }}>
        {children}
      </Content>
      <Footer />
    </div>
  )
}

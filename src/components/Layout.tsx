import React, { ReactNode } from 'react';
import Header from './header';

type LayoutProps = {
  children: ReactNode;
  headerTitle: ReactNode;
};

export default function Layout({ children, headerTitle }: LayoutProps) {
  return (
    <div>
      <Header title={headerTitle} />
      {children}
    </div>
  );
}

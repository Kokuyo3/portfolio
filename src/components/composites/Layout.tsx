import React, { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="font-mono">
        <Header />
        <main className="bg-term-aubergine min-h-screen p-3">{children}</main>
      </div>
    </>
  );
};

export default Layout;

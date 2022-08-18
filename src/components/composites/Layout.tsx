import React, { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="term-text bg-term-aubergine mx-auto min-h-screen">
        <Header />
        <main className="p-3 relative flex flex-col h-full">
          {children}
          <div className="flex-1 grow shrink-0 basis-auto min-h-[10vh] max-h-[15vh]" />
        </main>
      </div>
    </>
  );
};

export default Layout;

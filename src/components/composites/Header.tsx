import React from 'react';
import MenuButton from '../MenuButton';
import Socials from '../Socials';

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 px-3 py-2 h-12 bg-gradient-to-b from-term-header-gradient-top to-term-header-gradient-bot flex flex-nowrap items-center justify-between shadow drop-shadow-sm">
        <div className="order-1 block w-full w-1/4 ">
          <MenuButton />
        </div>
        <div className="order-2 w-full w-2/4 text-center font-semibold truncate">
          Cheryl Tang - Software Engineer
        </div>
        <div className="order-3 block w-full w-1/4 text-right">
          <Socials />
        </div>
      </nav>
    </>
  );
};

export default Header;

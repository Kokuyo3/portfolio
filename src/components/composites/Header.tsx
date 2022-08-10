import React from 'react';
import MenuButton from '../MenuButton';
import Socials from '../Socials';

const Header = () => {
  return (
    <>
      <nav className="px-3 py-2 h-12 bg-gradient-to-b from-term-header-gradient-top to-term-header-gradient-bot flex flex-nowrap items-center justify-between shadow drop-shadow-sm">
        <div className="lg:order-1 lg:block w-full lg:w-1/4 ">
          <MenuButton />
        </div>
        <div className="lg:order-2 w-full lg:w-2/4 lg:text-center text-xl text-white font-semibold">
          Cheryl Tang - Software Engineer
        </div>
        <div className="lg:order-3 lg:block w-full lg:w-1/4 lg:text-right">
          <Socials />
        </div>
      </nav>
    </>
  );
};

export default Header;

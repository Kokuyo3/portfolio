import { Link } from 'gatsby';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const MenuButton = () => {
  const menuItems = ['Currently', 'Under', 'Construction', '👷‍♀️🚧️'];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownDiv = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const handleOutsideClick = useCallback((e: Event): void => {
    const dropdownDivElement = dropdownDiv.current;
    const buttonElement = menuButton.current;

    if (
      dropdownDivElement &&
      buttonElement &&
      !dropdownDivElement.contains(e.target as Element) &&
      !buttonElement.contains(e.target as Element)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <div className="relative">
      <button
        ref={menuButton}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="p-1 w-9 h-9 flex justify-center items-center group rounded-md drop-shadow shadow-inner shadow-stone-600 text-gray-100 bg-term-header-button hover:bg-gray-600 focus:ring-blue-500 focus:ring-offset-blue-200 transition ease-in duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1"
      >
        <svg
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
      {isOpen && (
        <div ref={dropdownDiv} className="absolute z-10 mt-1 transform px-5 w-fit max-w-md px-0">
          <div className="bg-term-header-menu rounded shadow-lg drop-shadow ring-1 ring-term-header-gradient-top ring-opacity-70 overflow-hidden">
            <ul className="divide-y">
              {menuItems.map((item: string) => {
                return (
                  <li
                    key={item}
                    className="px-5 py-3 flex items-center justify-center hover:bg-term-orange"
                  >
                    <Link to="/">{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;

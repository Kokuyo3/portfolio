import React from 'react';

const MenuButton = () => {
  return (
    <button
      type="button"
      className="p-1 w-9 h-9 flex justify-center items-center rounded-md drop-shadow shadow-inner shadow-stone-600 text-gray-100 bg-term-header-button hover:bg-gray-600 focus:ring-blue-500 focus:ring-offset-blue-200 transition ease-in duration-200 text-center text-base focus:outline-none focus:ring-1 focus:ring-offset-1"
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
  );
};

export default MenuButton;

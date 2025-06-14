import React from 'react';

function NavLink({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-transparent border-b-2 border-transparent text-white text-lg cursor-pointer px-3 py-2 transition-colors hover:border-b-white"
    >
      {text}
    </div>
  );
}

export default NavLink;
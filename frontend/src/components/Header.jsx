import "tailwindcss/tailwind.css";

import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between shadow-2xl bg-[#121212] p-4">
      <div>
        <img
          src="https://i.postimg.cc/0N01sKBc/red-eye.png"
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
      <div className="space-x-4">
        <button className="text-lg bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Login 
        </button>
        <button className="text-lg bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from 'react-router-dom';
import "tailwindcss/tailwind.css";

function HeaderLoginRegister() {
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
        <Link to="/">
          <button
            className="border border-red-700 text-lg bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderLoginRegister;

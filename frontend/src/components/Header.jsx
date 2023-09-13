import "tailwindcss/tailwind.css";

import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between shadow-2xl bg-[#121212] p-4">
      <div>
        <img
          src="https://o.remove.bg/downloads/ab9b83be-0e54-4f64-a5d1-faf28cb68ac1/free-png-images-dlpngcom-removebg-preview.png"
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
      <div className="space-x-4">
        <button className="text-lg bg-[#121212] hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
          Home
        </button>
        <button className="text-lg bg-[#121212] hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;

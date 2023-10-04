import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import HeaderLoginRegister from "../components/header/HeaderLoginRegister.jsx";
import axios from 'axios';
import { createUser } from "../utils/Api.js";

const BASE_URL = "http://localhost:8000";

function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
  const userRespose = await createUser(userData)
  };

  return (
    <div>
      <HeaderLoginRegister/>
      <div className="bg-[#121212] min-h-screen flex items-center justify-center">
        <div className="bg-[#121212] p-8 rounded shadow-md w-96">
          <h2 className="border border-red-700 text-2xl text-red-900 font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                placeholder="Nombre"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="name">Last Name</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                placeholder="Apellido"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="email"
                placeholder="Correo electrónico"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="password">Confirm Password</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </div>
            <div className="mb-6">
              <button 
                type="button"
                onClick={handleRegister}
                className="border border-red-700 bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

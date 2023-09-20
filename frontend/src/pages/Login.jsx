import React from 'react';
import "tailwindcss/tailwind.css";
import HeaderLoginRegister from "../components/HeaderLoginRegister.jsx"

function Login() {
  return (
    <div>
      <HeaderLoginRegister />
      <div className="bg-[#121212] min-h-screen flex items-center justify-center">
        <div className="bg-[#121212] p-8 rounded shadow-md w-96">
          <h2 className="text-2xl type-strong text-red-900 font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="email"
                id="email"
                name="email"
                placeholder="correo@example.com"
                // Agrega los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                // Agrega los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-6">
              <button
                className="bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
import React from "react";
import "tailwindcss/tailwind.css";
import HeaderLoginRegister from "../components/HeaderLoginRegister.jsx";

function Register() {
  return (
    <div>
      <HeaderLoginRegister />
      <div className="bg-[#121212] min-h-screen flex items-center justify-center">
        <div className="bg-[#121212] p-8 rounded shadow-md w-96">
          <h2 className="border border-red-700 text-2xl text-red-900 font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="email"
                id="email"
                name="email"
                placeholder="correo@example.com"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Confirm Email
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="email"
                id="email"
                name="email"
                placeholder="correo@example.com"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-red-900 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                // Aquí puedes agregar los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-6">
              <button
                className="border border-red-700 bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
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

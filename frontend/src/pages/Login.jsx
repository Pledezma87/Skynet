import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import {login} from "../utils/Api.js";
import HeaderLoginRegister from '../components/header/HeaderLoginRegister.jsx';


function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

    // Manejar cambios en los campos de correo electrónico y contraseña
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Llama a la función login con los datos del formulario
      try {
        await login(formData);
        // Si el inicio de sesión es exitoso, puedes redirigir al usuario a la página adecuada aquí
      } catch (error) {
        // Maneja los errores de inicio de sesión aquí
        console.error('Error al iniciar sesión:', error);
      }
    };

  return (
    <div>
      <HeaderLoginRegister />
      <form onSubmit={handleSubmit}>
      <div className="bg-[#121212] min-h-screen flex items-center justify-center">
        <div className="bg-[#121212] p-8 rounded shadow-md w-96">
          <h2 className="border border-red-700 text-2xl text-center text-red-900 font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label className="block text-red-900 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="********"
                // Agrega los eventos y el estado necesario para manejar el valor del campo
              />
            </div>
            <div className="mb-6">
              <button
                className="border border-red-700 bg-[#121212] hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Login
              </button>
            </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Login;

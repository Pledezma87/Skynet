import React, { useState } from 'react';
// import {createUser} from '../../utils/Api.js';
import axios from 'axios';
// añadir estilos 
const BASE_URL = "http://localhost:8000"; //  URL de tu servidor backend

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = async () => {
    console.log("entra en handle")
    const response = await axios.post(`${BASE_URL}/user/`, userData);
    console.log(response.data)


    // Envía los datos del usuario al backend para el registro
    // Realiza validación si es necesario
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={userData.firstName}
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={userData.lastName}
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={userData.confirmPassword}
        onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;

// // src/components/Login.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/authActions';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     try {
//       const token = await dispatch(loginUser(credentials));
//       // Realiza acciones después del inicio de sesión, como redirigir al usuario.
//           // Guarda el token en el almacenamiento local (o en una cookie si es necesario)
//     localStorage.setItem('token', token);
//         // Redirige al usuario a la página protegida
//         // history.push('/profile'); // Reemplaza con la ruta adecuada
//     } catch (error) {
//       // Maneja errores de inicio de sesión, muestra un mensaje de error, etc.
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={credentials.username}
//         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={credentials.password}
//         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

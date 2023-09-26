import React, { useState } from 'react';
import { login } from '../../utils/Api.js';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    hiddenField1: '',
    hiddenField2: '',
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if(e.hiddenField1 || e.hiddenField2) {
      setError({error:"error interno en el servidor"})
    }


    if (!recaptchaValue) {
      setError('Complete el captcha');
    } else {
      setError(null);
      setLoading(true);

      try {
        await login(credentials, navigate, setError, setLoading);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setError('Error al iniciar sesión. Intente nuevamente más tarde.');
        setLoading(false);
      }
    }
  };

  return (
    <div className=" bg-[#121212] flex flex-col text-white items-center justify-center h-screen">
      {error && (
        <div className="bg-red-900 bg-red-900 text-white px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error:</strong>
          <span className="block">{error}</span>
        </div>
      )}
      <h1 className="text-3xl font-semibold mb-4">Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={credentials.username}
        onChange={handleInputChange}
        className="mb-4 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={handleInputChange}
        className="mb-4 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      />
      <div className="hidden">
        <input
          type="hidden"
          name="hiddenField1"
          defaultValue= ""
        />
        <input
          type="hidden"
          name="hiddenField2"
          defaultValue= ""
        />
      </div>
      <div className="mb-4">
        <ReCAPTCHA
          sitekey="6LcMhVEoAAAAAPRiDREoRF07U4QB4Raql8OY_j75"
          onChange={(value) => setRecaptchaValue(value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        onClick={handleLogin}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>
    </div>
  );
};

export default Login;

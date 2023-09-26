import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    hiddenField1: '', // Agrega los campos ocultos necesarios
    hiddenField2: '', // Agrega los campos ocultos necesarios
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value }); // Usa setUserData en lugar de setCredentials
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userData.hiddenField1 || userData.hiddenField2) { // Accede a los campos ocultos de userData
      setError({ error: 'Error interno en el servidor' });
    }

    if (!recaptchaValue) {
      setError('Complete el captcha');
    } else {
      setError(null);
      setLoading(true);

      try {
        Register (userData,navigate,setError,setLoading)
      } catch (error) {
        console.error('Error al registarse:', error);
        setError('Error al registrarse. Intente nuevamente más tarde.');
        setLoading(false);
      }
        // Ejemplo de llamada a la API usando axios:
        await axios.post(`${BASE_URL}/registro`, userData);

        // Redirige al usuario después del registro exitoso
        try {
        Register(userData, navigate, setError, setLoading);
        navigate('/registro');
      } catch (error) {
        console.error('Error al registrar:', error);
        setError('Error al registrar. Intente nuevamente más tarde.');
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        name="first Name"
        value={userData.firstName}
        onChange={handleInputChange}
      />
       <input
        type="text"
        placeholder="Lastname"
        name="Last name"
        value={userData.firstName}
        onChange={handleInputChange}
      />
       <input
        type="text"
        placeholder="email"
        name="email"
        value={userData.firstName}
        onChange={handleInputChange}
      />
        <input
        type="text"
        placeholder="password"
        name="password"
        value={userData.firstName}
        onChange={handleInputChange}
      />
       <input
        type="text"
        placeholder="password"
        name="password"
        value={userData.firstName}
        onChange={handleInputChange}
      />
       <input
        type="text"
        placeholder="confirm password"
        name="confirm password"
        value={userData.firstName}
        onChange={handleInputChange}
      />
      <ReCAPTCHA sitekey="6Ld-XUwoAAAAANKhx2Py2ot3CvMMKN28MEGptiRI" onChange={(value) => setRecaptchaValue(value)} />
      <button onClick={handleRegister} disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
      {error && (
        <div className="bg-red-900 bg-red-900 text-white px-4 py-3 rounded mt-4">
          <strong className="font-bold">Error:</strong>
          <span className="block">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Register;

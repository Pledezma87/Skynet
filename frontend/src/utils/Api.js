import axios from "axios";
import jwt_decode from"jwt-decode";

const BASE_URL = "http://localhost:8000"; //  URL de tu servidor backend

export const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };
  
  export const login = async (formData, navigate, setError, setLoading) => {
    setError(null);
    setLoading(true);
  
    // Verificar si cualquiera de los dos campos ocultos está lleno y, en ese caso, evitar la petición
    if (formData.hiddenField1 !== "" || formData.hiddenField2 !== "") {
      setError("Al menos uno de los campos ocultos está lleno. La petición se evitó.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, formData);
  
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token); // Set the token in Axios headers
  
        // Decodificar el token para obtener el rol
        const decodedToken = jwt_decode(response.data.token);
        const userType = decodedToken.role;
  
        if (userType === "admin") {
          navigate("/admin"); // Redirige a la página de administrador
        } else {
          navigate("/forms"); // Redirige a la página para usuarios no administradores
        }
      } else {
        setError("No se recibió un token de acceso.");
      }
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  };
  

export const getFormList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/form`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const submitForm = async (formData) => {
      try {
        const response = await axios.post(`${BASE_URL}/form`, formData);
        return response.data;
      } catch (error) {
        throw error;
      }
    };
  
  export const updateForm = async (formId, formData) => {
    try {
      const response = await axios.put(`${BASE_URL}/form/${formId}`, formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteForm = async (formId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/form/${formId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const createUser = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const getUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
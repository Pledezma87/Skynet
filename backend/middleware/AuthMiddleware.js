import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from "bcrypt";

dotenv.config();
const secretKey = process.env.SECRET_KEY 
const tokenExpirationTime = 3 * 60 * 60 * 1000

export const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');

  // Verifica si se proporcionó un token
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado.' });
  }

  try {
    // Verifica el token
    const decodedToken = jwt.verify(token, 'secretKey'); // Reemplaza 'secret_key' con tu clave secreta

    // Agrega el usuario autenticado al objeto de solicitud
    req.user = decodedToken;

    // Continúa con la siguiente función de middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token no válido.' });
  }
};

    // Si las credenciales son válidas, genera un token JWT
export const generateToken = (req) => {
      try { 
        const {_id, email, role} = req
        const createToken = jwt.sign ( {_id, email, role}, secretKey, {expressIn:tokenExpirationTime})
        req.token= createToken
      } catch (error) {
        console.error ("error al generar token ")
      }
    }

// Middleware de manejo de errores global
export const errorHandler = (err, res) => {
  // Enviar una respuesta de error con código 500 y un mensaje genérico
  res.status(500).json({ message: "Ha ocurrido un error en la aplicación." });
};



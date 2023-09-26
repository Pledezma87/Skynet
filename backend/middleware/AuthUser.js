import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from "bcrypt";

dotenv.config();
const secretKey = process.env.SECRET_KEY;
const tokenExpirationTime = 3 * 60 * 60 * 1000;

// Función para verificar el token en AuthMiddleware
export const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return decodedToken;
  } catch (error) {
    throw new Error('Token no válido.');
  }
};

// Función para generar un token JWT en AuthUser
export const generateToken = (data) => {
  try {
    const token = jwt.sign(data, secretKey, { expiresIn: tokenExpirationTime });
    return token;
  } catch (error) {
    throw new Error('Error al generar el token.');
  }
};

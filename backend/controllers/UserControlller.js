// backend/routes/auth.js
import { generatePath } from "react-router-dom";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middleware/authMiddleware.js";

// Ruta para el registro de usuarios
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica si el correo electrónico ya está registrado
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Verificamos la contraseña
    const passwordValidate = await bcrypt.compare(password, user.password);
    if (passwordValidate) {
      req.user = user;
    }
    const newToken = generateToken(user);
    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar al usuario." });
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log("error al crear ususario");
  }
};

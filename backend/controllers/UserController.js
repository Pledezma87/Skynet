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

// Crear (Create) - crear usuarios
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);

    const usersave = await user.save();
    res.status(200).json(usersave);

  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario." });
  }
};

// Leer (Read) - Obtener todos los usuarios
export const getAllUsers = async (res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios." });
  }
};

// Leer (Read) - Obtener un usuario por su ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario." });
  }
};

// Actualizar (Update) - Actualizar información de un usuario por su ID
export const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario." });
  }
};

// Eliminar (Delete) - Eliminar un usuario por su ID
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }
    res.status(200).json({ message: "Usuario Eliminado con exito." });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario." });
  }
};

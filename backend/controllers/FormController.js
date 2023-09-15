// controllers/userController.js
const User = require('../models/User'); // Asegúrate de tener un modelo de usuario configurado

// Controlador para obtener información del usuario
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // El ID del usuario se obtiene del token JWT

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la información del usuario.' });
  }
};

// Otros controladores para actualizar el perfil del usuario, cambiar la contraseña, etc.

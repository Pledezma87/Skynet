import express from "express";
import {
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/UserController.js";

const userRouter = express.Router();
//ruta para el login
userRouter.post("/login", login);
//ruta para crear ususario
userRouter.post("/", createUser);
//ruta para obtener todos los usuario
userRouter.get("/users", getAllUsers);
//ruta para obtener a un usuario por id
userRouter.get("/users/:id", getUserById);
//ruta para actualizar usuario por id
userRouter.put("/users/:id", updateUserById);
//ruta para eliminar un usuario por id
userRouter.delete("/users/:id", deleteUserById);
export default userRouter;

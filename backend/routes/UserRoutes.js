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

userRouter.post("/login", login);

userRouter.post("/", createUser);

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.put("/:id", updateUserById);

userRouter.delete("/:id", deleteUserById);
export default userRouter;

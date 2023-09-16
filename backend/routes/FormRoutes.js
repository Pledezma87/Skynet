import express from "express";
import {
  createForm,
  getAllForms,
  getFormById,
  updateFormById,
  deleteFormById,
} from "../controllers/FormController.js";

//ruta para ingresar formulario
const formRouter = express.Router();
// Ruta para crear un nuevo formulario
formRouter.post("/", createForm);

// Ruta para obtener todos los formularios
formRouter.get("/", getAllForms);

// Ruta para obtener un formulario por su ID
formRouter.get("/:id", getFormById);

// Ruta para actualizar un formulario por su ID
formRouter.put("/:id", updateFormById);

// Ruta para eliminar un formulario por su ID
formRouter.delete("/:id", deleteFormById);

export default formRouter;

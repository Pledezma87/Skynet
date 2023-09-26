import express from "express";
import {
  createForm,
  getAllForms,
  getFormById,
  updateFormById,
  deleteFormById,
} from "../controllers/FormController.js";


const formRouter = express.Router();

formRouter.post("/", createForm);


formRouter.get("/", getAllForms);


formRouter.get("/:id", getFormById);


formRouter.put("/:id", updateFormById);


formRouter.delete("/:id", deleteFormById);

export default formRouter;

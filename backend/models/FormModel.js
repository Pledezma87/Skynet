import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  Email: String,
  Name: String,
  Subjet: String,
  Message: String,
  // Otros campos específicos del formulario, si es necesario
});

const Form = mongoose.model("Form", formSchema);

export default Form;

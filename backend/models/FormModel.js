import mongoose from "mongoose";
import validator from "validator";

const formSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 80,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value); // Utiliza la función isEmail del módulo validator
      },
      message: "El formato del correo electrónico no es válido.",
    },
  },

  Name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "Solo se permiten letras en el nombre.",
    },
  },

  Subject: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120,
  },

  Message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 400,
  },
});

const Form = mongoose.model("Form", formSchema);

export default Form;

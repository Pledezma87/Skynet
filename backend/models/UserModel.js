import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, "en-US", { ignore: " -" });
      },
      message: "El nombre debe contener solo letras y espacios."
    }
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isAlpha(value, "en-US", { ignore: " -" });
      },
      message: "El apellido debe contener solo letras y espacios."
    }
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "El formato del correo electrónico no es válido."
    }
  },

  password: {
    type: String,
    required: true,
    minlength: 12,
    // validate: {
    //   validator: function (value) {
    //     return /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-\\/]+$/u.test(value);
    //   },
    //   message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial."
    // }
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", userSchema,"users");

export default User;

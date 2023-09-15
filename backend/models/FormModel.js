// models/FormModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  title: String,
  description: String,
  fields: [{ name: String, type: String, required: Boolean }],
  // Otros campos específicos del formulario, si es necesario
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

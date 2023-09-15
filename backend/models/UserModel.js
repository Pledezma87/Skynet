import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  role:{ type: String, enum: ["User", "Admin"], default: "User"},
  email: { type: String, unique: true },
  password: String,
  // Otros campos específicos del administrador, si es necesario
});

const User = mongoose.model('User', userSchema);

export default User

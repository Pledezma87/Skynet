import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/Skynet'; // Reemplaza con la URL de tu base de datos y nombre de la base de datos


  try {
     mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir del proceso de Node.js en caso de error
  };

export default mongoose.connection;


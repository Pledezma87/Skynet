import mongoose from "mongoose";


const url = 'mongodb://localhost:27017/Skynet'; 

 try {
     mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit(1); 
  };

export default mongoose.connection;


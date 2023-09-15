import express from 'express';
import db from "./database/Db.js"
// import FormRouter from './routers/FormRouter.js';
import cors from 'cors';
import userRouter from './routes/UserRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/user', userRouter);

const Port = process.env.Port || 8000;

app.use ((err, req, res, next) => {
    res.status(500).json({eror: 'error interno en el servidor'})
})

app.listen(Port,()=>{
    console.log(`servidor en ejecucion en el puerto ${Port}`)
})
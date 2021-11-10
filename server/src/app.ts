import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import teacherRoutes from './routes/teacher'

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev')); //me muestra mensajes por consola a medida que el cliente pide cosas
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/teacher',teacherRoutes);


export default app;
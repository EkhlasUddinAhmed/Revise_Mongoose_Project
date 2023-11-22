import express, { Application} from 'express';
import cors from 'cors';
import StudentRouter from './App/modules/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRouter);
app.use('/api/v1/students', StudentRouter);



export default app;

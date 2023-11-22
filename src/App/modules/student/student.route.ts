import express from 'express';
import { StudentController } from './student.controller';
const StudentRouter = express.Router();

// Will Call Controller Function...
StudentRouter.post('/create-student', StudentController.createStudent);
StudentRouter.get('/get-all', StudentController.getAllStudents);
StudentRouter.get('/get-one/:stdID', StudentController.getOneStudent);

StudentRouter.delete('/delete-one/:stdID', StudentController.deleteOneStudent);

StudentRouter.put('/update-one/:stdID', StudentController.updateOneStudent);


// Exporting Student Router...
export default StudentRouter;

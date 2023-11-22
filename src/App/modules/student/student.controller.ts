import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentService.createStudentInDB(student);

    res.status(200).json({
      success: true,
      message: 'One Student Inserted Successfully',
      student: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'One Student Insertion Failed ',
      // error:err.message
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try{
    const result = await StudentService.getAllStudents();
    res.status(200).json({
        success: true,
        message: 'One Student Inserted Successfully',
        student: result,
      });

  }catch(error){
    res.status(500).json({
        success: false,
        message: 'Getting All Students Failed ',
        // error:err.message
      });

  }
}



const getOneStudent = async (req: Request, res: Response) => {
    try{
        const {stdID}=req.params;
      const result = await StudentService.getOneStudent(stdID)
      res.status(200).json({
          success: true,
          message: 'One Student Got Successfully',
          student: result,
        });
  
    }catch(error){
      res.status(500).json({
          success: false,
          message: 'Getting One Students Failed ',
          // error:err.message
        });
  
    }
  }

  const deleteOneStudent = async (req: Request, res: Response) => {
    try{
        const {stdID}=req.params;
      const result = await StudentService.deleteOneStudent(stdID)
      res.status(200).json({
          success: true,
          message: 'One Student deleted Successfully',
          student: result,
        });
  
    }catch(error){
      res.status(500).json({
          success: false,
          message: 'Deleting One Student Failed ',
          // error:err.message
        });
  
    }
  }

  const updateOneStudent = async (req: Request, res: Response) => {
    try{
        const {stdID}=req.params;
      const result = await StudentService.updateOneStudent(stdID)
      res.status(200).json({
          success: true,
          message: 'One Student Updated Successfully',
          student: result,
        });
  
    }catch(error){
      res.status(500).json({
          success: false,
          message: 'Updating One Student Failed ',
          // error:err.message
        });
  
    }
  }



export const StudentController = {
  createStudent,
  getAllStudents,
  getOneStudent,
  deleteOneStudent,
  updateOneStudent
}

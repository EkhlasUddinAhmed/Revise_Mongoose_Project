import { TStudent } from './student.interface';
import StudentModel from './student.model';

const createStudentInDB = async (student: TStudent) => {
  // const insertedStudent=await StudentModel.create(student);
  const modelInstance = new StudentModel(student);
  const insertedStudent = await modelInstance.save();
  return insertedStudent;
};

const getAllStudents = async () => {
  const allStudents = await StudentModel.find();
  return allStudents;
};

const getOneStudent = async (stdID: string) => {
  const getOneStudent = await StudentModel.findOne({ _id: stdID });
  return getOneStudent;
};

const deleteOneStudent = async (stdID: string) => {
  const deletedStudent = await StudentModel.deleteOne({ _id: stdID });
  return deletedStudent;
};

const updateOneStudent = async (stdID: string) => {
  const result=await StudentModel.findOneAndUpdate(
    { _id: stdID },
    {
      $set: { contactNo: '01757328182' },
    },
    {
      new: true,
      useFindOneAndModify: false,
    },
  )

return result

};

export const StudentService = {
  createStudentInDB,
  getAllStudents,
  getOneStudent,
  deleteOneStudent,
  updateOneStudent,
};

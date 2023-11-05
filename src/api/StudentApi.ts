import axios, { AxiosPromise } from "axios";
import { StudentInterface } from "../interface/StudentInterface";


  const studentApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getStudents = async (): AxiosPromise<StudentInterface[]> => {
    const res = await studentApi.get('/students');
    return res;
  }

  export const getStudent = async (enroll: any): AxiosPromise<any> => {
    const res = await studentApi.get(`/student/${enroll}`);
    return res;
  };
  
  export const createStudent = async (data: StudentInterface)=> {
    const res = await studentApi.post("/student",data);
    return res;
  };

  export const updateStudent = async(data: StudentInterface): AxiosPromise<any> => {
    const res = await studentApi.put(`/student/${data.id}`, data);
    return res;
  };
  
  export const deleteStudent = async(id: any) => {
    const res = await studentApi.delete(`/student/${id}`);
    return res;
  };
  
  
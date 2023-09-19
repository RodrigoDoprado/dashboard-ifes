import axios, { AxiosPromise } from "axios";
import { StudentInterface } from "../interface/StudentInterface";


const studentApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getStudents = async (): AxiosPromise<StudentInterface[]> => {
    const res = await studentApi.get('/students');
    return res;
  }

  export const getStudent = async (id: any) => {
    const res = await studentApi.get(`/${id}`);
    return res;
  };
  
  export const createStudent = async (data: StudentInterface): AxiosPromise<any> => {
        const response = await studentApi.post("/student",data);
        return response;
  };

  export const updateStudent = async(data: StudentInterface): AxiosPromise<any> => {
    const response = await studentApi.put(`/student/${data.id}`, data);
    return response;
  };
  
  export const deleteStudent = async(id: any) => {
    await studentApi.delete(`/${id}`);
  };
  
  
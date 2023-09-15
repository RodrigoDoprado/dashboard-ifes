import axios, { AxiosPromise } from "axios";
import { StudentInterface } from "../interface/StudentInterface";


const studentApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getStudents = async (): AxiosPromise<StudentInterface[]> => {
    const res = await studentApi.get('/studes');
    return res;
  }

  export const getStudent = async (id: any) => {
    const res = await studentApi.get(`/${id}`);
    return res;
  };
  
  export const createStudent = async (data: StudentInterface): AxiosPromise<any> => {
        const response = await studentApi.post("/",data);
        return response;
  };
  
  export const deleteStudent = async(id: any) => {
    await studentApi.delete(`/${id}`);
  };
  
  export const updateStudent = async(data: StudentInterface): AxiosPromise<any> => {
    const response = await studentApi.put(`/${data.id}`, data);
    return response;
  };
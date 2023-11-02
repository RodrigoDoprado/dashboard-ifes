import axios, { AxiosPromise } from "axios";
import { SubjectInterface } from "../interface/SubjectInterface";


const subjectApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getSubjects = async (id:any): AxiosPromise<SubjectInterface[]> => {
    const res = await subjectApi.get(`/subjects/${id}`);
    return res;
  }

  export const getSubject = async (id: any) => {
    const res = await subjectApi.get(`/subject/${id}`);
    return res;
  };
  
  export const createSubject = async (data: SubjectInterface): AxiosPromise<any> => {
        const res = await subjectApi.post("/subject",data);
        return res;
  };

  export const updateSubject = async(data: SubjectInterface): AxiosPromise<any> => {
    const res = await subjectApi.put(`/subject/${data.id}`, data);
    return res;
  };
  
  export const deleteSubject = async(id: any) => {
    const res =await subjectApi.delete(`/subject/${id}`);
    return res;
  };
  
  
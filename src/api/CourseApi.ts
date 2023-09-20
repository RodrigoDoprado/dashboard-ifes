import axios, { AxiosPromise } from "axios";
import { CourseInterface } from "../interface/CourseInterface";


const courseApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const getCourses = async (): AxiosPromise<CourseInterface[]> => {
    const res = await courseApi.get('/courses');
    return res;
  }

  export const getCourse = async (id: any) => {
    const res = await courseApi.get(`/${id}`);
    return res;
  };
  
  export const createCourse = async (data: CourseInterface): AxiosPromise<any> => {
        const response = await courseApi.post("/course",data);
        return response;
  };

  export const updateCourse = async(data: CourseInterface): AxiosPromise<any> => {
    const response = await courseApi.put(`/course/${data.id}`, data);
    return response;
  };
  
  export const deleteCourse = async(id: any) => {
    await courseApi.delete(`/course/${id}`);
  };
  
  
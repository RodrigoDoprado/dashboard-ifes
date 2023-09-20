import { CourseInterface } from "./CourseInterface";

export interface StudentInterface{
    id?: string,
    enroll?: string, // matricula
    firstName?: string,
    lastName?:string,
    avatar?: string,
    course?: any // curso
}
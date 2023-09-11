import axios, { AxiosPromise } from "axios";
import { UserData } from "../interface/UserData";


const userAPI = axios.create({
    baseURL: process.env.REACT_APP_HOST
  })

  export const getUser = async (token:any) => {
    const res = await userAPI.get("/employee", {
      headers: { authorization: `Bearer ${token}` },
    });
    return res;
  };

  export const getAllUser = async (id: any) => {
    const res = await userAPI.get(`/${id}`);
    return res;
  };
  
  export const createUser = async (data: UserData): AxiosPromise<any> => {
        const response = await userAPI.post("/",data);
        return response;
  };
  
  export const deleteUser = async(id: any) => {
    await userAPI.delete(`/${id}`);
  };
  
  export const updateUser = async(data: UserData): AxiosPromise<any> => {
    const response = await userAPI.put(`/${data.id}`, data);
    return response;
  };
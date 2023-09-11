import axios, { AxiosPromise } from "axios";
import { Signin } from "../interface/SigninData";


const signinAPI = axios.create({
    baseURL: process.env.REACT_APP_HOST
  })

  export const login = async (data: Signin): AxiosPromise<any> => {
    const res = await signinAPI.post("/signin",data);
    return res;
  };

  export const sair = async (): AxiosPromise<any> => {
    const res = await signinAPI.post("/logout");
    return res;
  };
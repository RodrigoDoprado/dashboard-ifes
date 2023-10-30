import axios, { AxiosPromise } from "axios";
import { AuthInterface } from "../interface/AuthInterface";


const AuthApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const createSignIn = async (data: AuthInterface): AxiosPromise<any> => {
        const res = await AuthApi.post("/auth/signIn",data);
        return res;
  };

  
  
  
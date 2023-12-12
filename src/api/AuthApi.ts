import axios, { AxiosPromise } from "axios";
import { AuthInterface } from "../interface/AuthInterface";
import { logout } from "../store/ducks/Auth";


const AuthApi = axios.create({
    baseURL: process.env.REACT_APP_HOST,
  })

  export const SignInService = async (data: AuthInterface): AxiosPromise<any> => {
        const res = await AuthApi.post("/auth/signIn",data);
        return res;
  };

  export default function LogoutService(){
      localStorage.removeItem("token")
      localStorage.removeItem("tokenStudent")
      localStorage.removeItem("tokenTeacher")
      return logout()
  }
  
  
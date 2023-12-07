import { createSignIn } from "../../api/AuthApi"
import { AuthInterface } from "../../interface/AuthInterface"
import { login, logout } from "./Auth"
import type {} from 'redux-thunk/extend-redux';

const setToken = (token: string) => {
  localStorage.setItem("token", token)
}
const setStudentToken = (token: string) => {
  localStorage.setItem("tokenStudent", token)
}
const setTeacherToken = (token: string) => {
  localStorage.setItem("tokenTeacher", token)
}


export const authLogin = (user: AuthInterface) =>{
    return async (dispatch: (arg0: { payload: undefined; type: "LOGIN" }) => void) =>{
    await createSignIn(user)
    .then((res)=>{
      dispatch(login())
      if(res.data.user === "student"){
        setStudentToken(res.data.token)
        setTimeout(() => window.location.href = "/aluno", 1500);
      }else if(res.data.user === "teacher"){
        setTeacherToken(res.data.token)
        setTimeout(() => window.location.href = "/professor", 1500);
      }else if(res.data.user === ""){
        setToken(res.data.token)
        setTimeout(() => window.location.href = "/dashboard", 1500);
      }
    }) //window.location.href = window.location.href
    .catch(()=>{alert("Email ou Senha Invalido")})
    }
}

export const authLogout = () =>{
    return (dispatch: (arg0: { payload: undefined; type: "LOGOUT"; }) => void) =>{
        setToken("")
        setToken("")
        setTeacherToken("")
        setStudentToken("")
        dispatch(logout())
        // setTimeout(() => window.location.href = "/", 1500);
    }
}
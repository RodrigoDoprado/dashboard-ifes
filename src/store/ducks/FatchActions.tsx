import { createSignIn } from "../../api/AuthApi"
import { AuthInterface } from "../../interface/AuthInterface"
import { login, logout } from "./Auth"
import type {} from 'redux-thunk/extend-redux';

const setToken = (token: string) => {
    localStorage.setItem("token", token)
}


export const authLogin = (user: AuthInterface) =>{
    return async (dispatch: (arg0: { payload: undefined; type: "LOGIN" }) => void) =>{
    await createSignIn(user)
    .then((res)=>{
        if(res.data.token){
            dispatch(login())
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
        dispatch(logout())
        setTimeout(() => window.location.href = "/", 1500);
    }
}
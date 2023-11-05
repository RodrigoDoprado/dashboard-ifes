import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { UserData } from "../interface/UserData"
import { AuthInterface } from "../interface/AuthInterface"
import { createSignIn } from "../api/AuthApi"
import { useNavigate } from "react-router-dom"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  // const history = useNavigate();

  // useEffect(() => {
  //   validateToken()
  // }, [])

  // const validateToken = async () => {
  //   const usercookies = localStorage.getItem("token")
  //   if(usercookies){
  //     getUser(usercookies)
  //     .then((res)=>{setUser(res.data.employee)})
  //   }
  //   setLoading(false)
  // }

    const signin = async (email: string, password: string) => {
      const autDdata: AuthInterface={email}
      const res = await createSignIn(autDdata)
     if(res){
      setToken(res.data.token)
      return true
     }else{
      return false
     }
  }

  const signout =async ()=> {
    setToken("")
    // setTeacherToken("")
    // setStudentToken("")
    // setTimeout(() => history("/"), 500);
  }

  const setToken = (token: string) => {
    localStorage.setItem("token", token)
  }
  // const setStudentToken = (token: string) => {
  //   localStorage.setItem("tokenStudent", token)
  // }
  // const setTeacherToken = (token: string) => {
  //   localStorage.setItem("tokenTeacher", token)
  // }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

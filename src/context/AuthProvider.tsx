import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { UserData } from "../interface/UserData"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

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
      // const data: Signin={email,password}
      // try{
      //   await login(data)
        // .then((res)=>{
           if(email!=""&&password!=""){
            setToken("tokenestavalidado")
            return true
          }
          return false
          
        // })//1h
      //   return true
      // }catch(e){return false}       
      
  }

  const signout =async ()=> {
    setToken("")
    setTeacherToken("")
    setStudentToken("")
  }

  const setToken = (token: string) => {
    localStorage.setItem("token", token)
  }
  const setStudentToken = (token: string) => {
    localStorage.setItem("tokenStudent", token)
  }
  const setTeacherToken = (token: string) => {
    localStorage.setItem("tokenTeacher", token)
  }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

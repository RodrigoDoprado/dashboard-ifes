import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { login, sair } from "../api/SigninApi"
import { getUser } from "../api/UserApi"
import { UserData } from "../interface/UserData"
import { Signin } from "../interface/SigninData"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    validateToken()
  }, [])

  const validateToken = async () => {
    const usercookies = localStorage.getItem("token")
    if(usercookies){
      getUser(usercookies)
      .then((res)=>{setUser(res.data.employee)})
    }
    setLoading(false)
  }

    const signin = async (email: string, password: string) => {
      const data: Signin={email,password}
      try{
        await login(data)
        .then((res)=>{setToken(res.data.token)})//1h7
        return true
      }catch(e){return false}       
      
  }

  const signout =async ()=> {
    setToken("")
    await sair().then((res)=>{setUser(res.data.employee)})
  }

  const setToken = (token: string) => {
    localStorage.setItem("token", token)
  }


  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

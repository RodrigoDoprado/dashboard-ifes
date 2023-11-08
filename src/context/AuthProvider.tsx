import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { AuthInterface } from "../interface/AuthInterface"
import { createSignIn } from "../api/AuthApi"
import { StudentInterface } from "../interface/StudentInterface"
import { TeacherInterface } from "../interface/TeacherInterface"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [student, setStudent] = useState<StudentInterface | null>(null)
  const [teacher, setTeacher] = useState<TeacherInterface | null>(null)
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

  const signin = async (email: string) => {
    const autDdata: AuthInterface={email}
    const res = await createSignIn(autDdata)
    if(res.data.user === "student"){
      setStudentToken(res.data.token)
      return true
    }else if(res.data.user === "teacher"){
      setTeacherToken(res.data.token)
      return true
    }else{
      setToken(res.data.token)
      return true
    }
  }

  const signout =async ()=> {
    setToken("")
    setTeacherToken("")
    setStudentToken("")
    // setTimeout(() => history("/"), 500);
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
    <AuthContext.Provider value={{ student,teacher, loading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

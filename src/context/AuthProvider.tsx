import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { StudentInterface } from "../interface/StudentInterface"
import { TeacherInterface } from "../interface/TeacherInterface"
import { getStudent } from "../api/StudentApi"
import { getTeacher } from "../api/TeacherApi"
// import { useDispatch } from "react-redux"
// import { hideMessageDanger, showMessageDanger } from "../store/layout"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [student, setStudent] = useState<StudentInterface | null>(null)
  const [teacher, setTeacher] = useState<TeacherInterface | null>(null)
  // const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

  useEffect(() => {
    validateToken()
  }, [])

  const validateToken = async () => {
    const studentCookies = localStorage.getItem("tokenStudent")
    const teacherCookies = localStorage.getItem("tokenTeacher")

    if(studentCookies){
     await getStudent(studentCookies).then((res)=>{setStudent(res.data.student)})
    }else if(teacherCookies){
     await getTeacher(teacherCookies).then((res)=>{setTeacher(res.data.teacher)})
    }
    // setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ student,teacher, validateToken }}>
      {children}
    </AuthContext.Provider>
  )
}

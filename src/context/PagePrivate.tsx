import Login from "../pages/Login"
import ViewStudent from "../pages/ViewStudent"
import ViewTeacher from "../pages/ViewTeacher"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const studentCookies = localStorage.getItem("tokenStudent")
  const teacherCookies = localStorage.getItem("tokenTeacher")
  const usercookies = localStorage.getItem("token")

  if (!usercookies && !teacherCookies && !studentCookies) {return <Login />}
  // if(usercookies){return <Dashboard />}  
  if(teacherCookies){return <ViewTeacher />}
  if(studentCookies){return <ViewStudent />}
  return children
}

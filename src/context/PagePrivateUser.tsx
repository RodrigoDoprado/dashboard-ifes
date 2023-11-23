import Dashboard from "../pages/Dashboard"
import ViewStudent from "../pages/ViewStudent"
import ViewTeacher from "../pages/ViewTeacher"

export const PagePrivateUser = ({ children }: { children: JSX.Element }) => {
  const studentCookies = localStorage.getItem("tokenStudent")
  const teacherCookies = localStorage.getItem("tokenTeacher")
  const usercookies = localStorage.getItem("token")

  if(usercookies){return <Dashboard />}  
  if(teacherCookies){return <ViewTeacher />}
  if(studentCookies){return <ViewStudent />}
  return children
}

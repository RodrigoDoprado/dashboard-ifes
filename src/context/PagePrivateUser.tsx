import Dashboard from "../page/Dashboard"
import ViewStudent from "../page/ViewStudent"
import ViewTeacher from "../page/ViewTeacher"

export const PagePrivateUser = ({ children }: { children: JSX.Element }) => {
  const studentCookies = localStorage.getItem("tokenStudent")
  const teacherCookies = localStorage.getItem("tokenTeacher")
  const usercookies = localStorage.getItem("token")

  if(usercookies){return <Dashboard />}  
  if(teacherCookies){return <ViewTeacher />}
  if(studentCookies){return <ViewStudent />}
  return children
}

import Dashboard from "../page/Dashboard"
import Login from "../page/Login"
import ViewStudent from "../page/ViewStudent"
import ViewTeacher from "../page/ViewTeacher"

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

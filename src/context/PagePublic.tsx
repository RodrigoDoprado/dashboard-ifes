import Dashboard from "../page/Dashboard"
import ViewStudent from "../page/ViewStudent"
import ViewTeacher from "../page/ViewTeacher"

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  const studentCookies = localStorage.getItem("tokenStudent")
  const teacherCookies = localStorage.getItem("tokenTeacher")
  const usercookies = localStorage.getItem("token")
  // if (loading) {
  //   return <Loading />
  // }

  if (usercookies) {return <Dashboard />}
  if(studentCookies) {return <ViewStudent />}
  if(teacherCookies) {return <ViewTeacher />}
  return children
}

import Dashboard from "../pages/Dashboard"
import ViewStudent from "../pages/ViewStudent"
import ViewTeacher from "../pages/ViewTeacher"

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

import Login from "../page/Login"
import ViewStudent from "../page/ViewStudent"

export const PagePrivateStudent = ({ children }: { children: JSX.Element }) => {
  const studentCookies = localStorage.getItem("tokenStudent")

  if (!studentCookies) {return <Login />}
  
  if (studentCookies) {return <ViewStudent />}
  return children
}

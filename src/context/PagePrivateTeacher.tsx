import Login from "../page/Login"

export const PagePrivateTeacher = ({ children }: { children: JSX.Element }) => {
  const teacherCookies = localStorage.getItem("tokenTeacher")

  if (!teacherCookies) {return <Login />}
  return children
}

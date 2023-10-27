import Login from "../page/Login"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const usercookies = localStorage.getItem("token")

  if (!usercookies) {return <Login />}
  return children
}

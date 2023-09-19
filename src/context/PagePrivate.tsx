import Login from "../page/Login"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  // const { authenticated } = useContext(AuthContext)
  const usercookies = localStorage.getItem("token")

  // if (loading) {return <Loading />}
  if (!usercookies) {return <Login />}
  return children
}

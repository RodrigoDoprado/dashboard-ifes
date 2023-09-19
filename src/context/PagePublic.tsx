import Dashboard from "../page/Dashboard"

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  // const { authenticated } = useContext(AuthContext)
  const usercookies = localStorage.getItem("token")
  // if (loading) {
  //   return <Loading />
  // }

  if (usercookies) {return <Dashboard />}
  return children
}

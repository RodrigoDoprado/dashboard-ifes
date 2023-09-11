import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import Login from "../page/Login"

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const { authenticated } = useContext(AuthContext)

  // if (loading) {return <Loading />}
  if (!authenticated) {return <Login />}
  return children
}

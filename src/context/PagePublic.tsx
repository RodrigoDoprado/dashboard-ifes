import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import Dashboard from "../page/Dashboard"

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  const { authenticated } = useContext(AuthContext)

  // if (loading) {
  //   return <Loading />
  // }

  if (authenticated) {return <Dashboard />}
  return children
}

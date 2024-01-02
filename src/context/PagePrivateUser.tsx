import { useSelector } from "react-redux"
import Dashboard from "../pages/Dashboard"
import ViewStudent from "../pages/ViewStudent"
import ViewTeacher from "../pages/ViewTeacher"
import { RootState } from "../redux"

export const PagePrivateUser = ({ children }: { children: JSX.Element }) => {
  const {isAuthenticated,isAuthenticatedTeacher,isAuthenticatedStudent} = useSelector((state: RootState)=>state.auth)

  if(isAuthenticated){return <Dashboard />}  
  if(isAuthenticatedTeacher){return <ViewTeacher />}
  if(isAuthenticatedStudent){return <ViewStudent />}
  return children
}

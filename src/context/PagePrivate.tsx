import { useSelector } from 'react-redux'
import ViewStudent from '../pages/ViewStudent'
import ViewTeacher from '../pages/ViewTeacher'
import Login from '../pages/Login'
import { RootState } from '../redux'

export const PagePrivate = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isAuthenticatedStudent, isAuthenticatedTeacher } = useSelector(
    (state: RootState) => state.auth
  )

  if (!isAuthenticated && !isAuthenticatedStudent && !isAuthenticatedTeacher) {
    return <Login />
  }
  // if(usercookies){return (<Dashboard />)}
  if (isAuthenticatedTeacher) {
    return <ViewTeacher />
  }
  if (isAuthenticatedStudent) {
    return <ViewStudent />
  }
  return children
}

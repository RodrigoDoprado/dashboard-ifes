import { useSelector } from 'react-redux'
import Dashboard from '../pages/Dashboard'
import ViewStudent from '../pages/ViewStudent'
import ViewTeacher from '../pages/ViewTeacher'
import { RootState } from '../redux'

export const PagePublic = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isAuthenticatedStudent, isAuthenticatedTeacher } = useSelector(
    (state: RootState) => state.auth
  )
  // if (loading) {
  //   return <Loading />
  // }

  if (isAuthenticated) {
    return <Dashboard />
  }
  if (isAuthenticatedStudent) {
    return <ViewStudent />
  }
  if (isAuthenticatedTeacher) {
    return <ViewTeacher />
  }
  return children
}

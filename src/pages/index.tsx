import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Course from './Course'
import Dashboard from './Dashboard'
import Login from './Login'
import Student from './Student'
import Teacher from './Teacher'
import ViewCourse from './ViewCourse'
import ViewStudent from './ViewStudent'
import ViewTeacher from './ViewTeacher'
import { PagePrivate } from '../context/PagePrivate'
import { PagePublic } from '../context/PagePublic'
import { PagePrivateUser } from '../context/PagePrivateUser'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <PagePublic>
              <Login />
            </PagePublic>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PagePrivate>
              <Dashboard />
            </PagePrivate>
          }
        />
        <Route
          path="/alunos"
          element={
            <PagePrivate>
              <Student />
            </PagePrivate>
          }
        />
        <Route
          path="/professores"
          element={
            <PagePrivate>
              <Teacher />
            </PagePrivate>
          }
        />
        <Route
          path="/cursos"
          element={
            <PagePrivate>
              <Course />
            </PagePrivate>
          }
        />
        <Route
          path="/curso/:acronym"
          element={
            <PagePrivate>
              <ViewCourse />
            </PagePrivate>
          }
        />
        <Route
          path="/aluno"
          element={
            <PagePrivateUser>
              <ViewStudent />
            </PagePrivateUser>
          }
        />
        <Route
          path="/professor"
          element={
            <PagePrivateUser>
              <ViewTeacher />
            </PagePrivateUser>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages

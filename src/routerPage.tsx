import { Routes, Route } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import { PagePrivate } from "./context/PagePrivate"
import { PagePublic } from "./context/PagePublic"
import Course from "./page/Course"
import Student from "./page/Student"
import Teacher from "./page/Teacher"
import ViewCourse from "./page/ViewCourse"
import ViewStudent from "./page/ViewStudent"
import ViewTeacher from "./page/ViewTeacher"
import { PagePrivateUser } from "./context/PagePrivateUser"

function RouterPage (){
    return (
        <Routes>
          <Route path="*" element={<PagePublic><Login /></PagePublic>} />  
          <Route path="/" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/auth/login" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/dashboard" element={<PagePrivate><Dashboard /></PagePrivate>} />
          <Route path="/alunos" element={<PagePrivate><Student /></PagePrivate>} />
          <Route path="/aluno" element={<PagePrivateUser><ViewStudent /></PagePrivateUser>} />
          <Route path="/professores" element={<PagePrivate><Teacher /></PagePrivate>} />
          <Route path="/professor" element={<PagePrivateUser><ViewTeacher /></PagePrivateUser>} />
          <Route path="/cursos" element={<PagePrivate><Course /></PagePrivate>} />
          <Route path="/curso/:acronym" element={<PagePrivate><ViewCourse /></PagePrivate>} />
        </Routes>
      )
}

export default RouterPage
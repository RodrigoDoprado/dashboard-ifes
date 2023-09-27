import { Routes, Route } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import { PagePrivate } from "./context/PagePrivate"
import { PagePublic } from "./context/PagePublic"
import Student from "./page/Student"
import Teacher from "./page/Teacher"
import Course from "./page/Course"
import ViewCourse from "./page/ViewCourse"
import ViewStudent from "./page/ViewStudent"
import ViewTeacher from "./page/ViewTeacher"
import Subject from "./page/Subject"

function RouterPage (){
    return (
        <Routes>
          <Route path="*" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/auth/login" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/dashboard" element={<PagePrivate><Dashboard /></PagePrivate>} />
          <Route path="/alunos" element={<PagePrivate><Student /></PagePrivate>} />
          <Route path="/aluno/:enroll" element={<PagePrivate><ViewStudent /></PagePrivate>} />
          <Route path="/professores" element={<PagePrivate><Teacher /></PagePrivate>} />
          <Route path="/professor/:enroll" element={<PagePrivate><ViewTeacher /></PagePrivate>} />
          <Route path="/cursos" element={<PagePrivate><Course /></PagePrivate>} />
          <Route path="/curso/:acronym" element={<PagePrivate><ViewCourse /></PagePrivate>} />
          <Route path="/materias" element={<PagePrivate><Subject /></PagePrivate>} />
        </Routes>
      )
}

export default RouterPage
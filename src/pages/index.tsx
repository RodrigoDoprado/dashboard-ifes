import { Routes, Route } from "react-router-dom";
import { PagePrivate } from "../context/PagePrivate";
import { PagePrivateUser } from "../context/PagePrivateUser";
import { PagePublic } from "../context/PagePublic";
import Course from "./Course";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Student from "./Student";
import Teacher from "./Teacher";
import ViewCourse from "./ViewCourse";
import ViewStudent from "./ViewStudent";
import ViewTeacher from "./ViewTeacher";


export default ()=>(
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


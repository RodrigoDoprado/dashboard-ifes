import { Routes, Route } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import { PagePrivate } from "./context/PagePrivate"
import { PagePublic } from "./context/PagePublic"
import Student from "./page/Student"

function RouterPage (){
    return (
        <Routes>
          <Route path="*" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/auth/login" element={<PagePublic><Login /></PagePublic>} />
          <Route path="/dashboard" element={<PagePrivate><Dashboard /></PagePrivate>} />
          <Route path="/aluno" element={<PagePrivate><Student /></PagePrivate>} />
        </Routes>
      )
}

export default RouterPage
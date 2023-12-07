import { Routes, Route, BrowserRouter } from "react-router-dom";
import Course from "./Course";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Student from "./Student";
import Teacher from "./Teacher";
import ViewCourse from "./ViewCourse";
import ViewStudent from "./ViewStudent";
import ViewTeacher from "./ViewTeacher";
import { useSelector } from "react-redux";
import { RootState } from "../store";

// function privateRoute({component:Component, ...rest}) {
//   return(
//     <Route {...rest} render={props =>(
//       false ? (<Component {...props}/>):(<Redirect to={{pathname:"/",state:{from: props.location}}}/>)
//     )}/>
//   )
// }

const Pages=()=>{
  const isAuthenticated = useSelector((state:RootState)=>state.auth)
  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />  
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alunos" element={<Student />} />
            <Route path="/professores" element={<Teacher />} />
            <Route path="/cursos" element={<Course />} />
            <Route path="/curso/:acronym" element={<ViewCourse />} />
          </>
        )}

        <Route path="/aluno" element={<ViewStudent />} />
        <Route path="/professor" element={<ViewTeacher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages


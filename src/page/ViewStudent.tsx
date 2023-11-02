import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom";
import { useGetStudent } from "../hooks/student/useGetStudent";
import NavbarStudentComponet from "../componets/NavbarStudentComponet";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 

function ViewStudent(){
    const {enroll}  = useParams();
    const {student}=useGetStudent(enroll)
    const {signout}=useContext(AuthContext)
    
    if(student === null){
        window.location.href = window.location.href
        signout()
    }
    
    return(
        <>
            <Helmet><title>{student?.firstName+" "+student?.lastName}</title></Helmet>
            <NavbarStudentComponet/>
            <h1>{student?.firstName+" "+student?.lastName}</h1>
            <img src={student?.avatar} alt={student?.firstName+" "+student?.lastName}/>
            <h1>Matricula: {student?.enroll}</h1>
            <h1>Curso: {student?.course?.title}</h1>
        </>
    )
}
export default ViewStudent
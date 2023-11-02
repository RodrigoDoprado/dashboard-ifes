import { Helmet } from "react-helmet"
import NavbarStudentComponet from "../componets/NavbarStudentComponet";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useGetTeacher } from "../hooks/teacher/useGetTeacher";

function ViewTeacher(){ 
    const {enroll}  = useParams();
    const {teacher}=useGetTeacher(enroll)
    const {signout}=useContext(AuthContext)
    
    if(teacher === null){
        window.location.href = window.location.href
        signout()
    }
    
    return(
        <>
            <Helmet><title>{teacher?.firstName+" "+teacher?.lastName}</title></Helmet>
            <NavbarStudentComponet/>
            <h1>{teacher?.firstName+" "+teacher?.lastName}</h1>
            <img src={teacher?.avatar} alt={teacher?.firstName+" "+teacher?.lastName}/>
            <h1>Matricula: {teacher?.enroll}</h1>
            <h1>Curso: {teacher?.course?.acronym}</h1>
        </>
    )
}
export default ViewTeacher
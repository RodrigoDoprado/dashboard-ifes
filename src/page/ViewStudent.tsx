import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import { useParams } from "react-router-dom";
import { useGetStudent } from "../hooks/student/useGetStudent";

function ViewStudent(){
    const {enroll}  = useParams();
    const {student}=useGetStudent(enroll)
   
    return(
        <>
            <Helmet><title>Aluno</title></Helmet>
            <NavbarComponet/>
            <h1>{student?.firstName+" "+student?.lastName}</h1>
            <img src={student?.avatar} alt={student?.firstName+" "+student?.lastName}/>
            <h1>Matricula: {student?.enroll}</h1>
            <h1>Curso: {student?.course.title}</h1>
        </>
    )
}
export default ViewStudent
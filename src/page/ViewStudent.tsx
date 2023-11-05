import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom";
import NavbarStudentComponet from "../componets/NavbarStudentComponet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext"; 
import { StudentInterface } from "../interface/StudentInterface";
import { getStudent } from "../api/StudentApi";

function ViewStudent(){
    const [student, setStudent] = useState<StudentInterface>();
    const {enroll}  = useParams();
    const {signout}=useContext(AuthContext)

    useEffect(() => {
        getByStudent().catch(()=>{signout()})
      }, []);
    
      const getByStudent = async () => {
        const response = await getStudent(enroll)
        if (response.status === 200) {
            setStudent(response.data);
        }
      };
    
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
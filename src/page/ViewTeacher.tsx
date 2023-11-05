import { Helmet } from "react-helmet"
import NavbarStudentComponet from "../componets/NavbarStudentComponet";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTeacher } from "../api/TeacherApi";
import { TeacherInterface } from "../interface/TeacherInterface";

function ViewTeacher(){ 
    const [teacher, setTeacher] = useState<TeacherInterface>();
    const {enroll}  = useParams();
    const {signout}=useContext(AuthContext)
    
    useEffect(() => {
        getByTeacher().catch(()=>{signout()})
      }, []);
    
      const getByTeacher = async () => {
        const response = await getTeacher(enroll)
        if (response.status === 200) {
            setTeacher(response.data);
        }
      };
    
    return(
        <>
            <Helmet><title>{teacher?.firstName+" "+teacher?.lastName}</title></Helmet>
            <NavbarStudentComponet/>
            <h1>{teacher?.firstName+" "+teacher?.lastName}</h1>
            <img src={teacher?.avatar} alt={teacher?.firstName+" "+teacher?.lastName}/>
            <h1>Matricula: {teacher?.enroll}</h1>
        </>
    )
}
export default ViewTeacher
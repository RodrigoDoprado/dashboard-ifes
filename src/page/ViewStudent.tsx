import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import { useParams } from "react-router-dom";
import { useGetStudent } from "../hooks/student/useGetStudent";

function ViewStudent(){
    const { studentId } = useParams();
    const {student}=useGetStudent(studentId)
   
    return(
        <>
            <Helmet><title>Aluno</title></Helmet>
            <NavbarComponet/>
            <h1>Pagina do visão dos dados do Aluno</h1>
            {student?.map((item: { firstName: string }) => {
                return(
                    <>
                        <h1>{item.firstName}</h1>
                    </>
                )
            })}
        </>
    )
}
export default ViewStudent
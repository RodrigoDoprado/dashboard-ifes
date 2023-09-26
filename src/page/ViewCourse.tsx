import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"

function ViewCourse(){
    return(
        <>
            <Helmet><title>Cursos</title></Helmet>
            <NavbarComponet/>
            <h1>Pagina do visão dos dados do Curso</h1>
        </>
    )
}
export default ViewCourse
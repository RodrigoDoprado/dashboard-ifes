import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"

function ViewTeacher(){
    return(
        <>
            <Helmet><title>Professor</title></Helmet>
            <NavbarComponet/>
            <h1>Pagina do visão dos dados do Professor</h1>
        </>
    )
}
export default ViewTeacher
import { Helmet } from "react-helmet"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 
import NavbarComponet from "../componets/NavbarComponet";
import NavSidebarStudent from "../componets/NavSidebarStudent";

function ViewStudent(){
    const {student}=useContext(AuthContext)
    
    return(
        <>
            <Helmet><title>{student?.firstName+" "+student?.lastName}</title></Helmet>
            <NavbarComponet/>
            <div id="layoutSidenav">
                <NavSidebarStudent/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4 px-lg-5 mt-5">
                            <h1>{student?.firstName+" "+student?.lastName}</h1>
                            <img
                                className="rounded-circle" 
                                src={student?.avatar} 
                                alt={student?.firstName+" "+student?.lastName} 
                                style={{width:"200px", height:"200px"}}
                            />
                            <h1>Matricula: {student?.enroll}</h1>
                            <h1>Curso: {student?.course?.title}</h1>
                        </div>
                    </main>
                </div>
            </div>        
        </>
    )
}
export default ViewStudent
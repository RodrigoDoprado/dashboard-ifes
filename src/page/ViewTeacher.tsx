import { Helmet } from "react-helmet"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavbarComponet from "../componets/NavbarComponet";
import NavSidebarTeacher from "../componets/NavSidebarTeacher";

function ViewTeacher(){ 
    const {teacher}=useContext(AuthContext)
    
    return(
        <>
            <Helmet><title>{teacher?.firstName+" "+teacher?.lastName}</title></Helmet>
            <NavbarComponet/>
            <div id="layoutSidenav">
                <NavSidebarTeacher/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1>{teacher?.firstName+" "+teacher?.lastName}</h1>
                            <img
                                className="rounded-circle" 
                                src={teacher?.avatar} 
                                alt={teacher?.firstName+" "+teacher?.lastName} 
                                style={{width:"200px", height:"200px"}}
                            />
                            <h1>Matricula: {teacher?.enroll}</h1>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default ViewTeacher
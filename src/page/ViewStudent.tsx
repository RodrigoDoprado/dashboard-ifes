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
                    <section>
                        <div class="container px-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6">
                                    <div class="p-5"><img class="img-fluid rounded-circle" src={student?.avatar} alt={student?.firstName+" "+student?.lastName} /></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <h2 class="display-4">{student?.firstName+" "+student?.lastName}</h2>
                                        <p>Matricula: {student?.enroll}</p>
                                        <p>Curso: {student?.course?.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>        
        </>
    )
}
export default ViewStudent
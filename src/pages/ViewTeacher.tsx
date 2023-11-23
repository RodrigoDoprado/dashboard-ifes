import { Helmet } from "react-helmet"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavbarComponet from "../components/NavbarComponet";
import NavSidebarTeacher from "../components/NavSidebarTeacher";

function ViewTeacher(){ 
    const {teacher}=useContext(AuthContext)
    
    return(
        <>
            <Helmet><title>{teacher?.firstName+" "+teacher?.lastName}</title></Helmet>
            <NavbarComponet/> 
            <div id="layoutSidenav">
                <NavSidebarTeacher/>
                <div id="layoutSidenav_content">
                    <section>
                        <div className="container px-5">
                            <div className="row gx-5 row-cols-1 align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5"><img className="img-fluid rounded-circle" src={teacher?.avatar} alt={teacher?.firstName+" "+teacher?.lastName} /></div>
                            </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <h2 className="display-4">{teacher?.firstName+" "+teacher?.lastName}</h2>
                                        <p>Matricula: {teacher?.enroll}</p>
                                        {/* <p>Curso: {teacher?.course?.title}</p> */}
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
export default ViewTeacher
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
                        <div className="container px-5">
                            <div className="row gx-5 row-cols-2 align-items-center">
                            <div className="col-sm-6">
                                <div className="p-5"><img className="img-fluid rounded-circle" src={student?.avatar} alt={student?.firstName+" "+student?.lastName} /></div>
                            </div>
                                <div className="col-sm-6">
                                    <div className="p-5">
                                        <h2 className="display-4">{student?.firstName+" "+student?.lastName}</h2>
                                        <p>Matricula: {student?.enroll}</p>
                                        <p>Curso: {student?.course?.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Let there be rock!</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
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
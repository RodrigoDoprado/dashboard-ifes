import { faBook, faChalkboardUser, faClock, faGraduationCap, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalComponet from "./ModalComponet"

function NavSidebarStudent(){
    return(
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav mt-5">
                        <a className="nav-link" href="/dashboard">
                            <FontAwesomeIcon className='px-2' icon={faHouse} size="lg" />Dashboard
                        </a>
                        <ModalComponet/>
                        <a className="nav-link collapsed mt-4" href="#" data-bs-toggle="collapse" data-bs-target="#courseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <FontAwesomeIcon className='px-2' icon={faBook} size="lg" />Diário
                        </a>
                        <div className="collapse" id="courseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                            <a className="nav-link" href="/cursos">Home</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed mt-4" href="#" data-bs-toggle="collapse" data-bs-target="#teacherLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="lg" />Grade Curicular
                        </a>
                        <div className="collapse" id="teacherLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/professores">Home</a>
                            </nav>
                        </div>    
                    </div>
                </div>
                {/* <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div> */}
            </nav>
        </div>
    )
}
export default NavSidebarStudent
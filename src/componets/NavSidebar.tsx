import { faBook, faChalkboardUser, faGraduationCap, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NavSidebar(){
    return(
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav mt-5">
                        <a className="nav-link" href="/dashboard">
                            <div className="sb-nav-link-icon"></div>
                            <FontAwesomeIcon className='px-2' icon={faHouse} size="lg" />Dashboard
                        </a>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#studentLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <FontAwesomeIcon className='px-2' icon={faGraduationCap} size="lg" />Alunos
                            {/* <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div> */}
                        </a>
                        <div className="collapse" id="studentLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/alunos">Página Inicial</a>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#teacherLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="lg" />Professores
                            {/* <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div> */}
                        </a>
                        <div className="collapse" id="teacherLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="/professores">Página Inicial</a>
                                {/* <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a> */}
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#courseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <FontAwesomeIcon className='px-2' icon={faBook} size="lg" />Cursos
                            {/* <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div> */}
                        </a>
                        <div className="collapse" id="courseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                            <a className="nav-link" href="/cursos">Página Inicial</a>
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
export default NavSidebar
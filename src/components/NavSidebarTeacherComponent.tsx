import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalComponet from './ModalComponent'

function NavSidebarTeacherComponent() {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav mt-5">
            <a className="nav-link sb-sidenav-menu-heading" href="/dashboard">
              <FontAwesomeIcon className="px-2" icon={faHouse} size="lg" />
              Dashboard
            </a>
            <ModalComponet />
            <a
              className="nav-link mt-4 sb-sidenav-menu-heading"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#courseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <FontAwesomeIcon className="px-2" icon={faBook} size="lg" />
              Diário
            </a>
            {/* <div className="collapse" id="courseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                            <a className="nav-link" href="/cursos">Home</a>
                            </nav>
                        </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavSidebarTeacherComponent

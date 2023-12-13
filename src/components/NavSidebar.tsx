import {
  faBook,
  faChalkboardUser,
  faGraduationCap,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavSidebar() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav mt-5">
            <a className="nav-link" href="/dashboard">
              <FontAwesomeIcon className="px-2" icon={faHouse} size="lg" />
              Dashboard
            </a>
            <a className="nav-link collapsed mt-4" href="/alunos">
              <FontAwesomeIcon
                className="px-2"
                icon={faGraduationCap}
                size="lg"
              />
              Alunos
            </a>
            <a className="nav-link collapsed mt-4" href="/professores">
              <FontAwesomeIcon
                className="px-2"
                icon={faChalkboardUser}
                size="lg"
              />
              Professores
            </a>
            <a className="nav-link collapsed mt-4" href="/cursos">
              <FontAwesomeIcon className="px-2" icon={faBook} size="lg" />
              Cursos
            </a>
          </div>
        </div>
        {/* <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div> */}
      </nav>
    </div>
  );
}
export default NavSidebar;

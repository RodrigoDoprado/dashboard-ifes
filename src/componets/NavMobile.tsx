import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGraduationCap, faChalkboardUser, faBook, faX, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

function NavMobile() {

  const {signout}=useContext(AuthContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout =async ()=>signout()

  return (
    <>
      <Button variant="primary" className="navbar-toggler" onClick={handleShow}>
        <span className="navbar-toggler-icon"></span>
      </Button>
      
      <Offcanvas show={show} onHide={handleClose} className="bg-primary">
        <nav className="navbar-dark my-5">
          <div className="container">
            <Offcanvas.Header>
              <Offcanvas.Title>
                <a className="navbar-brand d-inline-flex gap-1" href="/dashboard">
                  <img src="../../assets/ifes.png" style={{width:"45px", height:"45px"}}/>
                  <h5 className="mt-2">IFES</h5>
                </a>
              </Offcanvas.Title>
              <FontAwesomeIcon icon={faX} className='text-light' onClick={handleClose} style={{fontSize:"1.8em",cursor: "pointer"}}/>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav me-auto">
                <li className="nav-item my-2">
                  <a className="nav-link active fw-bolder" aria-current="page" href="/dashboard"><FontAwesomeIcon className='px-2' icon={faHouse} size="lg" />Dashboard</a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-link fw-bolder" href="/alunos"><FontAwesomeIcon className='px-2' icon={faGraduationCap} size="lg" />Alunos</a> 
                </li>
                <li className="nav-item my-2">
                  <a className="nav-link fw-bolder" href="/professores"><FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="lg" />Professores</a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-link fw-bolder" href="/cursos"><FontAwesomeIcon className='px-2' icon={faBook} size="lg" />Cursos</a>
                </li>
              </ul>
              <ul className="navbar-nav me-auto my-2 px-2" >
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faUser} size="lg"/>&nbsp; &nbsp;User
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item fw-bolder" href="#"><FontAwesomeIcon className='px-2' icon={faUser} size="sm" />Meus Dados</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item fw-bolder" href="/" onClick={logout}><FontAwesomeIcon className='px-2' icon={faRightFromBracket} size="sm" />Sair</a></li>
                  </ul>
                </li>
            </ul>
            </Offcanvas.Body>
          </div>
        </nav>
      </Offcanvas>
    </>
  );
}

export default NavMobile;
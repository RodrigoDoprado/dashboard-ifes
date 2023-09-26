import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../context/AuthContext';

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
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <a className="navbar-brand d-inline-flex gap-1" href="/dashboard">
                  <img src="../../assets/ifes.png" style={{width:"45px", height:"45px"}}/>
                  <h5 className="mt-2">IFES</h5>
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item my-3">
                  <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="/alunos">Alunos</a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="/professores">Professores</a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="/cursos">Cursos</a>
                </li>
              </ul>
              <ul className="navbar-nav gap-5 py-lg-2 px-lg-5" >
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/" onClick={logout}>Sair</a></li>
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
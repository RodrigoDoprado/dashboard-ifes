import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import NavMobile from "./NavMobile"

function NavbarComponet(){
  const {signout}=useContext(AuthContext)
  const logout =async ()=>{
     signout()
  }
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-inline-flex gap-1" href="/dashboard">
            <img src="../assets/ifes.png" style={{width:"45px", height:"45px"}}/>
            <h5 className="mt-2">IFES</h5>
          </a>
          <div><NavMobile/></div>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-lg-5">
              <li className="nav-item px-lg-2 fw-bolder">
                <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
              </li>
              <li className="nav-item px-lg-2 fw-bolder">
                <a className="nav-link" href="/alunos">Alunos</a>
              </li>
              <li className="nav-item px-lg-2 fw-bolder">
                <a className="nav-link" href="/professores">Professores</a>
              </li>
              <li className="nav-item px-lg-2 fw-bolder">
                <a className="nav-link" href="/cursos">Cursos</a>
              </li>
              <li className="nav-item px-lg-2 fw-bolder">
                <a className="nav-link" href="/materias">Matérias</a>
              </li>
            </ul>
            <ul className="navbar-nav px-lg-5 col-sm-2" >
              <li className="nav-item dropdown fw-bolder">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Meus Dados</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/" onClick={logout}>Sair</a></li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavbarComponet
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { faBars, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NavbarComponet(){
  const {signout}=useContext(AuthContext)
  const logout = ()=>{signout()}
  const navigation = ()=>{
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            // localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

  }
    return(
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="btn btn-link btn-lg d-none d-sm-block d-md-none" id="sidebarToggle" onClick={navigation}><FontAwesomeIcon icon={faBars} style={{color: "#f7f7f7"}} /></a>
           <a className="navbar-brand d-inline-flex gap-1" href="/">
             <img src="../assets/ifes.png" style={{width:"45px", height:"45px"}}/>
             <h5 className="mt-2">IFES</h5>
           </a>
             <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    {/* <button className="btn btn-outline-light" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button> */}
                </div>
            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faUser} size="lg"/></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#"><FontAwesomeIcon className='px-2' icon={faUser} size="sm" />Meus Dados</a></li>
                    <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/" onClick={logout}><FontAwesomeIcon className='px-2' icon={faRightFromBracket} size="xs" />Sair</a></li>
                    </ul>
                </li>
            </ul>
          </div>
        </nav>
    )
}
export default NavbarComponet
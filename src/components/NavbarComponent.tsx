import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { faBars, faMagnifyingGlass, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalStudentComponet from "./ModalStudentComponet"
import ModalTeacherComponet from "./ModalTeacherComponet"


function NavbarComponent(){
  const {signout,student,teacher}=useContext(AuthContext)
  const logout = ()=>{
    if (window.confirm("Deseja Sair?")) {
      signout()
    }
  }
  const usercookies = localStorage.getItem("token")

  useEffect(() => {
    return () => {
      document.body.classList.remove('sb-sidenav-toggled');
    };
  }, []);

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
          <button className="btn btn-link btn-lg  order-0 me-4 me-lg-0" id="sidebarToggle" onClick={navigation}><FontAwesomeIcon icon={faBars} size="xl" style={{color: "#f7f7f7"}} /></button>
           <div className="px-lg-4">
              <a className="navbar-brand d-flex align-items-center gap-1" href="/">
                <img src="../assets/ifes.png" style={{width:"40px", height:"40px"}}/>
                <h5 className="mt-2">IFES</h5>
              </a>
            </div>
             <form className="d-none d-md-inline-block  ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Busca..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-outline-secondary px-3 text-light" type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {usercookies?
                      <FontAwesomeIcon icon={faUser} size="lg" />:<></>
                    }
                    {student?
                      <img
                        className="rounded-circle" 
                        src={student?.avatar} 
                        alt={student?.firstName+" "+student?.lastName} 
                        style={{width:"40px", height:"40px"}}
                      />:<></>
                    }
                    {teacher?
                      <img
                        className="rounded-circle" 
                        src={teacher?.avatar} 
                        alt={teacher?.firstName+" "+teacher?.lastName} 
                        style={{width:"45px", height:"45px"}}
                      />
                      :<></>
                    }
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"> 
                      {usercookies?<></>:
                        <>
                          <li>
                            {student?
                              <ModalStudentComponet 
                                idInteface={student?.id}
                                firstNameInteface={student?.firstName}
                                lastNameInteface={student?.lastName}
                                avatarInteface={student?.avatar} 
                                courseTitleInteface={student.course?.title} 
                                courseIdInteface={student.course?.id}                              
                              />:<></>
                            }
                            {teacher?
                              <ModalTeacherComponet 
                                idInteface={teacher?.id} 
                                firstNameInteface={teacher?.firstName} 
                                lastNameInteface={teacher?.lastName} 
                                avatarInteface={teacher?.avatar}
                              />:<></>
                            }
                          </li>
                          <li><hr className="dropdown-divider"/></li>
                        </>
                      }
                      <li><a className="dropdown-item" href="/" onClick={logout}>
                        <FontAwesomeIcon className='px-2' icon={faRightFromBracket} size="xs" />
                        Sair
                      </a></li>
                    </ul>
                </li>
            </ul>
          </div>
        </nav>
    )
}
export default NavbarComponent
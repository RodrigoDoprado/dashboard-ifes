/* eslint-disable no-self-assign */
import { useEffect } from 'react';
import {
  faBars,
  faMagnifyingGlass,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import LogoutService from '../../api/AuthApi';
import './Navbar.css';

function NavbarComponent() {
  const usercookies = localStorage.getItem('token');
  const dispatch = useDispatch();
  // const {student,teacher}=useContext(AuthContext)

  const logout = () => {
    if (window.confirm('Deseja Sair?')) {
      dispatch(LogoutService());
    } else {
      window.location.href = window.location.href;
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('sb-sidenav-toggled');
    };
  }, []);

  const navigation = () => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        // localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
    }
  };
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <button
          className="btn btn-link btn-lg"
          id="sidebarToggle"
          onClick={navigation}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: '#f7f7f7' }}
          />
        </button>
        <a className="navbar-brand d-flex gap-1" href="/">
          <img
            src="../assets/ifes.png"
            style={{ width: '40px', height: '40px' }}
          />
          <h5 className="mt-2">IFES</h5>
        </a>
        {/* {usercookies? */}
        <form className="d-none d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Busca..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-outline-secondary px-3 text-light"
              type="button"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
        {/* :<></>}    */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {usercookies ? (
                <FontAwesomeIcon icon={faUser} size="lg" />
              ) : (
                <></>
              )}
              {/* {student?
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
                  } */}
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              {usercookies ? (
                <></>
              ) : (
                <>
                  {/* <li>
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
                        </li> */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </>
              )}
              <li>
                <a className="dropdown-item" href="/" onClick={logout}>
                  <FontAwesomeIcon
                    className="px-2"
                    icon={faRightFromBracket}
                    size="xs"
                  />
                  Sair
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavbarComponent;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Helmet } from 'react-helmet'
import NavSidebarTeacher from '../components/NavSidebarTeacherComponent'
import NavbarComponent from '../components/NavbarComponent'
import AlertComponent from '../components/AlertComponent'
import FooterComponent from '../components/FooterComponent'

function ViewTeacher() {
  // const { teacher } = useContext(AuthContext);

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>{/* <title>{teacher?.firstName + " " + teacher?.lastName}</title> */}</Helmet>

      <NavbarComponent />

      <div id="layoutSidenav">
        <NavSidebarTeacher />
        <div id="layoutSidenav_content">
          <section>
            <div className="container-fluid px-4 px-lg-5 mt-5">
              <AlertComponent />
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      {/* <img
                        src={teacher?.avatar}
                        alt={teacher?.firstName + " " + teacher?.lastName}
                        className="card-img-top rounded-circle img-thumbnail"
                        style={{width:"9em", height:"9em"}}
                      />
                      <h5 className="card-title">{teacher?.firstName + " " + teacher?.lastName}</h5>
                      <p className="card-text">Matrícula: {teacher?.enroll}</p> */}
                    </div>
                    <div className="card-body">
                      {/* <p className="card-text">Curso: {teacher?.course?.title}</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Sobre</h5>
                      <p className="card-text">Aqui pode ir uma breve biografia do professor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default ViewTeacher

import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavSidebarTeacher from "../components/NavSidebarTeacher";
import NavbarComponent from "../components/NavbarComponent";

function ViewTeacher() {
  const { teacher } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>{teacher?.firstName + " " + teacher?.lastName}</title>
      </Helmet>

      <NavbarComponent />

      <div id="layoutSidenav">
        <NavSidebarTeacher />
        <div id="layoutSidenav_content">
          <section>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="card">
                    <img
                      src={teacher?.avatar}
                      alt={teacher?.firstName + " " + teacher?.lastName}
                      className="card-img-top rounded-circle"
                      style={{width:"15em", height:"15em"}}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{teacher?.firstName + " " + teacher?.lastName}</h5>
                      <p className="card-text">Matrícula: {teacher?.enroll}</p>
                      {/* <p className="card-text">Curso: {teacher?.course?.title}</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Sobre</h5>
                      <p className="card-text">
                        Aqui pode ir uma breve biografia do professor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ViewTeacher;

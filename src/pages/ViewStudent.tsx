import { useContext } from "react";
import { Helmet } from "react-helmet";
import NavSidebarStudent from "../components/NavSidebarStudent";
import NavbarComponet from "../components/NavbarComponent";
import { AuthContext } from "../context/AuthContext";
import AlertComponent from "../components/AlertComponent";

function ViewStudent() {
  const { student } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>{student?.firstName + ' ' + student?.lastName}</title>
      </Helmet>

      <NavbarComponet />

      <div id="layoutSidenav">
        <NavSidebarStudent />
        <div id="layoutSidenav_content">
        <section>
            <div className="container">
            <AlertComponent/>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="card">
                    <img
                      src={student?.avatar}
                      alt={student?.firstName + " " + student?.lastName}
                      className="card-img-top rounded-circle"
                      style={{width:"15em", height:"15em"}}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{student?.firstName + " " + student?.lastName}</h5>
                      <p className="card-text">Matrícula: {student?.enroll}</p>
                      <p className="card-text">Curso: {student?.course?.title}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Sobre</h5>
                      <p className="card-text">
                        Aqui pode ir uma breve biografia do Aluno.
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

export default ViewStudent;

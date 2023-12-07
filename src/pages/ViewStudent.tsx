import { useContext } from "react";
import { Helmet } from "react-helmet";
import NavSidebarStudent from "../components/NavSidebarStudentComponent";
import NavbarComponet from "../components/NavbarComponent";
import AlertComponent from "../components/AlertComponent";

function ViewStudent() {
  // const { student } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        {/* <title>{student?.firstName + ' ' + student?.lastName}</title> */}
      </Helmet>

      <NavbarComponet />

      <div id="layoutSidenav">
        <NavSidebarStudent />
        <div id="layoutSidenav_content">
        <section>
            <div className="container-fluid px-4 px-lg-5 mt-5">
            <AlertComponent/>
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      {/* <img
                        src={student?.avatar}
                        alt={student?.firstName + " " + student?.lastName}
                        className="card-img-top rounded-circle img-thumbnail"
                        style={{width:"9em", height:"9em"}}
                      />
                      <h5 className="card-title">{student?.firstName + " " + student?.lastName}</h5>
                      <p className="card-text">Matrícula: {student?.enroll}</p>
                    </div> 
                    <div className="card-body">
                      <p className="card-text">Curso: {student?.course?.title}</p> */}
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

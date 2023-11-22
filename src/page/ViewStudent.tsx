import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import NavbarComponet from '../components/NavbarComponet';
import NavSidebarStudent from '../components/NavSidebarStudent';

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
              <div className="row">
                <div className="col-md-6">
                  <div className="card student-profile-card">
                    <img
                      src={student?.avatar}
                      alt={student?.firstName + ' ' + student?.lastName}
                      className="card-img-top rounded-circle student-profile-image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{student?.firstName + ' ' + student?.lastName}</h5>
                      <p className="card-text">Matricula: {student?.enroll}</p>
                      <p className="card-text">Curso: {student?.course?.title}</p>
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

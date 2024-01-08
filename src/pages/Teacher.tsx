/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Helmet } from 'react-helmet'
import NavbarComponet from '../components/nbComponent'
import ModalTeacherComponet from '../components/ModalTeacherComponent'
import { useEffect, useState } from 'react'
import { faChalkboardUser, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTeacher, getTeachers } from '../api/TeacherApi'
import { TeacherInterface } from '../interface/TeacherInterface'
import NavSidebar from '../components/NavSidebar'
import FooterComponent from '../components/ftComponent'

function Teacher() {
  const [teachers, setTeachers] = useState<TeacherInterface[]>([])
  const [search] = useState('')

  useEffect(() => {
    getAllTeacher()
  }, [])

  const getAllTeacher = async () => {
    const response = await getTeachers()
    if (response.status === 200) {
      setTeachers(response.data)
    }
  }

  const handledeleteTeacher = async (id: string | undefined) => {
    if (window.confirm('Deseja Excluir o Professor?')) {
      const response = await deleteTeacher(id)
      if (response.status === 200) {
        // toast.success(response.data);
        getAllTeacher()
      }
    }
  }

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Professor</title>
      </Helmet>
      <NavbarComponet />
      <div id="layoutSidenav">
        <NavSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4 px-lg-5 mt-5">
              <div className="d-flex justify-content-between mb-5">
                <h1>
                  <FontAwesomeIcon className="px-2" icon={faChalkboardUser} size="sm" />
                  Professores
                </h1>
                <ModalTeacherComponet />
              </div>
              <div className="row my-5">
                <div className="col-sm">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">Matricula</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teachers
                          ?.filter((student) =>
                            student.firstName?.toLocaleLowerCase().includes(search)
                          )
                          .map((item, index) => {
                            return (
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <img
                                    src={item.avatar}
                                    alt={item.firstName + ' ' + item.lastName}
                                    className="card-img-top rounded-circle"
                                    style={{ width: '3em', height: '3em' }}
                                  />
                                </td>
                                <td>{item.enroll}</td>
                                <td>{item.firstName + ' ' + item.lastName}</td>
                                <td>
                                  <div className="gap-1 d-flex">
                                    <ModalTeacherComponet
                                      idInteface={item.id}
                                      firstNameInteface={item.firstName}
                                      lastNameInteface={item.lastName}
                                      avatarInteface={item.avatar}
                                    />
                                    <button
                                      className="btn btn-outline-danger"
                                      onClick={() => handledeleteTeacher(item.id)}
                                    >
                                      <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterComponent />
        </div>
      </div>
    </>
  )
}
export default Teacher

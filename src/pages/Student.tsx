/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Helmet } from 'react-helmet'
import NavbarComponet from '../components/navbarComponent'
import ModalStudentComponet from '../components/ModalStudentComponet'
import { useEffect, useState } from 'react'
import { faGraduationCap, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavSidebar from '../components/NavSidebar'
import { useGetAllStudent } from '../hooks/student/useGetAllStudent'
import { useDeleteStudent } from '../hooks/student/useDeleteStudent'
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/ducks/layout'
import FooterComponent from '../components/FooterComponent'

function Student() {
  const [search] = useState('')
  const { students } = useGetAllStudent()
  const deleteStudent = useDeleteStudent()
  const dispatch = useDispatch()

  const handledeleteStudent = async (id: string | undefined) => {
    if (window.confirm('Deseja Excluir o Aluno?')) {
      deleteStudent.mutate(id)
    }
  }

  useEffect(() => {
    if (!deleteStudent.isSuccess) return
    handleClose()
    dispatch(addMessage("Já registrado com Sucesso"))
  }, [deleteStudent.isSuccess])

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Alunos</title>
      </Helmet>
      <NavbarComponet />
      <div id="layoutSidenav">
        <NavSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4 px-lg-5 mt-5">
              <div className="d-flex justify-content-between mb-5">
                <h1>
                  <FontAwesomeIcon className="px-2" icon={faGraduationCap} size="sm" />
                  Alunos
                </h1>
                <ModalStudentComponet />
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
                          <th scope="col">Curso</th>
                          <th scope="col">Turno</th>
                          <th scope="col">Status</th>
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students
                          ?.filter((student) => student.firstName?.toLowerCase().includes(search))
                          .map((item, index) => {
                            return (
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <img
                                    src={item.avatar}
                                    alt={item.firstName + '' + item.lastName}
                                    className="card-img-top rounded-circle"
                                    style={{ width: '3em', height: '3em' }}
                                  />
                                </td>
                                <td>{item.enroll}</td>
                                <td>{item.firstName + ' ' + item.lastName}</td>
                                <td>{item.course?.acronym}</td>
                                <td>Matutino</td>
                                <td>Cursando</td>
                                <td>
                                  <div className="gap-1 d-flex">
                                    <ModalStudentComponet
                                      idInteface={item.id}
                                      firstNameInteface={item.firstName}
                                      lastNameInteface={item.lastName}
                                      avatarInteface={item.avatar}
                                      courseTitleInteface={item.course?.title}
                                      courseIdInteface={item.course?.id}
                                    />
                                    <button
                                      className="btn btn-outline-danger"
                                      onClick={() => handledeleteStudent(item.id)}
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
export default Student
function handleClose() {
  throw new Error('Function not implemented.')
}

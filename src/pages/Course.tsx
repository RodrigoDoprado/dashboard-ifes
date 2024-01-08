/* eslint-disable @typescript-eslint/ban-ts-comment */
import ModalCourseComponet from '../components/ModalCourseComponet'
import { useState } from 'react'
import { faBook, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarComponet from '../components/nbComponent'
import { Helmet } from 'react-helmet'
import { deleteCourse } from '../api/CourseApi'
import NavSidebar from '../components/NavSidebar'
import { useGetAllCourse } from '../hooks/course/useGetAllCourse'
import FooterComponent from '../components/FooterComponent'

function Course() {
  const [search] = useState('')
  const { courses } = useGetAllCourse()

  const handledeleteCourse = async (id: string | undefined) => {
    if (window.confirm('Deseja Excluir o Curso?')) {
      const response = await deleteCourse(id)
      if (response.status === 200) {
        // toast.success(response.data);
        //  await getAllCourse();
      }
    }
  }

  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <title>Cursos</title>
      </Helmet>
      <NavbarComponet />
      <div id="layoutSidenav">
        <NavSidebar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4 px-lg-5 mt-5">
              <div className="d-flex justify-content-between mb-5">
                <h1>
                  <FontAwesomeIcon className="px-2" icon={faBook} size="sm" />
                  Cursos
                </h1>
                <ModalCourseComponet />
              </div>
              <div className="row gx-5 align-items-center justify-content-start row-cols-1 row-cols-md-3 row-cols-xl-4 gap-5">
                {courses
                  ?.filter((course) => course.title?.toLocaleLowerCase().includes(search))
                  .map((item) => {
                    return (
                      <div className="col mb-5">
                        <div className="card h-100" style={{ width: '16.5em', border: 'none' }}>
                          <div className="card-header">
                            <div className="gap-1 d-flex">
                              <ModalCourseComponet
                                idInteface={item.id}
                                titleInteface={item.title}
                                acronymInteface={item.acronym}
                                teacherNameInteface={
                                  item.teacher?.firstName + ' ' + item.teacher?.lastName
                                }
                                avatarInteface={item.avatar}
                                teacherIdInteface={item.teacher?.id}
                              />
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => handledeleteCourse(item.id)}
                              >
                                <FontAwesomeIcon icon={faTrashCan} />
                              </button>
                            </div>
                          </div>
                          <a className="btn btn-outline-primary" href={`/curso/${item.acronym}`}>
                            <div className="card-body">
                              {/* <img className="card-img-top"src={item.avatar}alt={item.title}/> */}
                              <h5 className="card-title">{item.title}</h5>
                            </div>
                          </a>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </main>
          <FooterComponent />
        </div>
      </div>
    </>
  )
}
export default Course

import ModalCourseComponet from "../components/ModalCourseComponet"
import { useEffect, useState } from "react"
import { faBook, faEye, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavbarComponet from "../components/NavbarComponent"
import { Helmet } from "react-helmet"
import { toast } from "react-toastify"
import { deleteCourse, getCourses } from "../api/CourseApi"
import { CourseInterface } from "../interface/CourseInterface"
import NavSidebar from "../components/NavSidebar"
import Footer from "../components/footerComponent"
import AlertComponent from "../components/AlertComponent"


function Course(){
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [search,setSearch]=useState("")

  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => { 
    const response = await getCourses()
    if (response.status === 200) {
      setCourses(response.data);
    }
  };

  const handledeleteCourse = async (id: string | undefined) => {
    if (window.confirm("Deseja Excluir o Curso?")) {
      const response = await deleteCourse(id);
      if (response.status === 200) {
        toast.success(response.data);
       await getAllCourse();
      }
    }
  }
 
  return(
        <>
          <Helmet><title>Cursos</title></Helmet>
          <NavbarComponet/>
          <div id="layoutSidenav">
            <NavSidebar/>
              <div id="layoutSidenav_content"> 
                <main>
                  <div className="container-fluid px-4 px-lg-5 mt-5">
                  <AlertComponent/>
                    <h1 className="mt-4"><FontAwesomeIcon className='px-2' icon={faBook} size="sm" />Cursos</h1>
                      <ol className="breadcrumb mb-4">
                          {/* <li className="breadcrumb-item active">Dashboard</li> */}
                      </ol>
                    <div className="mb-5"><ModalCourseComponet/></div> 
                    <div className="row gx-5 align-items-center justify-content-center row-cols-1 row-cols-md-3 row-cols-xl-4 gap-5">      
                      {courses?.filter((course)=>
                        course.title?.toLocaleLowerCase().includes(search))
                        .map((item) => {
                        return (
                          <div className="col mb-5">
                            <div className="card h-100" style={{width: "16.5em", border: "none"}}>
                            <div className="card-header">
                                <div className="gap-1 d-flex">
                                    <ModalCourseComponet 
                                      idInteface={item.id} 
                                      titleInteface={item.title} 
                                      acronymInteface={item.acronym} 
                                      teacherNameInteface={item.teacher?.firstName+" "+item.teacher?.lastName} 
                                      avatarInteface={item.avatar}
                                      teacherIdInteface={item.teacher?.id}
                                    />
                                    <button className="btn btn-outline-danger" onClick={() => handledeleteCourse(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>  
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
              <Footer/>
            </div>
          </div>
        </>
    )
}
export default Course

import ModalCourseComponet from "../componets/ModalCourseComponet"
import { useEffect, useState } from "react"
import { faBook, faEye, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavbarComponet from "../componets/NavbarComponet"
import { Helmet } from "react-helmet"
import { toast } from "react-toastify"
import { deleteCourse, getCourses } from "../api/CourseApi"
import { CourseInterface } from "../interface/CourseInterface"
import NavSidebar from "../componets/NavSidebar"
import Footer from "../componets/footer"


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
        getAllCourse();
      }
    }
  }
 
  return(
        <>
          <Helmet><title>Dashboard</title></Helmet>
          <NavbarComponet/>
          <div id="layoutSidenav">
            <NavSidebar/>
              <div id="layoutSidenav_content"> 
                <main>
                <div className="container-fluid px-4">
                            <h1 className="mt-4"><FontAwesomeIcon className='px-2' icon={faBook} size="sm" />Coursos</h1>
                            <ol className="breadcrumb mb-4">
                                {/* <li className="breadcrumb-item active">Dashboard</li> */}
                            </ol>
                            
                <div className="position-absolute-left"><ModalCourseComponet/></div> 
              <div className="row gx-lg-9 row-cols-2 row-cols-md-4 justify-content my-5">      
                {courses?.filter((course)=>
                  course.title?.toLocaleLowerCase().includes(search))
                  .map((item,index) => {
                  return (
                    <div className="col mb-5">
                      <div className="card">
                        <a className="btn btn-outline-primary" href={`/curso/${item.acronym}`}>
                          <div className="card-body">
                          {/* <img className="card-img-top"src={item.avatar}alt={item.title}/> */}
                            <h5 className="card-title">{item.title}</h5>
                          </div>
                        </a>
                        <div className="card-footer">
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
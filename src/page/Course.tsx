import ModalCourseComponet from "../componets/ModalCourseComponet"
import { useDeleteCourse } from "../hooks/course/useDeleteCourse"
import { useState } from "react"
import { faBook, faEye, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGetAllCourse } from "../hooks/course/useGetAllCourse"
import NavbarComponet from "../componets/NavbarComponet"
import { Helmet } from "react-helmet"


function Course(){

  const [search,setSearch]=useState("")
  const {courses}=useGetAllCourse()
  const courseDelete=useDeleteCourse()
  const handledeleteCourse=(id: string | undefined)=>{
    courseDelete.mutate(id)
  }
  return(
        <>
          <Helmet><title>Dashboard</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container"> 
              <div className="row my-5">
               <h3><FontAwesomeIcon className='px-2' icon={faBook} size="sm" />Cursos</h3>
              </div>
              <div className="col-sm d-flex my-5 gap-3">  
                <div className="position-absolute-left"><ModalCourseComponet/></div>
                <form className="d-flex gap-2 px-lg-5" >
                  <input className="border border-primary form-control" type="search" placeholder="Busca Sigla" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
                  <button className="btn btn-outline-dark d-none d-sm-block"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
              </div>
              <div className="row">      
                {courses?.filter((course)=>
                  course.title?.toLocaleLowerCase().includes(search))
                  .map((item,index) => {
                  return (
                    <div className="col-sm-4 my-3">
                      <div className="card" style={{width: "12rem"}}>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <div className="gap-1 d-flex">
                            <a className="btn btn-outline-dark" href={`/curso/${item.acronym}`}><FontAwesomeIcon icon={faEye} /></a>
                            <ModalCourseComponet idInteface={item.id} titleInteface={item.title} acronymInteface={item.acronym} teacherInteface={item.teacher?.firstName+" "+item.teacher?.lastName} avatarInteface={item.avatar}/>
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
      </>
    )
}
export default Course
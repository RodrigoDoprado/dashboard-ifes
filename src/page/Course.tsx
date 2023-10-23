import ModalCourseComponet from "../componets/ModalCourseComponet"
import { useDeleteCourse } from "../hooks/course/useDeleteCourse"
import { useState } from "react"
import { faBook, faEye, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGetAllCourse } from "../hooks/course/useGetAllCourse"


function Course(){

  const [search,setSearch]=useState("")
  const {courses}=useGetAllCourse()
  const courseDelete=useDeleteCourse()
  const handledeleteCourse=(id: string | undefined)=>{
    courseDelete.mutate(id)
  }
  return(
        <>
          <div className="row my-5">
            <div className="col-sm d-flex gap-5">
              <h3><FontAwesomeIcon className='px-2' icon={faBook} size="sm" />Cursos</h3>
              <form className="d-flex gap-2 px-lg-5" >
                <input className="border border-primary form-control d-none d-sm-block" type="search" placeholder="Busca Sigla" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
                <button className="btn btn-outline-dark d-none d-sm-block"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              </form>
              <div className="px-lg-5 position-absolute-left"><ModalCourseComponet/></div>
            </div>
          </div>
          {/* 
            
            
           */}
          <div className="row">      
            {courses?.filter((course)=>
              course.acronym?.toLocaleLowerCase().includes(search))
              .map((item,index) => {
              return (
                <div className="col-sm-12">
                  <div className="card" style={{width: "18rem"}}>
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
      </>
    )
}
export default Course
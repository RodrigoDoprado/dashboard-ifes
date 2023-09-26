import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import { useGetCourse } from "../hooks/course/useGetCourse"
import ModalCourseComponet from "../componet/ModalCourseComponet"
import { useDeleteCourse } from "../hooks/course/useDeleteCourse"
import { useState } from "react"


function Course(){

  const [search,setSearch]=useState("")
  const {courses}=useGetCourse()
  const courseDelete=useDeleteCourse()
  const handledeleteCourse=(id: string | undefined)=>{
    courseDelete.mutate(id)
  }
  return(
        <>
          <Helmet><title>Cursos</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container">
             <div className="row">
                {/* <h1 className="my-5">Alunos</h1> */}
                <div className="co-sm-12 my-5">
                  <div className="gap-5 px-5 d-inline-flex mb-5">
                    <h3 className="px-lg-2">Cursos</h3>
                    <div className="d-none d-sm-block">
                    <form className="d-flex px-lg-5" >
                      <input className="border border-primary form-control me-2 " type="search" placeholder="Busca Sigla" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
                      <button className="btn btn-outline-dark" type="submit">Busca</button> 
                    </form>
                  </div>
                   {/* Button trigger modal  */}
                  <div className="px-lg-5"></div>
                    <ModalCourseComponet/>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Sigla</th>
                        <th scope="col">Titulo</th>
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses?.filter((course)=>
                          course.acronym?.toLocaleLowerCase().includes(search))
                          .map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td><img src={item.avatar} alt={item.title} width="45" height="35"/></td>
                              <td>{item.acronym}</td>
                              <td>{item.title}</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <a className="btn btn-outline-primary" href={`/curso/${item.acronym}`}>view</a> */}
                                  <ModalCourseComponet idInteface={item.id} titleInteface={item.title} acronymInteface={item.acronym}/>
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteCourse(item.id)}>deletar</button>  
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
      </>
    )
}
export default Course
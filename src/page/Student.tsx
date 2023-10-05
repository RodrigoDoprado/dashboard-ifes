import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import ModalStudentComponet from "../componet/ModalStudentComponet"
import { useDeleteStudent } from "../hooks/student/useDeleteStudent"
import { useGetAllStudent } from "../hooks/student/useGetAllStudent"
import { useState } from "react"
import { faGraduationCap, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Student(){
  
  const [search,setSearch]=useState("")
  const {students} = useGetAllStudent()
  const studentDelete=useDeleteStudent()

  const handledeleteStudent=(id: string | undefined)=>{
    studentDelete.mutate(id)
  }
  return(
        <>
          <Helmet><title>Aluno</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container">
              <div className="row my-5">
                <h3 className="px-5"><FontAwesomeIcon className='px-2' icon={faGraduationCap} size="sm" />Alunos</h3>
              </div>
              <div className="col-sm d-flex my-5 gap-3">
                <div className="px-lg-5 position-absolute-left"><ModalStudentComponet/></div>
                <form className="d-flex gap-2" >
                  <input className="border border-primary form-control " type="search" placeholder="Busca Nome" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
                  <button className="btn btn-outline-dark d-none d-sm-block"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
              </div>
              <div className="row">      
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
                        {students?.filter((student)=>
                          student.firstName?.toLowerCase().includes(search))
                          .map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td><img src={item.avatar} alt={item.firstName+""+item.lastName} width="45" height="35"/></td>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>{item.course?.acronym}</td>
                              <td>Matutino</td>
                              <td>Cursando</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <a className="btn btn-outline-primary" href={`/aluno/${item.enroll}`}>view</a> */}
                                  <ModalStudentComponet idInteface={item.id} firstNameInteface={item.firstName} lastNameInteface={item.lastName} avatarInteface={item.avatar}  courseInteface={item.course?.acronym}/>  
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteStudent(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>  
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
export default Student
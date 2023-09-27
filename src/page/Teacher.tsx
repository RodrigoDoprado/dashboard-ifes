import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import ModalTeacherComponet from "../componet/ModalTeacherComponet"
import { useGetTeacher } from "../hooks/teacher/useGetTeacher"
import { useDeleteTeacher } from "../hooks/teacher/useDeleteTeacher"
import { useState } from "react"
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Teacher(){

  const [search,setSearch]=useState("")
  const {teachers} = useGetTeacher()
  const teacherDelete=useDeleteTeacher()
  const handledeleteTeacher=(id: string | undefined)=>{
    teacherDelete.mutate(id)
  }
  return(
        <>
          <Helmet><title>Professor</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container">
              <div className="row my-5">
                <h3 className="px-5"><FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="sm" />Professor</h3>
              </div>
              <div className="col-sm d-flex my-5">
                <div className="px-5 position-absolute-left"><ModalTeacherComponet/></div>
                <form className="d-flex gap-2" >
                  <input className="border border-primary form-control " type="search" placeholder="Busca Nome" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
                  <button className="btn btn-outline-dark d-none d-sm-block">Busca</button>
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
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teachers?.filter((student)=>
                          student.firstName?.toLocaleLowerCase().includes(search))
                          .map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td><img src={item.avatar} alt={item.firstName+""+item.lastName} width="45" height="35"/></td>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <a className="btn btn-outline-primary" href={`/professor/${item.enroll}`}>view</a> */}
                                  <ModalTeacherComponet idInteface={item.id} firstNameInteface={item.firstName} lastNameInteface={item.lastName} avatarInteface={item.avatar}/>
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteTeacher(item.id)}>deletar</button>  
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
export default Teacher
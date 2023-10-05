import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalSubjectComponet from "../componet/ModalSubjectComponet"
import { useGetAllSubject } from "../hooks/subject/useGetAllSubject"
import { useDeleteSubject } from "../hooks/subject/useDeleteSubject"
import { faBook, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"

function Subject(){
    const [search,setSearch]=useState("")
    const {subjects} = useGetAllSubject()
    const subjectDelete= useDeleteSubject()

    const handledeleteSubject=(id: string | undefined)=>{
        subjectDelete.mutate(id)
    }
    return(
          <>
            <Helmet><title>Materia</title></Helmet>
            <NavbarComponet/>
            <main className="main">
              <div className="container">
                <div className="row my-5">
                  <h3 className="px-5"><FontAwesomeIcon className='px-2' icon={faBook} size="sm" />Matérias</h3>
                </div>
                <div className="col-sm d-flex my-5 gap-3">
                  <div className="px-lg-5 position-absolute-left"><ModalSubjectComponet/></div>
                  <form className="d-flex gap-2" >
                    <input className="border border-primary form-control " type="search" placeholder="Busca Sigla" aria-label="Search" value={search} onChange={event =>setSearch(event.target.value)}/>
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
                            <th scope="col">Sigla</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Configuração</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subjects?.filter((subject)=>
                            subject.acronym?.toLocaleLowerCase().includes(search))
                            .map((item,index) => {
                            return (
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td><img src={item.avatar} alt={item.title} width="45" height="35"/></td>
                                <td>{item.acronym}</td>
                                <td>{item.title}</td>
                                <td>
                                  <div className="gap-1 d-flex">
                                    {/* <a className="btn btn-outline-primary" href={`/professor/${item.enroll}`}>view</a> */}
                                    <ModalSubjectComponet idInteface={item.id} titleInteface={item.title} avatarInteface={item.avatar} acronymInteface={item.acronym}/>
                                    <button className="btn btn-outline-danger" onClick={() => handledeleteSubject(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>  
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
export default Subject
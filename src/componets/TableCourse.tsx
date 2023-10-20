import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDeleteSubject } from "../hooks/subject/useDeleteSubject"
import { useGetAllSubject } from "../hooks/subject/useGetAllSubject"
import ModalSubjectComponet from "./ModalSubjectComponet"

type data ={
    titlePeriodInteface: any,
}

function TableCourse({titlePeriodInteface}:data){
    const {subjects}=useGetAllSubject(titlePeriodInteface)
    const subjectDelete=useDeleteSubject()
    
    const handledeleteSubject=(id: string | undefined)=>{
        subjectDelete.mutate(id)
      }
    return(
        <> 
            <div className="table-responsive">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Sigla</th>
                        <th scope="col">Matéria</th>
                        <th scope="col">Professor</th>
                        <th scope="col">Configuração</th>
                      </tr>
                    </thead>
                    <tbody>
                    {subjects?.map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td><img src={item.avatar} alt={item.title} width="45" height="35"/></td>
                              <td>{item.acronym}</td>
                              <td>{item.title}</td>
                              <td>Anderson Coelho</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <a className="btn btn-outline-dark" href={`/curso/${item.acronym}`}><FontAwesomeIcon icon={faEye} /></a> */}
                                  <ModalSubjectComponet idInteface={item.id} titleInteface={item.title} acronymInteface={item.acronym} avatarInteface={item.avatar} periodInteface={titlePeriodInteface}/>
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteSubject(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>  
                                </div>
                              </td>
                            </tr>
                          )
                        })}
                    </tbody>
                </table>
            </div>
        </>    
    )
}
export default TableCourse
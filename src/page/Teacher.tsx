import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import ModalTeacherComponet from "../componets/ModalTeacherComponet"
import { useEffect, useState } from "react"
import { faChalkboardUser, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteTeacher, getTeachers } from "../api/TeacherApi"
import { toast } from "react-toastify"
import { TeacherInterface } from "../interface/TeacherInterface"


function Teacher(){
  const [teachers, setTeachers] = useState<TeacherInterface[]>([]);
  const [search,setSearch]=useState("");

  useEffect(() => {
    getAllTeacher();
  }, []);

  const getAllTeacher = async () => {
    const response = await getTeachers()
    if (response.status === 200) {
      setTeachers(response.data);
    }
  };

  const handledeleteTeacher = async (id: string | undefined) => {
    if (window.confirm("Deseja Excluir o Professor?")) {
      const response = await deleteTeacher(id);
      if (response.status === 200) {
        toast.success(response.data);
        getAllTeacher();
      }
    }
  }

  return(
        <>
          <Helmet><title>Professor</title></Helmet> 
          <NavbarComponet/>
          <main className="main">
            <div className="container">
              <div className="row my-5">
                <h3><FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="sm" />Professores</h3>
              </div>
              <div className="col-sm d-flex my-5 gap-3">
                <div className="position-absolute-left"><ModalTeacherComponet/></div>
                <form className="d-flex gap-2 px-lg-5" >
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
                          <th scope="col">Matéria</th>
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
                              <td><img src={item.avatar} alt={item.firstName+" "+item.lastName} width="45" height="35"/></td>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>{item.subjects}</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <a className="btn btn-outline-primary" href={`/professor/${item.enroll}`}>view</a> */}
                                  <ModalTeacherComponet idInteface={item.id} firstNameInteface={item.firstName} lastNameInteface={item.lastName} avatarInteface={item.avatar}/>
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteTeacher(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>  
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
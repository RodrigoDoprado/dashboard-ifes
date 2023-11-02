import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import ModalStudentComponet from "../componets/ModalStudentComponet"
import { useEffect, useState } from "react"
import { faGraduationCap, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteStudent, getStudents } from "../api/StudentApi"
import { StudentInterface } from "../interface/StudentInterface"
import { toast } from "react-toastify"


function Student(){
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [search,setSearch]=useState("")

  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = async () => {
    const response = await getStudents()
    if (response.status === 200) {
      setStudents(response.data);
    }
  };

  const handledeleteStudent = async (id: string | undefined) => {
    if (window.confirm("Deseja Excluir o Aluno?")) {
      const response = await deleteStudent(id);
      if (response.status === 200) {
        toast.success(response.data);
        getAllStudent();
      }
    }
  }
  return(
        <> 
          <Helmet><title>Aluno</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container">
              <div className="row my-5">
                <h3><FontAwesomeIcon className='px-2' icon={faGraduationCap} size="sm" />Alunos</h3>
              </div>
              <div className="col-sm d-flex my-5 gap-3">
                <div className=""><ModalStudentComponet/></div>
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
                                  <ModalStudentComponet 
                                    idInteface={item.id} 
                                    firstNameInteface={item.firstName} 
                                    lastNameInteface={item.lastName} 
                                    avatarInteface={item.avatar}  
                                    courseTitleInteface={item.course?.title}
                                    courseIdInteface={item.course?.id}
                                  />  
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
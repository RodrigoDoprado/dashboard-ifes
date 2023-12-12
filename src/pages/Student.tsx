import { Helmet } from "react-helmet"
import NavbarComponet from "../components/NavbarComponent"
import ModalStudentComponet from "../components/ModalStudentComponet"
import { useEffect, useState } from "react"
import { faGraduationCap, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteStudent, getStudents } from "../api/StudentApi"
import { StudentInterface } from "../interface/StudentInterface"
import { toast } from "react-toastify"
import NavSidebar from "../components/NavSidebar"
import Footer from "../components/footerComponent"
import AlertComponent from "../components/AlertComponent"


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
          <div id="layoutSidenav">
            <NavSidebar/>
              <div id="layoutSidenav_content">
                <main>
                <div className="container-fluid px-4 px-lg-5 mt-5">
                {/* <AlertComponent/> */}
                            <h1 className="mt-4"><FontAwesomeIcon className='px-2' icon={faGraduationCap} size="sm" />Alunos</h1>
                            <ol className="breadcrumb mb-4">
                                {/* <li className="breadcrumb-item active">Dashboard</li> */}
                            </ol>
                            
                <div className="position-absolute-left"><ModalStudentComponet/></div>
              <div className="row my-5"> 
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
                              <td>
                                <img 
                                  src={item.avatar} 
                                  alt={item.firstName+""+item.lastName} 
                                  className="card-img-top rounded-circle"
                                  style={{width:"3em", height:"3em"}}
                                />
                              </td>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>{item.course?.acronym}</td>
                              <td>Matutino</td>
                              <td>Cursando</td>
                              <td>
                                <div className="gap-1 d-flex">
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
          <Footer/>
          </div>
          </div>
      </>
    )
}
export default Student
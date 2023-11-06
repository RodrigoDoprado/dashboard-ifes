import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import ModalTeacherComponet from "../componets/ModalTeacherComponet"
import { useEffect, useState } from "react"
import { faChalkboardUser, faMagnifyingGlass, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteTeacher, getTeachers } from "../api/TeacherApi"
import { toast } from "react-toastify"
import { TeacherInterface } from "../interface/TeacherInterface"
import NavSidebar from "../componets/NavSidebar"


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
          <div id="layoutSidenav">
            <NavSidebar/> 
              <div id="layoutSidenav_content">
                <main>
                <div className="container-fluid px-4">
                            <h1 className="mt-4"><FontAwesomeIcon className='px-2' icon={faChalkboardUser} size="sm" />Professores</h1>
                            <ol className="breadcrumb mb-4">
                                {/* <li className="breadcrumb-item active">Dashboard</li> */}
                            </ol>
                            
                <div className="position-absolute-left"><ModalTeacherComponet/></div>
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
          </div>
          </div>
      </>
    )
}
export default Teacher
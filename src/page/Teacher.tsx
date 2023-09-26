import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import ModalTeacherComponet from "../componet/ModalTeacherComponet"
import { useGetTeacher } from "../hooks/teacher/useGetTeacher"
import { useDeleteTeacher } from "../hooks/teacher/useDeleteTeacher"


function Teacher(){
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
             <div className="row">
                {/* <h1 className="my-5">Alunos</h1> */}
                <div className="col-sm-12 my-5">
                  <div className="gap-5 px-5 d-inline-flex mb-5">
                    <h3 className="px-lg-2">Professores</h3>
                    <div className="d-none d-sm-block">
                    <form className="d-flex px-5" >
                      <input className="border border-primary form-control me-2 px-5" type="search" placeholder="Busca professor" aria-label="Search"/>
                      <button className="btn btn-outline-dark" type="submit">Busca</button>
                    </form>
                  </div>
                   {/* Button trigger modal  */}
                  <div className="px-lg-5"></div>
                    <ModalTeacherComponet/>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Matricula</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teachers?.map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  <a className="btn btn-outline-primary" href={`/professor/${item.enroll}`}>view</a>
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
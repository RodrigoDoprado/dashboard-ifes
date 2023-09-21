import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import { useGetStudent } from "../hooks/student/useGetStudent"
import ModalStudentComponet from "../componet/ModalStudentComponet"
import { StudentInterface } from "../interface/StudentInterface"
import { useDeleteStudent } from "../hooks/student/useDeleteStudent"



function Student(){
  
  const {students} = useGetStudent()
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
             <div className="row">
                {/* <h1 className="my-5">Alunos</h1> */}
                <div className="co-sm-12 my-5">
                  <div className="gap-5 px-5 d-inline-flex mb-5">
                    <h3 className="px-lg-5">Alunos</h3>
                    <div className="d-none d-sm-block">
                    <form className="d-flex px-5" >
                      <input className="border border-primary form-control me-2 px-5" type="search" placeholder="Busca aluno" aria-label="Search"/>
                      <button className="btn btn-outline-dark" type="submit">Busca</button>
                    </form>
                  </div>
                   {/* Button trigger modal  */}
                  <div className="px-5"></div>
                    <ModalStudentComponet/>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
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
                        {students?.map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td>{item.enroll}</td>
                              <td>{item.firstName+" "+item.lastName}</td>
                              <td>{item.course?.acronym}</td>
                              <td>Matutino</td>
                              <td>Cursando</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <button className="btn btn-outline-primary">editar</button> */}
                                  <ModalStudentComponet idInteface={item.id} firstNameInteface={item.firstName} lastNameInteface={item.lastName} avatarInteface={item.avatar} courseInteface={item.course?.acronym}/>
                                  <button className="btn btn-outline-danger" onClick={() => handledeleteStudent(item.id)}>deletar</button>  
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
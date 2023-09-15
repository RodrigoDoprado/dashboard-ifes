import { Helmet } from "react-helmet"
import ModalAluno from "../componet/ModalAluno"
import { useGetStudent } from "../hooks/student/useGetStudent"
import NavbarComponet from "../componet/NavbarComponet"
function Student(){
  const {students, isSuccess} =useGetStudent()
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
                    <h3 className="text-uppercase px-lg-5">Alunos</h3>
                    <div className="d-none d-sm-block">
                    <form className="d-flex px-5" >
                      <input className="border border-primary form-control me-2 px-5" type="search" placeholder="Busca aluno" aria-label="Search"/>
                      <button className="btn btn-outline-dark" type="submit">Busca</button>
                    </form>
                  </div>
                   {/* Button trigger modal  */}
                  <div className="px-5"></div>
                    <ModalAluno/>
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
                        {isSuccess? students?.map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td>20181tadst0259</td>
                              <td>{item.fristName}</td>
                              <td>{item.course}</td>
                              <td>Matutino</td>
                              <td>Cursando</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <button className="btn btn-outline-primary">editar</button> */}
                                  <ModalAluno/>
                                  <button className="btn btn-outline-danger">deletar</button>  
                                </div>
                              </td>
                            </tr>
                          )
                        }):
                          <>
                            <tr>
                              <th scope="row">{1}</th>
                              <td>- - -</td>
                              <td>- - -</td>
                              <td>- - -</td>
                              <td>- - -</td>
                              <td>- - -</td>
                              <td>Error Conexão com Api</td>
                            </tr>
                          </>
                        }
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
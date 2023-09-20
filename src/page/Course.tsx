import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import { useGetCourse } from "../hooks/course/useGetCourse"
import ModalCourseComponet from "../componet/ModalCourseComponet"


function Course(){
  const {courses}=useGetCourse()
  return(
        <>
          <Helmet><title>Cursos</title></Helmet>
          <NavbarComponet/>
          <main className="main">
            <div className="container">
             <div className="row">
                {/* <h1 className="my-5">Alunos</h1> */}
                <div className="co-sm-12 my-5">
                  <div className="gap-5 px-5 d-inline-flex mb-5">
                    <h3 className="px-lg-2">Cursos</h3>
                    <div className="d-none d-sm-block">
                    <form className="d-flex px-5" >
                      <input className="border border-primary form-control me-2 px-5" type="search" placeholder="Busca curso" aria-label="Search"/>
                      <button className="btn btn-outline-dark" type="submit">Busca</button>
                    </form>
                  </div>
                   {/* Button trigger modal  */}
                  <div className="px-lg-5"></div>
                    <ModalCourseComponet/>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Sigla</th>
                        <th scope="col">Titulo</th>
                          <th scope="col">Configuração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses?.map((item,index) => {
                          return (
                            <tr>
                              <th scope="row">{index+1}</th>
                              <td>{item.acronym}</td>
                              <td>{item.title}</td>
                              <td>
                                <div className="gap-1 d-flex">
                                  {/* <button className="btn btn-outline-primary">editar</button> */}
                                  <ModalCourseComponet idInteface={item.id} titleInteface={item.title} acronymInteface={item.acronym}/>
                                  <button className="btn btn-outline-danger">deletar</button>  
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
export default Course
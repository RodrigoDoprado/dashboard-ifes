import { Helmet } from "react-helmet"
import Navbar from "../componet/Navbar"
import { useCategory } from "../hooks/category/useCategory"
import { useOffice } from "../hooks/office/useOffice"
import { useGetProduct } from "../hooks/products/useGetProduct"
import ModalAluno from "../componet/ModalAluno"
function Dashboard (){

  const{products}=useGetProduct()
  const{categorys}=useCategory()
  const{offices}=useOffice()
  
  return(
        <>
        <Helmet><title>Dashboard</title></Helmet>
        <Navbar/>
        <main className="main">
          <div className="container">
            <div className="row">
              <h1 className="my-5">Dashboard</h1>
                <div className="col my-5">
                  <div className="gap-5 d-flex mb-3">
                    <h3>Produtos</h3>
                    <ModalAluno/>
                    {/* <button className="btn btn-outline-dark btn-lg fw-bolder">Novo</button>   */}
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Configuração</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((item,index) => {
                        return (
                          <tr>
                          <th scope="row">{index+1}</th>
                          <td>{item.title}</td>
                          <td>{item.category.title}</td>
                          <td>
                            <div className="gap-1 d-flex">
                              <button className="btn btn-outline-primary">editar</button>
                              <button className="btn btn-outline-danger">deletar</button>  
                            </div>
                          </td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col my-5">
                  <div className="gap-5 d-flex mb-3">
                    <h3>Categoria</h3>
                    <button className="btn btn-outline-dark btn-lg fw-bolder">Novo</button>  
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Configuração</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categorys?.map((item,index) => {
                        return (
                          <tr>
                          <th scope="row">{index+1}</th>
                          <td>{item.title}</td>
                          <td>
                            <div className="gap-1 d-flex">
                              <button className="btn btn-outline-primary">editar</button>
                              <button className="btn btn-outline-danger">deletar</button>  
                            </div>
                          </td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col my-5">
                  <div className="gap-5 d-flex mb-3">
                    <h3>Cargo</h3>
                    <button className="btn btn-outline-dark btn-lg fw-bolder">Novo</button>  
                  </div>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Configuração</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offices?.map((item,index) => {
                        return (
                          <tr>
                          <th scope="row">{index+1}</th>
                          <td>{item.title}</td>
                          <td>
                            <div className="gap-1 d-flex">
                              <button className="btn btn-outline-primary">editar</button>
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
          </main>
        </>
    )
}

export default Dashboard
import { Helmet } from "react-helmet"
import Navbar from "../componet/Navbar"
import { useProduct } from "../hooks/products/useProduct"
import { useCategory } from "../hooks/category/useCategory"
import { useOffice } from "../hooks/office/useOffice"
function Dashboard (){

  const{products}=useProduct()
  const{categorys}=useCategory()
  const{offices}=useOffice()
  return(
        <>
        <Helmet><title>Dashboard</title></Helmet>
        <Navbar/>
        <main className="main">
          <div className="container">
            <div className="row">
              <h1>Dashboard</h1>
                <div className="col">  
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
                          <td>@mdo</td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col">
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
                          <td>@mdo</td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col">
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
                          <td>@mdo</td>
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
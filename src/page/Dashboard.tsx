import { Helmet } from "react-helmet"
import Navbar from "../componet/Navbar"
import { useProduct } from "../hooks/products/useProduct"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
function Dashboard (){

  const{products}=useProduct()
  
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
                          <td>{item.category}</td>
                          <td>@mdo</td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  Column
                </div>
                <div className="col">
                  Column
                </div>
              </div>
            </div>
          </main>
        </>
    )
}

export default Dashboard
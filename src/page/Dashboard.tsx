import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import Cards from "../componet/Cards"
function Dashboard(){
  
  return(
        <>
        <Helmet><title>Dashboard</title></Helmet>
        <NavbarComponet/>
        <main className="main">
          <div className="container">
            <div className="row">
              <h1 className="my-5">Dashboard</h1>
              <div className="col-sm-4">
                <Cards/>
              </div>
              <div className="col-sm-4">
                <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
              </div>
            </div>
          </div>
          </main>
        </>
    )
}

export default Dashboard
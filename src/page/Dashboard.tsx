import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
function Dashboard (){
  
  return(
        <>
        <Helmet><title>Dashboard</title></Helmet>
        <NavbarComponet/>
        <main className="main">
          <div className="container">
            <div className="row">
              <h1 className="my-5">Dashboard</h1>
              </div>
            </div>
          </main>
        </>
    )
}

export default Dashboard
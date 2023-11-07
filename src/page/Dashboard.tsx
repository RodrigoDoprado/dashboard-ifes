import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"
import {Bar, Pie} from "react-chartjs-2"
import { useState } from "react"
import { UserData } from "../Data"
import NavSidebar from "../componets/NavSidebar"
import Footer from "../componets/footer"

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Dashboard(){

  const options={}
  const [data, setData] = useState({
    labels: UserData?.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData?.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return(
        <>
            <Helmet><title>Dashboard</title></Helmet>
            <NavbarComponet/>
            <div id="layoutSidenav">
                <NavSidebar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-area me-1"></i>
                                            Area Chart Example
                                        </div>
                                        {/* <div className="card-body"><Pie data={data} options={options} /></div> */}
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-bar me-1"></i>
                                            Bar Chart Example
                                        </div>
                                        <div className="card-body"><Bar data={data} options={options} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </main>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Dashboard
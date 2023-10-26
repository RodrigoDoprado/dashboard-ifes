import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import Cards from "../componets/Cards"
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"
import {Bar} from "react-chartjs-2"
import { useState } from "react"
import { UserData } from "../Data"
import Course from "./Course"

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Dashboard(){
  const option={}
  const [data, setData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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
        <main className="main">
          <div className="container">
            <div className="row">
              <h1 className="my-5">Dashboard</h1>
              <div className="col-sm-6"> 
                <Bar data={data} options={option} />
              </div>
            </div>
          </div>
          </main>
        </>
    )
}

export default Dashboard
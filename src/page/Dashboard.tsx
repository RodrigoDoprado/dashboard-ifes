import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"
import {Bar} from "react-chartjs-2"
import { useState } from "react"
import { UserData } from "../Data"
import { useGetAllCourse } from "../hooks/course/useGetAllCourse"
import { useGetAllStudent } from "../hooks/student/useGetAllStudent"

ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Dashboard(){
  const {courses}=useGetAllCourse()
  const {students}=useGetAllStudent()

  const option={}
  const [data, setData] = useState({
    labels: courses?.map((data) => data.acronym),
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
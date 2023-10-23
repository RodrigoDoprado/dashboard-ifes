import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import { useParams } from "react-router-dom";
import { useGetCourse } from "../hooks/course/useGetCourse";
import { useGetAllPeriod } from "../hooks/period/useGetAllCourse";
import ModalPeriodComponet from "../componets/ModalPeriodComponet";
import ModalSubjectComponet from "../componets/ModalSubjectComponet";
import TableCourse from "../componets/TableCourse";


function ViewCourse(){ 
    const {acronym}  = useParams();
    const {course}=useGetCourse(acronym)
    const {periods}=useGetAllPeriod(acronym)
   
    return(
        <>
            <Helmet><title>Grade do Curso - {acronym}</title></Helmet>
            <NavbarComponet/>
            <main className="main">
                {/* <!-- Header--> */}
                <header className="bg-primary bg-gradient text-white">
                    <div className="container px-4 text-center">
                        <p className="fw-bolder h2">Grade Curicular</p>
                        <p className="fw-bolder h4 mt-5">{course?.title}</p>
                        <p className="h5 lead">Professor Coordenador: {course?.teacher?.firstName+" "+course?.teacher?.lastName}</p>
                        <ModalPeriodComponet couserInteface={course?.id}/>
                        <ModalSubjectComponet/>
                    </div>
                </header>
                <div className="container">
                    <div className="row mt-5">
                        {periods?.map((item) => {
                          return (
                            <div className="col-sm-6">
                                <div className="col-sm d-flex">
                                    <p className="h3">{item.title}</p>
                                    <div className="px-lg-5 position-absolute-left"></div>
                                </div> 
                                <TableCourse titlePeriodInteface={item.title}/>
                            </div>
                          )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
export default ViewCourse
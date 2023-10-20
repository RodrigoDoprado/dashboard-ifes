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
                <div className="container">
                    <div className="row">
                        <div className="d-flex mt-5 gap-4">
                            <div>
                                <p className="h3">Grade Curicular do Curso {course?.title}</p> 
                                <p className="h4">Professor Coordenador: {course?.teacher?.firstName+" "+course?.teacher?.lastName}</p>
                            </div>
                            <ModalPeriodComponet couserInteface={course?.id}/>
                        </div>
                        {periods?.map((item) => {
                          return (
                            <div className="col-sm-6 my-5">
                                <div className="col-sm d-flex my-5 gap-4">
                                    <p className="h3">{item.title}</p>
                                    <div className="px-lg-5 position-absolute-left"><ModalSubjectComponet/></div>
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
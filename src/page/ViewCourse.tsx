import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import { useParams } from "react-router-dom";
import { useGetCourse } from "../hooks/course/useGetCourse";
import { useGetAllPeriod } from "../hooks/period/useGetAllCourse";
import ModalPeriodComponet from "../componets/ModalPeriodComponet";
import ModalSubjectComponet from "../componets/ModalSubjectComponet";
import TableSubjectComponet from "../componets/TableSubjectComponet";


function ViewCourse(){ 
    const {acronym} = useParams();
    const {course}=useGetCourse(acronym)
    const {periods}=useGetAllPeriod(acronym)
   
    return(
        <>
            <Helmet><title>Grade do Curso - {acronym}</title></Helmet>
            <NavbarComponet/>
            {/* <!-- Header--> */}
            <header className="bg-primary bg-gradient text-white">
                <div className="container px-4 text-center">   
                    <p className="fw-bolder h2">Grade Curicular</p>
                    <p className="fw-bolder h4 mt-5">{course?.title}</p>
                    <p className="h5 lead mb-5">Professor Coordenador: {course?.teacher?.firstName+" "+course?.teacher?.lastName}</p>
                    <ModalPeriodComponet couserInteface={course?.id}/> &nbsp; &nbsp; 
                    <ModalSubjectComponet/>
                </div>
            </header>
            <section className="py-5">
                <div className="container-fluid">
                    <div className="row gx-lg-9 row-cols-1 row-cols-md-2 justify-content px-5">
                        {/* <div className="col-sm-6"> */}
                            {periods?.map((item) => {
                              return (
                                <div className="col mb-5">
                                    <ModalPeriodComponet idInteface={item.id} titleInteface={item.title} />
                                    <TableSubjectComponet 
                                        idPeriodInteface={item.id} 
                                        titlePeriodInteface={item.title}
                                    />
                                </div>
                              )
                            })}
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewCourse
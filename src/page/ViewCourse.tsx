import { Helmet } from "react-helmet"
import NavbarComponet from "../componets/NavbarComponet"
import { useParams } from "react-router-dom";
import ModalPeriodComponet from "../componets/ModalPeriodComponet";
import ModalSubjectComponet from "../componets/ModalSubjectComponet";
import TableSubjectComponet from "../componets/TableSubjectComponet";
import { useEffect, useState } from "react";
import { getCourse } from "../api/CourseApi";
import { getPeriods } from "../api/PeriodApi";
import { CourseInterface } from "../interface/CourseInterface";
import { PeriodInterface } from "../interface/PeriodInterface";


function ViewCourse(){ 
    const [course, setCourse] = useState<CourseInterface>();
    const [periods, setPeriods] = useState<PeriodInterface[]>([]);
    const {acronym} = useParams();

    useEffect(() => {
        getByCourse().then(()=>{getAllPeriod()})
      }, []);
    
      const getByCourse = async () => {
        const response = await getCourse(acronym)
        if (response.status === 200) {
            setCourse(response.data);
        }
      };

      const getAllPeriod = async () => {
        const response = await getPeriods(acronym)
        if (response.status === 200) {
            setPeriods(response.data);
        }
      };
   
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
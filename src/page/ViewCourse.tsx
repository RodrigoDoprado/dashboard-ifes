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
import NavSidebar from "../componets/NavSidebar";
import Footer from "../componets/footer";


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
            <div id="layoutSidenav">
              <NavSidebar/>
                <div id="layoutSidenav_content"> 
                  <main>
                    <div className="container-fluid px-4">
                      <header>
                        <h1 className="mt-4">{course?.title}</h1> {/*text-capitalize */}
                        <ol className="breadcrumb mb-4">
                          <li className="">Professor Coordenador:&nbsp;{course?.teacher?.firstName+" "+course?.teacher?.lastName}</li>
                        </ol>
                        <div className="text-center">
                          <ModalPeriodComponet couserInteface={course?.id}/> &nbsp;&nbsp;&nbsp; &nbsp; 
                          <ModalSubjectComponet/>
                        </div>
                      </header>
                      <div className="row gx-lg-9 row-cols-1 row-cols-md-2 row-cols-lg-2 my-5">
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
                    </div>
                  </div>
                </main>
                <Footer/>
              </div>
            </div>
        </>
    )
}
export default ViewCourse
import { Helmet } from "react-helmet"
import NavbarComponet from "../components/NavbarComponent"
import { useParams } from "react-router-dom";
import ModalPeriodComponet from "../components/ModalPeriodComponet";
import ModalSubjectComponet from "../components/ModalSubjectComponent";
import { useEffect, useState } from "react";
import { getCourse } from "../api/CourseApi";
import { getPeriods } from "../api/PeriodApi";
import { CourseInterface } from "../interface/CourseInterface";
import { PeriodInterface } from "../interface/PeriodInterface";
import NavSidebar from "../components/NavSidebar";
import Footer from "../components/footerComponent";
import { deleteSubject } from "../api/SubjectApi";
import { toast } from "react-toastify";
import TableSubjectComponet from "../components/TableSubjectComponent";
import AlertComponent from "../components/AlertComponent";


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
            // setPeriods(response.data);
            setPeriods(response.data)
        }
      };

      // const handledeleteSubject = async (id: string | undefined) => {
      //   if (window.confirm("Deseja Excluir a Matéria?")) {
      //     const response = await deleteSubject(id);
      //     if (response.status === 200) {
      //       toast.success(response.data);
      //       // getAllSubject();
      //     }
      //   }
      // }
   
    return(
        <>
            <Helmet><title>Grade do Curso - {acronym}</title></Helmet>
            <NavbarComponet/>
            <div id="layoutSidenav">
              <NavSidebar/>
                <div id="layoutSidenav_content"> 
                  <main>
                  <div className="container-fluid px-4 px-lg-5 mt-5">
                      <header>
                        <h1 className="mt-5">{course?.title}</h1> {/*text-capitalize */}
                        <ol className="breadcrumb mb-4">
                          {course?.teacher?
                            <li className="">
                              Professor Coordenador:&nbsp;
                              {course?.teacher?.firstName+" "+course?.teacher?.lastName}
                            </li>:
                            <>
                              <li className="">
                                Professor Coordenador:&nbsp;
                                Curso Não Possui 
                              </li>
                            </>
                          }
                          
                        </ol>
                        <div className="text-center">
                          <ModalPeriodComponet couserInteface={course?.id}/> &nbsp;&nbsp;&nbsp;&nbsp; 
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
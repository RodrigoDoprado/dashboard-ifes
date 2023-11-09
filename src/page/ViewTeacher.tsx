import { Helmet } from "react-helmet"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavbarComponet from "../componets/NavbarComponet";
import NavSidebar from "../componets/NavSidebar";

function ViewTeacher(){ 
    // const [teacher, setTeacher] = useState<TeacherInterface>();
    const {teacher}=useContext(AuthContext)
    
    // useEffect(() => {
    //     getByTeacher().catch(()=>{signout()})
    //   }, []);
    
    //   const getByTeacher = async () => {
    //     const response = await getTeacher(enroll)
    //     if (response.status === 200) {
    //         setTeacher(response.data);
    //     }
    //   };
    
    return(
        <>
            <Helmet><title>{teacher?.firstName+" "+teacher?.lastName}</title></Helmet>
            <NavbarComponet/>
            <div id="layoutSidenav">
                <NavSidebar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1>{teacher?.firstName+" "+teacher?.lastName}</h1>
                            <img src={teacher?.avatar} alt={teacher?.firstName+" "+teacher?.lastName}/>
                            <h1>Matricula: {teacher?.enroll}</h1>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default ViewTeacher
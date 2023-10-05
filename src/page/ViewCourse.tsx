import { Helmet } from "react-helmet"
import NavbarComponet from "../componet/NavbarComponet"
import TableCourse from "../componet/TableCourse"

function ViewCourse(){
    return(
        <>
            <Helmet><title>Cursos</title></Helmet>
            <NavbarComponet/>
            <main className="main">
                <div className="container">
                    <div className="row">
                        <h1>Grade Curicular do Curso ...</h1>      
                        <div className="col-sm-6">
                            <h1>Primeiro Semestre</h1>
                            <TableCourse/>
                        </div>
                        <div className="col-sm-6">
                            <h1>Segundo Semestre</h1>
                            <TableCourse/>
                        </div>
                        <div className="col-sm-6">
                            <h1>Terceiro Semestre</h1>
                            <TableCourse/>
                        </div>
                        <div className="col-sm-6">
                            <h1>Quarto Semestre</h1>
                            <TableCourse/>
                        </div>
                        <div className="col-sm-6">
                            <h1>Quinto Semestre</h1>
                            <TableCourse/>
                        </div>
                        <div className="col-sm-6">
                            <h1>Sexto Semestre</h1>
                            <TableCourse/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ViewCourse
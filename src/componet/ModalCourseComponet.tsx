import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostCourse } from '../hooks/course/usePostCourse';
import { usePutCourse } from '../hooks/course/usePutCourse';
import { CourseInterface } from '../interface/CourseInterface';
import { useGetAllTeacher } from '../hooks/teacher/useGetAllTeacher';

type data ={
  idInteface?: string,
  titleInteface?: string
  acronymInteface?: string
  teacherInteface?: string
}

function ModalCourseComponet({idInteface, titleInteface,acronymInteface,teacherInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(titleInteface);
  const [acronym, setAcronym] = useState(acronymInteface);
  const [teacher, setTeacher] = useState("");

  const courseCreate=usePostCourse()
  const courseUpdate=usePutCourse()
  const {teachers}=useGetAllTeacher()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const couseData: CourseInterface = {title,acronym,teacher,id:idInteface}
      courseUpdate.mutate(couseData)
      window.location.href = window.location.href
    }else{
      const couseData: CourseInterface = {title,acronym,teacher}
      courseCreate.mutate(couseData)
      window.location.href = window.location.href
    }
}

useEffect(() => {
  if(!courseCreate.isSuccess && courseUpdate.isSuccess) return 
  handleClose();
}, [courseCreate.isSuccess, courseUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>Novo Curso</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Curso</>:<>Novo Curso</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="inputTitle">Titulo:</label>
                <input className="border border-primary form-control" type="text" name="title" required value={title} onChange={event =>setTitle(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputAcronym">Sigla:</label>
                <input className="border border-primary form-control" type="text" name="acronym" required value={acronym} onChange={event =>setAcronym(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputCourse">Orientador:</label>
              <select className="border border-primary form-select" name="course" required value={teacher} onChange={event =>setTeacher(event.target.value)}>
                <option selected>{teacherInteface}</option>
                {teachers?.map((item) => {return(<option value={item.id}>{item.firstName+" "+item.lastName}</option>)})}
              </select>
            </div>
            <div className="d-grid d-inline-flex gap-5 px-4 mt-3">
              <Button variant="primary" className='px-5' onClick={handleStudent}>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCourseComponet;
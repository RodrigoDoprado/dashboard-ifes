import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostCourse } from '../hooks/course/usePostCourse';
import { usePutCourse } from '../hooks/course/usePutCourse';
import { CourseInterface } from '../interface/CourseInterface';

type data ={
  idInteface?: string,
  titleInteface?: string
  acronymInteface?: string
}

function ModalCourseComponet({idInteface, titleInteface,acronymInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(titleInteface);
  const [acronym, setAcronym] = useState(acronymInteface);

  const courseCreate=usePostCourse()
  const courseUpdate=usePutCourse()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const couseData: CourseInterface = {title,acronym,id:idInteface}
      courseUpdate.mutate(couseData)
      window.location.href = window.location.href
    }else{
      const couseData: CourseInterface = {title,acronym}
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
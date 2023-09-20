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
    }else{
      const couseData: CourseInterface = {title,acronym}
      courseCreate.mutate(couseData)
    }
}

useEffect(() => {
  if(!courseCreate.isSuccess && courseUpdate.isSuccess) return 
  handleClose();
}, [courseCreate.isSuccess, courseUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder btn-sm' onClick={handleShow}>Novo Curso</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Curso</>:<>Cadastro Curso</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
                <input className="border border-primary form-control p-2" type="text" name="title" placeholder="Titulo:" required value={title} onChange={event =>setTitle(event.target.value)}/>
            </div>
            <div className="mb-3">
                <input className="border border-primary form-control p-2" type="text" name="acronym" placeholder="Sigla:" required value={acronym} onChange={event =>setAcronym(event.target.value)}/>
            </div>
            <div className="d-grid d-inline-flex gap-5 px-5">
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
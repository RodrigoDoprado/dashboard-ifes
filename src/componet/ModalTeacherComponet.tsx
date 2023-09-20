import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostTeacher } from '../hooks/teacher/usePostTeacher';
import { TeacherInterface } from '../interface/TeacherInterface';
import { usePutTeacher } from '../hooks/teacher/usePutTeacher';

type data ={
  idInteface?: string,
  firstNameInteface?: string,
  lastNameInteface?: string,
  avatarInteface?: string,
}

function ModalTeacherComponet({idInteface, firstNameInteface, lastNameInteface,avatarInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);

  const teacherCreate=usePostTeacher()
  const teacherUpdate=usePutTeacher()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const teacherData: TeacherInterface = {firstName,lastName,avatar,id:idInteface}
      teacherUpdate.mutate(teacherData)
    }else{
      const teacherData: TeacherInterface = {firstName,lastName,avatar}
      teacherCreate.mutate(teacherData)
    }
}

useEffect(() => {
  if(!teacherCreate.isSuccess && teacherUpdate.isSuccess) return 
  handleClose();
}, [teacherCreate.isSuccess, teacherUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder btn-sm' onClick={handleShow}>Novo Professor</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Professor</>:<>Cadastro Professor</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
                <input className="border border-primary form-control p-2" type="text" name="avatar" placeholder="avatar url:" required value={avatar} onChange={event =>setAvatar(event.target.value)}/>
            </div>
            <div className="mb-3">
                <input className="border border-primary form-control p-2" type="text" name="fristName" placeholder="Primeiro Nome:" required value={firstName} onChange={event =>setFirstName(event.target.value)}/>
            </div>
            <div className="mb-3">
                <input className="border border-primary form-control p-2" type="text" name="lastName" placeholder="Sobre Nome:" required value={lastName} onChange={event =>setLastName(event.target.value)}/>
            </div>
            {/* <div className="mb-3">
              <select className="border border-primary form-select p-2" aria-label="Default select example" required>
                <option selected>Cursos...</option>
                {courses?.map((item) => {return(<option value={item.id}>{item.acronym}</option>)})}
              </select>
            </div> */}
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

export default ModalTeacherComponet;
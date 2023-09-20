import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostStudent } from '../hooks/student/usePostStudent';
import { StudentInterface } from '../interface/StudentInterface';
import { usePutStudent } from '../hooks/student/usePutStudent';
import { useGetCourse } from '../hooks/course/useGetCourse';

type data ={
  idInteface?: string,
  firstNameInteface?: string,
  lastNameInteface?: string,
  avatarInteface?: string,
  courseInteface?: string
}

function ModalStudentComponet({idInteface, firstNameInteface, lastNameInteface,avatarInteface,courseInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [course, setCourse] = useState(courseInteface);
  
  const studentCreate=usePostStudent()
  const studentUpdate=usePutStudent()
  const {courses}=useGetCourse()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const studentData: StudentInterface = {firstName,lastName,avatar,course,id:idInteface}
      studentUpdate.mutate(studentData)
    }else{
      const studentData: StudentInterface = {firstName,lastName,course,avatar}
      studentCreate.mutate(studentData)
    }
}

useEffect(() => {
  if(!studentCreate.isSuccess && studentUpdate.isSuccess) return 
  handleClose();
}, [studentCreate.isSuccess, studentUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder btn-sm' onClick={handleShow}>Novo Aluno</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Aluno</>:<>Novo Aluno</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <form className='d-grid'>
            <div className="mb-3 d-inline-flex gap-3">
              <label htmlFor="inputAvatar">AvatarUrl:</label>
              <input className="border border-primary form-control" type="text" name="avatar" required value={avatar} onChange={event =>setAvatar(event.target.value)}/>
            </div>
            <div className="mb-3 d-inline-flex gap-0">
              <label htmlFor="inputAvatar">Primeiro Nome:</label>
              <input className="border border-primary form-control" type="text" name="fristName" required value={firstName} onChange={event =>setFirstName(event.target.value)}/>
            </div>
            <div className="mb-3 d-inline-flex gap-2">
              <label htmlFor="inputAvatar">Sobre Nome:</label>
                <input className="border border-primary form-control" type="text" name="lastName" required value={lastName} onChange={event =>setLastName(event.target.value)}/>
            </div>
            <div className="mb-3 d-inline-flex gap-5">
              <label htmlFor="inputAvatar">Cuso:</label>
              <select className="border border-primary form-select" aria-label="Default select example" required>
                <option selected>...</option>
                {courses?.map((item) => {return(<option value={item.id}>{item.acronym}</option>)})}
              </select>
            </div>
            <div className="d-grid d-inline-flex gap-5 px-5 mt-3">
              <Button variant="primary" className='px-5' onClick={handleStudent}>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalStudentComponet;
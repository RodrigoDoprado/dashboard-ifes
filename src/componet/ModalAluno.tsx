import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostStudent } from '../hooks/student/usePostStudent';
import { StudentInterface } from '../interface/StudentInterface';
import { usePutStudent } from '../hooks/student/usePutStudent';

type data ={
  idInteface?: string,
  firstNameInteface?: string,
  lastNameInteface?: string,
  AvatarInteface?: string
}

function ModalAluno({idInteface, firstNameInteface, lastNameInteface,AvatarInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(AvatarInteface);
  
  const studentCreate=usePostStudent()
  const studentUpdate=usePutStudent()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const studentData: StudentInterface = {firstName,lastName,avatar,id:idInteface}
      studentUpdate.mutate(studentData)
    }else{
      const studentData: StudentInterface = {firstName,lastName,avatar}
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
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Aluno</>:<>Criar Aluno</>}</Modal.Title></Modal.Header>
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
            <div className="mb-3">
              <select className="border border-primary form-select p-2" aria-label="Default select example" required>
                <option selected>Curso...</option>
                <option value="1">TADS</option>
                <option value="2">TSI</option>
                <option value="3">Biologia</option>
              </select>
            </div>
            <Button variant="primary" onClick={handleStudent}>Salvar</Button>
            <Button variant="secondary" onClick={handleClose}>Sair</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAluno;
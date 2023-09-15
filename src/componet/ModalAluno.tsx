import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostStudent } from '../hooks/student/usePostStudent';
import { StudentInterface } from '../interface/StudentInterface';

function ModalAluno() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fristName, setFristName] = useState("");
  
  const studentCreate=usePostStudent()

  const handleStudent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const studentData: StudentInterface = {fristName}
    studentCreate.mutate(studentData)
}

  return (
    <>
      <Button variant="outline-dark" className='fw-bolder btn-lg' onClick={handleShow}>Novo</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Criar/Alterar Aluno</Modal.Title></Modal.Header>
        <Modal.Body>
        <form onSubmit={handleStudent}>
          <div className="mb-3">
              <input className="border border-primary form-control p-2" type="text" name="fristName" id="fristName" placeholder="Nome:" required value={fristName} onChange={event =>setFristName(event.target.value)}/>
          </div>
          <div className="mb-3">
            <select className="border border-primary form-select p-2" aria-label="Default select example" required>
              <option selected>Curso...</option>
              <option value="1">TADS</option>
              <option value="2">TSI</option>
              <option value="3">Biologia</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="border border-primary form-select p-2" aria-label="Default select example" required>
              <option selected>Turno...</option>
              <option value="1">Matutino</option>
              <option value="2">Vespertino</option>
              <option value="3">Noturno</option>
            </select>
          </div>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Salvar</Button>
            <Button variant="secondary" onClick={handleClose}>Sair</Button>
          </Modal.Footer>
          </form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalAluno;
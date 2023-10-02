import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostStudent } from '../hooks/student/usePostStudent';
import { StudentInterface } from '../interface/StudentInterface';
import { usePutStudent } from '../hooks/student/usePutStudent';
import { useGetCourse } from '../hooks/course/useGetCourse';
import { Col, Form, Row } from 'react-bootstrap';

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
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [course, setCourse] = useState("");
  
  const studentCreate=usePostStudent()
  const studentUpdate=usePutStudent()
  const {courses}=useGetCourse()

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      if(idInteface){
        const studentData: StudentInterface = {firstName,lastName,avatar,course,id:idInteface}
        studentUpdate.mutate(studentData)
        window.location.href = window.location.href
      }else{
        const studentData: StudentInterface = {firstName,lastName,course,avatar}
        studentCreate.mutate(studentData)
        window.location.href = window.location.href
      }
    }
}

useEffect(() => {
  if(!studentCreate.isSuccess && studentUpdate.isSuccess) return 
  handleClose();
}, [studentCreate.isSuccess, studentUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>Novo Aluno</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Aluno</>:<>Novo Aluno</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Avatar:</Form.Label>
                <Form.Control required type="text" value={avatar} onChange={event =>setAvatar(event.target.value)}/>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Primeiro Nome:</Form.Label>
                <Form.Control required type="text" value={firstName} onChange={event =>setFirstName(event.target.value)}/>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Sobre Nome:</Form.Label>
                <Form.Control required type="text" value={lastName} onChange={event =>setLastName(event.target.value)}/>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
                <label htmlFor="inputCourse">Cuso:</label>
                <select className="form-select" name="course" required value={course} onChange={event =>setCourse(event.target.value)}>
                  <option selected>{courseInteface}</option>
                  {courses?.map((item) => {return(<option value={item.id}>{item.acronym}</option>)})}
                </select>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </div>
            </Row>
            
            <div className='px-5 gap-5 d-inline-flex'>
              <Button variant="primary" type="submit" className='px-5'>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalStudentComponet;
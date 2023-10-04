import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostTeacher } from '../hooks/teacher/usePostTeacher';
import { TeacherInterface } from '../interface/TeacherInterface';
import { usePutTeacher } from '../hooks/teacher/usePutTeacher';
import { useGetAllSubject } from '../hooks/subject/useGetAllSubject';
import { Col, Form, Row } from 'react-bootstrap';

type data ={
  idInteface?: string,
  firstNameInteface?: string,
  lastNameInteface?: string,
  avatarInteface?: string,
  subjectsInteface?: string,
}

function ModalTeacherComponet({
    idInteface, 
    firstNameInteface, 
    lastNameInteface,
    avatarInteface,
    subjectsInteface
  }:data) {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [subjects, setSubjects] = useState("");

  const teacherCreate=usePostTeacher()
  const teacherUpdate=usePutTeacher()
  const subjectsGet=useGetAllSubject()

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      if(idInteface){
        const teacherData: TeacherInterface = {firstName,lastName,avatar,subjects,id:idInteface}
        teacherUpdate.mutate(teacherData)
        // window.location.href = window.location.href
      }else{
        const teacherData: TeacherInterface = {firstName,lastName,avatar,subjects}
        teacherCreate.mutate(teacherData)
        // window.location.href = window.location.href
      }
    }
  }

useEffect(() => {
  if(!teacherCreate.isSuccess && teacherUpdate.isSuccess) return handleClose(); 
}, [teacherCreate.isSuccess, teacherUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>Novo Professor</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Professor</>:<>Novo Professor</>}</Modal.Title></Modal.Header>
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
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
                <label htmlFor="inputSubjects">Materias:</label>
                <select className="form-select" name="subjects" required value={subjects} onChange={event =>setSubjects(event.target.value)}>
                  <option selected>{subjectsInteface}</option>
                  {subjectsGet.subjects?.map((item) => {return(<option value={item.id}>{item.title}</option>)})}
                  {/* .filter((sub)=>sub.title?.toLocaleLowerCase().includes(subjectInteface)) */}
                </select>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </div>
            </Row>
            <div className='px-lg-5 gap-5 d-inline-flex'>
              <Button variant="primary" type="submit" className='px-5'>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div> 
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalTeacherComponet;
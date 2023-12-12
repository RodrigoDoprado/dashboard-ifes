import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TeacherInterface } from '../interface/TeacherInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createTeacher, updateTeacher } from '../api/TeacherApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMessage, hideMessage } from '../store/ducks/layout';

type data ={
  idInteface?: any,
  firstNameInteface?: any,
  lastNameInteface?: any,
  avatarInteface?: any 
}

function ModalTeacherComponent({
    idInteface, 
    firstNameInteface, 
    lastNameInteface,
    avatarInteface
  }:data) {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const history = useNavigate()
  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const dispatch = useDispatch()
  const teacherCookies = localStorage.getItem("tokenTeacher")

  const addUser = async (data: TeacherInterface) => {
    await createTeacher(data)
    .then(()=>{
      handleClose()
      setTimeout(() => window.location.href = window.location.href, 1500);
      dispatch(showMessage())
      setTimeout(()=>{dispatch(hideMessage())},4500)
    })
    .catch((res)=>{})
  };

  const updateUser = async (data: TeacherInterface) => {
    await updateTeacher(data)
    .then(()=>{
      handleClose()
      setTimeout(() => window.location.href = window.location.href, 1500);
      dispatch(showMessage())
      setTimeout(()=>{dispatch(hideMessage())},4500)
    })
    .catch((res)=>{})
  };
console.log(firstName,lastName,avatar)
  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    if (!idInteface) {
      const teacherData: TeacherInterface = {firstName,lastName,avatar}
      addUser(teacherData);
    } else {
      const teacherData: TeacherInterface = {firstName,lastName,avatar,id:idInteface}
      updateUser(teacherData);
    }
  }
  return (
    <>
    {teacherCookies?
      <>
        <a className="dropdown-item" href="#" onClick={handleShow}>
          <FontAwesomeIcon className='px-2' icon={faUser} size="sm" />
          Meus Dados
        </a>
      </>:
      <>
        {idInteface?
          <Button variant="outline-primary" onClick={handleShow}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>:
          <Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>
            Novo Professor
          </Button>
        }
      </>
    }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>
          {teacherCookies?
            <>
              <FontAwesomeIcon className='px-2' icon={faUser} size="sm" />
              Meus Dados
            </>:
            <>
              {idInteface?
                <>
                  Atualização Professor
                </>:
                <>
                  Novo Professor
                </>
              }
            </>
          }
          
        </Modal.Title></Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Foto:</Form.Label>
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
            </Row>
            <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
            <Button variant="secondary" className='px-3' onClick={handleClose}>Sair</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalTeacherComponent;
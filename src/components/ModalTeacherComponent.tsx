/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TeacherInterface } from '../interface/TeacherInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/ducks/layout';
import { usePostTeacher } from '../hooks/teacher/usePostTeacher';
import { usePutTeacher } from '../hooks/teacher/usePutTeacher';

type data = {
  idInteface?: any;
  firstNameInteface?: any;
  lastNameInteface?: any;
  avatarInteface?: any;
};

function ModalTeacherComponent({
  idInteface,
  firstNameInteface,
  lastNameInteface,
  avatarInteface,
}: data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const dispatch = useDispatch();
  const teacherCookies = localStorage.getItem('tokenTeacher');
  const addTeacher=usePostTeacher()
  const putTeacher=usePutTeacher()


  console.log(firstName, lastName, avatar);
  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (!idInteface) {
      const teacherData: TeacherInterface = { firstName, lastName, avatar };
      addTeacher.mutate(teacherData);
    } else {
      const teacherData: TeacherInterface = {
        firstName,
        lastName,
        avatar,
        id: idInteface,
      };
      putTeacher.mutate(teacherData);
    }
  };
  
  useEffect(() => {
    if (!addTeacher.isSuccess || !putTeacher.isSuccess) return;
    handleClose();
    dispatch(addMessage())
    // dispatch(showMessage());
    // setTimeout(() => {
    //   dispatch(hideMessage());
    // }, 4500);
  }, [addTeacher.isSuccess, putTeacher.isSuccess]);

  return (
    <>
      {teacherCookies ? (
        <>
          <a className="dropdown-item" href="#" onClick={handleShow}>
            <FontAwesomeIcon className="px-2" icon={faUser} size="sm" />
            Meus Dados
          </a>
        </>
      ) : (
        <>
          {idInteface ? (
            <Button variant="outline-primary" onClick={handleShow}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              className="fw-bolder px-lg-5"
              onClick={handleShow}
            >
              Novo Professor
            </Button>
          )}
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {teacherCookies ? (
              <>
                <FontAwesomeIcon className="px-2" icon={faUser} size="sm" />
                Meus Dados
              </>
            ) : (
              <>
                {idInteface ? <>Atualização Professor</> : <>Novo Professor</>}
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Foto:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={avatar}
                  onChange={(event) => setAvatar(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  <p>* Campo Obrigatório</p>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Primeiro Nome:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  <p>* Campo Obrigatório</p>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Sobre Nome:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  * Campo Obrigatório
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={handleSubmit}>
                Salvar
              </Button>
              <Button
                variant="secondary"
                className="px-3"
                onClick={handleClose}
              >
                Sair
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalTeacherComponent;

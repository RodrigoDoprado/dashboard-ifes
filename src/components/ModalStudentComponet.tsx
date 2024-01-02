/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StudentInterface } from '../interface/StudentInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useGetAllCourse } from '../hooks/course/useGetAllCourse';
import { usePutStudent } from '../hooks/student/usePutStudent';
import { usePostStudent } from '../hooks/student/usePostStudent';
import { addMessage } from '../redux/ducks/layout';

type data = {
  idInteface?: string;
  firstNameInteface?: string;
  lastNameInteface?: string;
  avatarInteface?: string;
  courseTitleInteface?: string;
  courseIdInteface?: string;
};

function ModalStudentComponet({
  idInteface,
  firstNameInteface,
  lastNameInteface,
  avatarInteface,
  courseTitleInteface,
  courseIdInteface,
}: data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [course, setCourse] = useState(courseIdInteface);
  const studentCookies = localStorage.getItem('tokenStudent');
  const dispatch = useDispatch();
  const { courses } = useGetAllCourse();
  const addStudent = usePostStudent();
  const putStudent = usePutStudent();

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
      const studentData: StudentInterface = {
        firstName,
        lastName,
        course,
        avatar,
      };
      addStudent.mutate(studentData);
    } else {
      const studentData: StudentInterface = {
        firstName,
        lastName,
        course,
        avatar,
        id: idInteface,
      };
      putStudent.mutate(studentData);
    }
  };

  useEffect(() => {
    if (!addStudent.isSuccess || !putStudent.isSuccess) return;
    handleClose();
    dispatch(addMessage())
  }, [addStudent.isSuccess, putStudent.isSuccess]);

  return (
    <>
      {studentCookies ? (
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
              Novo Aluno
            </Button>
          )}
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {studentCookies ? (
              <>
                <FontAwesomeIcon className="px-2" icon={faUser} size="sm" />
                Meus Dados
              </>
            ) : (
              <>{idInteface ? <>Atualização Aluno</> : <>Novo Aluno</>}</>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
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
                  <p>* Campo Obrigatório</p>
                </Form.Control.Feedback>
              </Form.Group>
              {/* {usercookies?
                <> */}
              <div className="mb-3">
                <label htmlFor="inputCourse">Cuso:</label>
                <select
                  className="form-select"
                  name="course"
                  required
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                >
                  {!courseIdInteface ? (
                    <>
                      <option>Escolha o curso...</option>
                    </>
                  ) : (
                    <>
                      <option value={courseIdInteface}>
                        {courseTitleInteface}
                      </option>
                    </>
                  )}
                  {courses?.map((item) => {
                    return <option value={item.id}>{item.title}</option>;
                  })}
                </select>
                <Form.Control.Feedback type="invalid">
                  * Campo Obrigatório
                </Form.Control.Feedback>
              </div>
              {/* </>:
                <></>
              } */}
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

export default ModalStudentComponet;

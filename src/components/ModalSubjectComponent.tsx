/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SubjectInterface } from '../interface/SubjectInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetAllPeriod } from '../hooks/period/useGetAllCourse';
import { usePostSubject } from '../hooks/subject/usePostSubject';
import { usePutSubject } from '../hooks/subject/usePutSubject';
import { addMessage } from '../redux/ducks/layout';


type data = {
  idInteface?: string;
  titleInteface?: string;
  acronymInteface?: string;
  avatarInteface?: string;
  idPeriodInteface?: any;
  titlePeriodInteface?: string;
};

function ModalSubjectComponent({
  idInteface,
  titleInteface,
  avatarInteface,
  acronymInteface,
  titlePeriodInteface,
  idPeriodInteface,
}: data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const { acronym } = useParams();

  const [title, setTitle] = useState(titleInteface);
  const [acronymSubject, setAcronymSubject] = useState(acronymInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [period, setPeriod] = useState(idPeriodInteface);
  const dispatch = useDispatch();

  const {periods}=useGetAllPeriod(acronym)
  const addSubject=usePostSubject()
  const putSubject=usePutSubject()

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
      const subjectData: SubjectInterface = {
        period,
        title,
        avatar,
        acronym: acronymSubject,
      };
      addSubject.mutate(subjectData);
    } else {
      const subjectData: SubjectInterface = {
        period,
        title,
        avatar,
        acronym: acronymSubject,
        id: idInteface,
      };
      putSubject.mutate(subjectData);
    }
  };
  
  useEffect(() => {
    if (!addSubject.isSuccess && !putSubject.isSuccess) return;
    handleClose();
    dispatch(addMessage())
    // dispatch(showMessage());
    // setTimeout(() => {
    //   dispatch(hideMessage());
    // }, 4500);
  }, [addSubject.isSuccess, putSubject.isSuccess]);

  return (
    <>
      {idInteface ? (
        <Button variant="outline-primary" onClick={handleShow}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      ) : (
        <a className="h5 btn btn-outline-dark btn-lg" onClick={handleShow}>
          Nova Matéria
        </a>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {idInteface ? <>Atualização Matéria</> : <>Nova Matéria</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Imgem:</Form.Label>
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
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  <p>* Campo Obrigatório</p>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Sigla:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={acronymSubject}
                  onChange={(event) => setAcronymSubject(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  * Campo Obrigatório
                </Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
                <label htmlFor="inputPeriod">Semestre:</label>
                <select
                  className="form-select"
                  name="period"
                  required
                  value={period}
                  onChange={(event) => setPeriod(event.target.value)}
                >
                  <option selected>{titlePeriodInteface}</option>
                  {periods?.map((item) => {
                    return <option value={item.id}>{item.title}</option>;
                  })}
                </select>
                <Form.Control.Feedback type="invalid">
                  <p>* Campo Obrigatório</p>
                </Form.Control.Feedback>
              </div>
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

export default ModalSubjectComponent;

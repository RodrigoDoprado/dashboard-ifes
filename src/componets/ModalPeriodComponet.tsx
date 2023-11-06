import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { PeriodInterface } from '../interface/PeriodInterface';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { createPeriod, updatePeriod } from '../api/PeriodApi';

type data ={
  idInteface?: string,
  titleInteface?: string
  couserInteface?: string
}

function ModalPeriodComponet({idInteface,titleInteface,couserInteface}:data) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState(titleInteface);

  useEffect(() => {
    handleClose();
  }, [])

  const addUser = async (data: PeriodInterface) => {
    const response = await createPeriod(data)
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data: PeriodInterface) => {
    const response = await updatePeriod(data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };
 

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    if (!idInteface) {
      const periodData: PeriodInterface = {title,course: couserInteface}
      addUser(periodData);
    } else {
      const periodData: PeriodInterface = {course: couserInteface,title,id:idInteface}
      updateUser(periodData);
    }
}

  return (
    <>
      {idInteface?
        <a className='btn btn-outline-dark'
          onClick={handleShow}>
          <p className="h5">{titleInteface}&nbsp;<FontAwesomeIcon icon={faPenToSquare} /></p>
        </a>:
        <a 
          className="h5 btn btn-outline-dark btn-lg" 
          onClick={handleShow}>
            Novo Periodo
        </a>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Periodo</>:<>Novo Periodo</>}</Modal.Title></Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control required type="text" value={title} onChange={event =>setTitle(event.target.value)}/>
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className='px-lg-5 gap-5 d-inline-flex'>
              <Button variant="primary" className='px-5' type="submit">Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPeriodComponet;
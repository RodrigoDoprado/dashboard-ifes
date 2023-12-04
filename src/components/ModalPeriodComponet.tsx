import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { PeriodInterface } from '../interface/PeriodInterface';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { createPeriod, updatePeriod } from '../api/PeriodApi';
import { useDispatch } from 'react-redux';
import { showMessageSuccess, hideMessageSuccess } from '../store/layout';

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
  const dispatch = useDispatch()

  useEffect(() => {
    handleClose();
  }, [])

  const addUser = async (data: PeriodInterface) => {
    await createPeriod(data)
    .then(()=>{
      handleClose()
      dispatch(showMessageSuccess())
      setTimeout(()=>{dispatch(hideMessageSuccess())},2500)
      setTimeout(() => window.location.href = window.location.href, 2500);    
    })
    .catch((res)=>{})
  };

  const updateUser = async (data: PeriodInterface) => {
    await updatePeriod(data)
    .then(()=>{
      handleClose()
      dispatch(showMessageSuccess())
      setTimeout(()=>{dispatch(hideMessageSuccess())},2500)
      setTimeout(() => window.location.href = window.location.href, 2500);    
    })
    .catch((res)=>{})
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
        <a style={{cursor:"pointer"}}
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
            <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
            <Button variant="secondary" className='px-3' onClick={handleClose}>Sair</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPeriodComponet;
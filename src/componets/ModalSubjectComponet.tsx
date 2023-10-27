import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SubjectInterface } from '../interface/SubjectInterface';
import { usePostSubject } from '../hooks/subject/usePostSubject';
import { usePutSubject } from '../hooks/subject/usePutSubject';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAllPeriod } from '../hooks/period/useGetAllCourse';
import { useParams } from 'react-router-dom';

type data ={
  idInteface?: string,
  titleInteface?: string,
  acronymInteface?: string,
  avatarInteface?: string,
  idPeriodInteface?: any,
  titlePeriodInteface?: string,
}

function ModalSubjectComponet({
  idInteface, 
  titleInteface,
  avatarInteface,
  acronymInteface,
  titlePeriodInteface,
  idPeriodInteface,
}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);
  const {acronym} = useParams();
  const [title, setTitle] = useState(titleInteface);
  const [acronymSubject, setAcronymSubject] = useState(acronymInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [period, setPeriod] = useState(idPeriodInteface);
  const subjectCreate=usePostSubject()
  const subjectUpdate=usePutSubject()
  const {periods}=useGetAllPeriod(acronym) 

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      if(idInteface){
        const subjectData: SubjectInterface = {period,title,avatar,acronym:acronymSubject,id:idInteface}
        subjectUpdate.mutate(subjectData)
        window.location.href = window.location.href
      }else{
        const subjectData: SubjectInterface = {period,title,avatar,acronym:acronymSubject}
        subjectCreate.mutate(subjectData)
        window.location.href = window.location.href
      }
    }
}

useEffect(() => {
  if(!subjectCreate.isSuccess && subjectUpdate.isSuccess) return 
  handleClose();
}, [subjectCreate.isSuccess, subjectUpdate.isSuccess])

  return (
    <>
      {idInteface?
        <Button 
          variant="outline-primary" 
          onClick={handleShow}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>:
        <a 
        className="h5 btn btn-outline-light btn-lg" 
        onClick={handleShow}>
          Nova Matéria
        </a>
      }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Matéria</>:<>Nova Matéria</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Avatar:</Form.Label>
                <Form.Control required type="text" value={avatar} onChange={event =>setAvatar(event.target.value)}/>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control required type="text" value={title} onChange={event =>setTitle(event.target.value)}/>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Sigla:</Form.Label>
                <Form.Control required type="text" value={acronymSubject} onChange={event =>setAcronymSubject(event.target.value)}/>
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
                <label htmlFor="inputPeriod">Semestre:</label>
                <select className="form-select" name="period" required value={period} onChange={event =>setPeriod(event.target.value)}>
                  <option selected>{titlePeriodInteface}</option>
                  {periods?.map((item) => {return(<option value={item.id}>{item.title}</option>)})}
                </select>
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </div>
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

export default ModalSubjectComponet;
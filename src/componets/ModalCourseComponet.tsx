import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePostCourse } from '../hooks/course/usePostCourse';
import { usePutCourse } from '../hooks/course/usePutCourse';
import { CourseInterface } from '../interface/CourseInterface';
import { useGetAllTeacher } from '../hooks/teacher/useGetAllTeacher';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type data ={
  idInteface?: string,
  avatarInteface?: string
  titleInteface?: string
  acronymInteface?: string
  teacherNameInteface?: string
  teacherIdInteface?: string
}

function ModalCourseComponet({
  idInteface,
  avatarInteface, 
  titleInteface,
  acronymInteface,
  teacherIdInteface,
  teacherNameInteface
}:data) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const [avatar, setAvatar] = useState(avatarInteface);
  const [title, setTitle] = useState(titleInteface);
  const [acronym, setAcronym] = useState(acronymInteface);
  const [teacher, setTeacher] = useState(teacherIdInteface);

  const courseCreate=usePostCourse()
  const courseUpdate=usePutCourse()
  const {teachers}=useGetAllTeacher()
 

  const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      if(idInteface){
        const couseData: CourseInterface = {title,acronym,avatar,teacher,id:idInteface}
        courseUpdate.mutate(couseData)
      }else{
        const couseData: CourseInterface = { title, acronym, teacher, avatar}
        courseCreate.mutate(couseData)
      }
    }
}

useEffect(() => {
  if(!courseCreate.isSuccess && courseUpdate.isSuccess) return 
  handleClose();
}, [courseCreate.isSuccess, courseUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-secondary" onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} /></Button>:<Button variant="outline-dark" className='fw-bolder' onClick={handleShow}>Novo Curso</Button>} 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Curso</>:<>Novo Curso</>}</Modal.Title></Modal.Header>
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
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Sigle:</Form.Label>
                <Form.Control required type="text" value={acronym} onChange={event =>setAcronym(event.target.value)}/>
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
              <label htmlFor="inputTeacher">Orientador:</label>
              <select className="form-select" name="teacher" required value={teacher} onChange={event =>setTeacher(event.target.value)}>
                <option value={teacherIdInteface}>{teacherNameInteface}</option>
                {teachers?.map((item) => {return(<option value={item.id}>{item.firstName+" "+item.lastName}</option>)})}
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

export default ModalCourseComponet;
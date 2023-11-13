import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CourseInterface } from '../interface/CourseInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TeacherInterface } from '../interface/TeacherInterface';
import { getTeachers } from '../api/TeacherApi';
import { toast } from 'react-toastify';
import { createCourse, updateCourse } from '../api/CourseApi';

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
  const [validated, setValidated] = useState(true);

  const [avatar, setAvatar] = useState(avatarInteface);
  const [title, setTitle] = useState(titleInteface);
  const [acronym, setAcronym] = useState(acronymInteface);
  const [teacher, setTeacher] = useState(teacherIdInteface);
  const [teachers, setTeachers] = useState<TeacherInterface[]>([]);

  useEffect(() => {
    getAllTeacher()
    handleClose();
  }, [])

  const getAllTeacher = async () => {
    const response = await getTeachers()
    if (response.status === 200) {
      setTeachers(response.data);
    }
  };

  const addUser = async (data: CourseInterface) => {
    const response = await createCourse(data)
    if (response.status === 201) {
      toast.success(response.data);
    }else{alert(response.data)}
  };

  const updateUser = async (data: CourseInterface) => {
    const response = await updateCourse(data);
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
      const couseData: CourseInterface = { title, acronym, teacher, avatar}
      addUser(couseData);
    } else {
      const couseData: CourseInterface = {title,acronym,avatar,teacher,id:idInteface}
      updateUser(couseData);
    }
  }



  return (
    <>
    {idInteface?<Button variant="outline-secondary" onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} /></Button>:<Button variant="outline-dark" className='fw-bolder' onClick={handleShow}>Novo Curso</Button>} 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Curso</>:<>Novo Curso</>}</Modal.Title></Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Imagem:</Form.Label>
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
            <div className='px-4 gap-5 d-inline-flex'>
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
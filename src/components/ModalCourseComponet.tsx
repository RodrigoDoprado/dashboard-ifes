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
import { showMessageSuccess, hideMessageSuccess } from '../store/layout';
import { useDispatch } from 'react-redux';

type data ={
  idInteface?: string,
  avatarInteface?: string
  titleInteface?: string
  acronymInteface?: string
  teacherNameInteface?: string
  teacherIdInteface?: string
}

function ModalCourseComponent({
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
  const [teachers, setTeachers] = useState<TeacherInterface[]>([]);
  const dispatch = useDispatch()

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
    await createCourse(data)
    .then(()=>{
      handleClose()
      dispatch(showMessageSuccess())
      setTimeout(()=>{dispatch(hideMessageSuccess())},2500)
      setTimeout(() => window.location.href = window.location.href, 2500);
      })
    .catch(()=>{})
  }; 

  const updateUser = async (data: CourseInterface) => {
    await updateCourse(data)
    .then(()=>{
      handleClose()
      dispatch(showMessageSuccess())
      setTimeout(()=>{dispatch(hideMessageSuccess())},2500)
      setTimeout(() => window.location.href = window.location.href, 2500);
      })
    .catch(()=>{})
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
              {!idInteface?<></>:<>
                <div className="mb-3">
                  <label htmlFor="inputTeacher">Professor Orientador:</label>
                  <select className="form-select" name="teacher" required value={teacher} onChange={event =>setTeacher(event.target.value)}>
                  {!teacherIdInteface?<><option>Escolhar...</option></>:<><option value={teacherIdInteface}>{teacherNameInteface}</option></>}
                    {teachers?.map((item) => {return(<option value={item.id}>{item.firstName+" "+item.lastName}</option>)})}
                  </select>
                  <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
                </div>
            </>}
            </Row>
            <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
            <Button variant="secondary" className='px-3' onClick={handleClose}>Sair</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCourseComponent;
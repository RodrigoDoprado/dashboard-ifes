import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StudentInterface } from '../interface/StudentInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStudent, updateStudent } from '../api/StudentApi';
import { toast } from 'react-toastify';
import { getCourses } from '../api/CourseApi';
import { CourseInterface } from '../interface/CourseInterface';

type data ={
  idInteface?: string,
  firstNameInteface?: string,
  lastNameInteface?: string,
  avatarInteface?: string,
  courseTitleInteface?: string
  courseIdInteface?: string
}

function ModalStudentComponet({
  idInteface, 
  firstNameInteface, 
  lastNameInteface,
  avatarInteface,
  courseTitleInteface,
  courseIdInteface
}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState(firstNameInteface);
  const [lastName, setLastName] = useState(lastNameInteface);
  const [avatar, setAvatar] = useState(avatarInteface);
  const [course, setCourse] = useState(courseIdInteface);
  
  const [courses, setCourses] = useState<CourseInterface[]>([]);

  useEffect(() => {
    getAllCourse();
  }, []);

  const getAllCourse = async () => {
    const response = await getCourses()
    if (response.status === 200) {
      setCourses(response.data);
    }
  };
  // const {courses}=useGetAllCourse()

  const addUser = async (data: StudentInterface) => {
    const response = await createStudent(data)
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data: StudentInterface) => {
    const response = await updateStudent(data);
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
      const studentData: StudentInterface = {firstName,lastName,course,avatar}
      addUser(studentData);
    } else {
      const studentData: StudentInterface = {firstName,lastName,course,avatar,id:idInteface}
      updateUser(studentData);
    }
}

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} /></Button>:<Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>Novo Aluno</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Atualização Aluno</>:<>Novo Aluno</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Avatar:</Form.Label>
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
                <Form.Control.Feedback type="invalid"><p>* Campo Obrigatório</p></Form.Control.Feedback>
              </Form.Group>
              <div className="mb-3">
                <label htmlFor="inputCourse">Cuso:</label>
                <select className="form-select" name="course" required value={course} onChange={event =>setCourse(event.target.value)}>
                  <option value={courseIdInteface}>{courseTitleInteface}</option>
                  {courses?.map((item) => {return(<option value={item.id}>{item.title}</option>)})}
                </select>
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </div>
            </Row>
            
            <div className='px-lg-5 gap-5 d-inline-flex'>
              <Button variant="primary" type="submit" className='px-5'>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalStudentComponet;
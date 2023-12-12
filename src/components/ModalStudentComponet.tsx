import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StudentInterface } from '../interface/StudentInterface';
import { Col, Form, Row } from 'react-bootstrap';
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStudent, updateStudent } from '../api/StudentApi';
import { useDispatch } from 'react-redux';
import { useGetAllCourse } from '../hooks/course/useGetAllCourse';
import { hideMessage, showMessage } from '../store/ducks/layout';

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
  // const [courses, setCourses] = useState<CourseInterface[]>([]);
  const studentCookies = localStorage.getItem("tokenStudent")
  const usercookies = localStorage.getItem("token")
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getAllCourse();
  // }, []);

  // const getAllCourse = async () => {
  //   await getCourses().then((response)=>{setCourses(response.data)})
  // };

  const {courses}=useGetAllCourse()

  const addUser = async (data: StudentInterface) => {
    await createStudent(data)
    .then(()=>{
      handleClose()
      setTimeout(() => window.location.href = window.location.href, 1500);
      dispatch(showMessage())
      setTimeout(()=>{dispatch(hideMessage())},4500)
      })
    .catch(()=>{})
  };

  const updateUser = async (data: StudentInterface) => {
    await updateStudent(data)
    .then(()=>{
      handleClose()
      setTimeout(() => window.location.href = window.location.href, 1500);
      dispatch(showMessage())
      setTimeout(()=>{dispatch(hideMessage())},4500)    
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
      const studentData: StudentInterface = {firstName,lastName,course,avatar}
      addUser(studentData);
    } else {
      const studentData: StudentInterface = {firstName,lastName,course,avatar,id:idInteface}
      updateUser(studentData);
    }
}

  return (
    <>
    {studentCookies?
      <>
        <a className="dropdown-item" href="#" onClick={handleShow}>
          <FontAwesomeIcon className='px-2' icon={faUser} size="sm" />
          Meus Dados
        </a>
      </>:
      <>
        {idInteface?
          <Button variant="outline-primary" onClick={handleShow}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>:
          <Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>
            Novo Aluno
          </Button>
        }
      </>
    }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>
          {studentCookies?<><FontAwesomeIcon className='px-2' icon={faUser} size="sm" />Meus Dados</>:<>{idInteface?<>Atualização Aluno</>:<>Novo Aluno</>}</>}
        </Modal.Title></Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Foto:</Form.Label>
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
              {/* {usercookies?
                <> */}
                  <div className="mb-3">
                    <label htmlFor="inputCourse">Cuso:</label>
                    <select className="form-select" name="course" required value={course} onChange={event =>setCourse(event.target.value)}>
                    {!usercookies?<><option>Escolhar...</option></>:<><option value={courseIdInteface}>{courseTitleInteface}</option></>}
                      {courses?.map((item) => {return(<option value={item.id}>{item.title}</option>)})}
                    </select>
                    <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
                  </div>
                {/* </>:
                <></>
              } */}
            </Row>
            <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
            <Button variant="secondary" className='px-3' onClick={handleClose}>Sair</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalStudentComponet;
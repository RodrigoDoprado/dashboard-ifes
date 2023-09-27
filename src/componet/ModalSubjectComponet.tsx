import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SubjectInterface } from '../interface/SubjectInterface';
import { usePostSubject } from '../hooks/subject/usePostSubject';
import { usePutSubject } from '../hooks/subject/usePutSubject';

type data ={
  idInteface?: string,
  titleInteface?: string,
  acronymInteface?: string,
  avatarInteface?: string,
}

function ModalSubjectComponet({idInteface, titleInteface,avatarInteface,acronymInteface}:data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(titleInteface);
  const [acronym, setAcronym] = useState(acronymInteface);
  const [avatar, setAvatar] = useState(avatarInteface);

  const subjectCreate=usePostSubject()
  const subjectUpdate=usePutSubject()

  const handleSubject = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if(idInteface){
      const subjectData: SubjectInterface = {title,avatar,acronym,id:idInteface}
      subjectUpdate.mutate(subjectData)
      window.location.href = window.location.href
    }else{
      const subjectData: SubjectInterface = {title,avatar,acronym}
      subjectCreate.mutate(subjectData)
      window.location.href = window.location.href
    }
}

useEffect(() => {
  if(!subjectCreate.isSuccess && subjectUpdate.isSuccess) return 
  handleClose();
}, [subjectCreate.isSuccess, subjectUpdate.isSuccess])

  return (
    <>
    {idInteface?<Button variant="outline-primary" onClick={handleShow}>editar</Button>:<Button variant="outline-dark" className='fw-bolder px-lg-5' onClick={handleShow}>Nova Matéria</Button>}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>{idInteface?<>Alterar Matéria</>:<>Nova Matéria</>}</Modal.Title></Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="inputAvatar">AvatarUrl:</label>
                <input className="border border-primary form-control" type="text" name="avatar" required value={avatar} onChange={event =>setAvatar(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputFristName">Titulo:</label>
                <input className="border border-primary form-control" type="text" name="title" required value={title} onChange={event =>setTitle(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputFristName">Sigla:</label>
                <input className="border border-primary form-control" type="text" name="acronym" required value={acronym} onChange={event =>setAcronym(event.target.value)}/>
            </div>
            {/* <div className="mb-3">
              <select className="border border-primary form-select p-2" aria-label="Default select example" required>
                <option selected>Cursos...</option>
                {courses?.map((item) => {return(<option value={item.id}>{item.acronym}</option>)})}
              </select>
            </div> */}
            <div className="d-grid d-inline-flex gap-5 px-4 mt-3">
              <Button variant="primary" className='px-5' onClick={handleSubject}>Salvar</Button>
              <Button variant="secondary" className='px-5' onClick={handleClose}>Sair</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalSubjectComponet;
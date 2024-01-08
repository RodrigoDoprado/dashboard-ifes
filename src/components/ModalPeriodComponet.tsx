/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Col, Form, Row } from 'react-bootstrap'
import { PeriodInterface } from '../interface/PeriodInterface'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { usePostPeriod } from '../hooks/period/usePostCourse'
import { usePutPeriod } from '../hooks/period/usePutCourse'
import { addMessage } from '../redux/ducks/layout'

type data = {
  idInteface?: string
  titleInteface?: string
  couserInteface?: string
}

function ModalPeriodComponet({ idInteface, titleInteface, couserInteface }: data) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [validated, setValidated] = useState(false)
  const [title, setTitle] = useState(titleInteface)
  const dispatch = useDispatch()

  const addPeriod = usePostPeriod()
  const putPeriod = usePutPeriod()

  const handleSubmit = (event: {
    currentTarget: any
    preventDefault: () => void
    stopPropagation: () => void
  }) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
    if (!idInteface) {
      const periodData: PeriodInterface = { title, course: couserInteface }
      addPeriod.mutate(periodData)
    } else {
      const periodData: PeriodInterface = {
        course: couserInteface,
        title,
        id: idInteface,
      }
      putPeriod.mutate(periodData)
    }
  }

  useEffect(() => {
    if (!addPeriod.isSuccess && !putPeriod.isSuccess) return
    handleClose()
    dispatch(addMessage("Já registrado com Sucesso"))
  }, [addPeriod.isSuccess, putPeriod.isSuccess])

  return (
    <>
      {idInteface ? (
        <a style={{ cursor: 'pointer' }} onClick={handleShow}>
          <p className="h5">
            {titleInteface}&nbsp;
            <FontAwesomeIcon icon={faPenToSquare} />
          </p>
        </a>
      ) : (
        <a className="h5 btn btn-outline-dark btn-lg" onClick={handleShow}>
          Novo Periodo
        </a>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{idInteface ? <>Atualização Periodo</> : <>Novo Periodo</>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">* Campo Obrigatório</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={handleSubmit}>
                Salvar
              </Button>
              <Button variant="secondary" className="px-3" onClick={handleClose}>
                Sair
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalPeriodComponet

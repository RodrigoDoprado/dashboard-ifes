/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../../redux/ducks/layout'
import './Messages.css'

function MessagesComponent({ message }: any) {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeMessage(message))
    }, 4500)
  }, [dispatch, message])

  return (
    <Alert id="message" key="success" variant="success" className="sticky-top py-3">
      {message}
    </Alert>
  )
}
export default MessagesComponent

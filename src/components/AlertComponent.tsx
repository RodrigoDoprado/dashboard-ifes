/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import MessagesComponent from './MessagesComponent'

function AlertComponent() {
  // const isShow = useSelector((state: RootState) => state.layout.showMessage);
  const { messages } = useSelector((state: RootState) => state.layout)
  return (
    <div className="d-flex justify-content-end">
      {messages.map((mg, index) => (
        <MessagesComponent key={index} message={mg} />
      ))}
    </div>
  )
}

export default AlertComponent

{
  /*
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
 */
}

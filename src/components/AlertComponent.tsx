/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { useMessage } from '../redux/ducks/layout'
import MessagesComponent from './messagesComponent'

function AlertComponent() {
  // const isShow = useSelector((state: RootState) => state.layout.showMessage);
  const messages = useSelector(useMessage)
  return (
    <div className="d-flex justify-content-end">
      {messages.map((mg, index) => (
        <MessagesComponent type={index} message={mg.text} />
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

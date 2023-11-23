import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { MyStateInterface } from '../interface/MyStateInterface';

function AlertComponent() {
  const isShow = useSelector((state:MyStateInterface)=>state.layout.showMessage)
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default AlertComponent;
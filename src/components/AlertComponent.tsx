import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store';
import './AlertComponent.css';

function AlertComponent() {
  const isShow = useSelector((state: RootState) => state.layout.showMessage);
  // const {messages} = useSelector((state: RootState)=>state.layout)
  return (
    <React.Fragment>
      {isShow && (
        <div className="d-flex justify-content-end">
          <Alert
            id="message"
            key="success"
            variant="success"
            style={{ position: 'absolute' }}
            className=""
          >
            Cadastrado com Sucesso !
          </Alert>
        </div>
      )}
    </React.Fragment>
  );
}

export default AlertComponent;

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

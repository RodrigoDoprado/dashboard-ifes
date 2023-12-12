import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store';
import "./AlertComponent.css"

function AlertComponent() {
  const isShowSuccess = useSelector((state: RootState)=>state.layout.showMessage)
  return (
    <React.Fragment>
      {isShowSuccess && (
        <div className='d-flex justify-content-end'>
          <Alert 
            id="message"
            key="success" 
            variant="success" 
            style={{position:"absolute"}}
            className=''
          >
            Cadastrado com Sucesso !
          </Alert>
        </div>
      )}
    </React.Fragment>
  );
}

export default AlertComponent;


{/*
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
 */}
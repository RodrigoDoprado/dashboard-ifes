import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store';

function AlertComponent() {
  const isShowSuccess = useSelector((state: RootState)=>state.layout.showMessage)
  return (
    <React.Fragment>
      {isShowSuccess && (
        <div className='d-flex justify-content-end'>
          <Alert 
            key="success" 
            variant="success" 
            style={{position:"absolute",width:"40%"}}
            className='mt-5'
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
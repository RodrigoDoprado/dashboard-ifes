import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store';

function AlertComponent() {
  const isShowSuccess = useSelector((state: RootState)=>state.layout.showMessage)
  return (
    <React.Fragment>
      {isShowSuccess && (
      <Alert key="success" variant="success">
          Cadastrado Com Sucesso !!!
        </Alert>
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
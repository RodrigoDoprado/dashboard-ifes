import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { MyStateInterface } from '../interface/MyStateInterface';
import React from 'react';

function AlertComponent() {
  const isShow = useSelector((state:MyStateInterface)=>state.layout.showMessage)
  return (
    <React.Fragment>
      {isShow && (
      <Alert key="success" variant="success">
          This is a success alert—check it out!
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
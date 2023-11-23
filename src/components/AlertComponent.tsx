import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { MyStateInterface } from '../interface/MyStateInterface';
import React from 'react';

function AlertComponent() {
  const isShowSuccess = useSelector((state:MyStateInterface)=>state.layout.showMessageSuccess)
  const isShowDanger = useSelector((state:MyStateInterface)=>state.layout.showMessageDanger)
  return (
    <React.Fragment>
      {isShowSuccess && (
      <Alert key="success" variant="success">
          This is a success alert—check it out!
        </Alert>
      )}
      {isShowDanger && (
      <Alert key="danger" variant="danger">
          This is a danger alert—check it out!
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
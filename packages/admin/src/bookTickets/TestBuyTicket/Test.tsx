import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { TestContain, ToastContentContain } from './styles';

const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Đăng nhập thành công</h3>
    <Button className="btn-close-toast">Đóng</Button>
  </ToastContentContain>
);

const TestBuyTicket = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayDialog = () => {
    toast.success(<Msg />, {
      icon: false,
      position: 'top-center',
      style: { marginTop: '35%', minWidth: '444px' },
      closeButton: false,
      hideProgressBar: true,
      pauseOnHover: false,
      autoClose: 2000,
    });
  };

  return (
    <>
      <TestContain>
        <Button onClick={displayDialog} role="presentation">
          click me
        </Button>
        {/* <ToastContainer
          className="toast-position"
          // closeButton={false}
          // position="top-center"
          // autoClose={5000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          // theme="light"
        /> */}
        {/* <ToastContainer /> */}
      </TestContain>
    </>
  );
};

export default TestBuyTicket;

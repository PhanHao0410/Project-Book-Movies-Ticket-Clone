import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const TestContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 600px;
  border: 1px solid red;
  padding-top: 130px;
  .toast-container {
    top: 600px;
  }
`;

export const ToastContentContain = styled.div`
  padding: 10px 0;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 20px 0;

  .icon-toastify {
    transform: scale(3) !important;
    color: RGB(66 215 66) !important;
    margin-bottom: 40px;
  }
  h3 {
    color: black;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .btn-close-toast {
    background-color: RGB(39 120 196) !important;
    color: white !important;
    padding: 8px 30px !important;
    font-size: 18px;
  }
`;

import styled from 'styled-components';
import { Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

import { devices } from '../DeviceScreen';

export const PurchaseTicketContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding-top: 65px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding-bottom: 40px;
  display: flex;
  @media ${devices.maxlg} {
    display: block;
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(19, 8, 49);
  display: flex;
  justify-content: center;
  img {
    width: 400px;
    height: 400px;
  }
`;

export const SeatCotain = styled.div`
  width: 68%;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  .all-seat {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    row-gap: 10px;
    .seat-booked {
      background-color: rgb(118, 118, 118) !important;
      opacity: 0.8;
      cursor: default;
    }
    .seat-vip {
      background-color: rgb(255, 165, 0) !important;
    }
    .seat-selecter {
      background-color: rgb(0, 128, 0) !important;
    }
  }
  .note-type-seat {
    width: 30%;
    display: grid;
    grid-template-columns: repeat(3, 80px);
    margin: 30px auto;
    span {
      font-size: 1rem;
      letter-spacing: 0.00938em;
      line-height: 1.5;
      color: black;
      font-weight: 400;
      display: block;
      margin-top: 10px;
    }
    .color-seat-placed {
      background-color: rgb(118, 118, 118) !important;
      cursor: default;
    }
    .color-seat-normal {
      background-color: rgb(233, 233, 233) !important;
      cursor: default;
    }
    .color-seat-vip {
      background-color: rgb(255, 165, 0) !important;
      cursor: default;
    }
  }
  @media ${devices.maxXl} {
    width: 60%;
    .all-seat {
      grid-template-columns: repeat(10, 1fr);
    }
  }
  @media ${devices.maxlg} {
    width: 100%;
    .all-seat {
      width: 90%;
      grid-template-columns: repeat(16, 1fr);
      @media ${devices.maxmd} {
        grid-template-columns: repeat(10, 1fr);
      }
    }
  }
`;
export const ButtonSelectSeat = styled(Button)`
  height: 37px !important;
  width: 37px !important;
  border-radius: 5px !important;
  background-color: rgb(233, 233, 233) !important;
  min-width: unset !important;
  color: black !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  &:hover {
    background-color: RGB(247 247 247) !important;
  }
`;

export const FormBuyContain = styled.div`
  width: 32%;
  height: 100%;
  @media ${devices.maxXl} {
    width: 40%;
  }
  @media ${devices.maxlg} {
    width: 100%;
    padding: 0 30px;
  }
`;

export const CardBookContain = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px grey;
  background-color: #fff;
  padding: 0 24px 30px 24px;
  .total-bill {
    color: rgb(139, 195, 74);
    font-size: 35px;
    text-align: center;
    font-weight: 400;
    padding: 30px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .element-contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    max-height: 200px;
    padding-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.167;
    }
    h3 {
      color: #108f3e;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.167;
      span {
        color: red;
      }
    }
  }
`;

export const ButtonBookTicket = styled(Button)`
  background-color: RGB(251 66 38) !important;
  width: 100% !important;
  border-radius: 0 !important;
  color: white !important;
  font-weight: 500 !important;
  font-size: 25px !important;
  &:hover {
    background-color: RGB(169 46 27) !important;
  }
`;

export const IconErrorSignIn = styled(ErrorOutlineIcon)`
  transform: scale(3.5);
  color: #f27474;
`;

export const DialogTextContain = styled(DialogContentText)`
  .dialog-text-title {
    color: #595959;
    font-size: 1.875em;
    font-weight: 600;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 10px;
  }
  .dialog-text-content {
    font-size: 1.125em;
    font-weight: 400;
    text-align: center;
    word-wrap: break-word;
    color: #545454;
  }
`;

export const DialogActionContain = styled(DialogActions)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .btn {
    color: white;
    font-size: 1.0625em;
    text-transform: none;
    font-weight: 400;
    padding: 5px 15px;
    margin: 0 10px;
  }
  .btn-agree {
    background-color: #2778c4;
    &:hover {
      background-color: RGB(32 92 148);
    }
  }
  .btn-refuse {
    background-color: #d14529;
    &:hover {
      background-color: RGB(184 61 36);
    }
  }
`;

export const DialogContain = styled(Dialog)`
  padding: 30px 10px;
  #alert-dialog-title {
    text-align: center;
    margin: 40px 0;
    .icon-ask-dialog {
      transform: scale(3.5);
      color: RGB(6 180 6);
    }
  }
  #dialog-content {
    text-align: center;
    h3 {
      color: RGB(80 79 79);
      font-size: 1.875em;
      font-weight: 600;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
  }
  #dialog-action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .btn {
      padding: 6px 15px;
      background-color: rgb(39, 120, 196);
      color: white;
      text-transform: none;
      margin-right: 13px;
      font-size: 18px;
      &:hover {
        background-color: RGB(14 74 130) !important;
      }
    }
  }
`;

export const ToastContentContain = styled.div`
  padding: 10px 0;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

  .icon-toastify {
    transform: scale(3) !important;
    color: RGB(41 130 214) !important;
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

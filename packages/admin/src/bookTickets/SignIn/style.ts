import styled from 'styled-components';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

export const SignInContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow-x: hidden;
  padding-top: 130px;
  overflow-y: hidden;
`;

export const ImageBackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  overflow-y: hidden;
`;

export const CardSignIn = styled(Card)`
  position: absolute;
  z-index: 2;
  width: 444px;
  display: flex;
  top: 130px;
  overflow-x: hidden;
  .show-error-input {
    color: #f44336;
    font-size: 0.75rem;
    margin-top: 5px;
    margin-left: 5px;
    line-height: 1.66;
    font-weight: 400;
    letter-spacing: 0.03333em;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #f44336;
  }
  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
`;

export const AvatarDialogSignIn = styled(AccountCircleIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(251, 66, 38);
  transform: scale(2);
  width: 100% !important;
  margin-top: 15px;
`;

export const TitleDialogSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  left: 0;
  margin-left: -10px;
  div {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ButtonSignIn = styled(Button)`
  margin-top: 30px !important;
  outline: none !important;
  width: 100%;
  background-color: RGB(251 66 38) !important;
  color: white !important;
  &:hover {
    background-color: RGB(135 37 37) !important;
  }
`;

export const DirectionSignUp = styled.div`
  width: 100%;
  display: flex;
  right: 0;
  margin-top: 20px;
  justify-content: flex-end;
  font-weight: 600;
  text-decoration: underline;
  font-size: 16px;
  span {
    cursor: pointer;
    &:active {
      color: RGB(251 66 38);
    }
  }
`;

export const ShowErrorSignIn = styled.div`
  background-color: rgb(253, 236, 234);
  width: 100%;
  border-radius: 4px;
  padding: 12px 20px;
  .icon-err-signin {
    color: #f44336;
    transform: scale(1);
  }
  span {
    padding-left: 12px;
    color: rgb(97, 26, 21);
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
`;

export const DialogContain = styled(Dialog)`
  #alert-dialog-title {
    margin: 0 auto;
    .icon-success-signin {
      transform: scale(3.5);
      color: RGB(141 226 96);
      margin: 40px 0;
    }
  }
  #alert-dialog-description {
    text-align: center;
    h3 {
      color: black;
      font-size: 35px;
    }
  }
  .button-close {
    margin: 0 auto;
    padding: 7px 15px;
    background-color: rgb(39, 120, 196);
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: RGB(27 95 159);
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

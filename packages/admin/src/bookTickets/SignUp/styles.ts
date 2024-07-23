import styled from 'styled-components';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 110vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding-top: 65px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ImageBackGround = styled.div`
  width: 100%;
  height: 100%;
  min-height: 110vh;
  background-image: url('https://sb.tinhte.vn/2021/09/5634256_phim-marvel-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  color: white;
  filter: brightness(30%);
  overflow-x: hidden;
`;

export const CardSignIn = styled(Card)`
  position: absolute;
  z-index: 2;
  width: 444px;
  display: flex;
  top: 100px;
  margin-bottom: 40px !important;
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
  margin-bottom: 15px;
`;

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  left: 0;
  margin-left: -10px;
  p {
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

export const ShowErrorSignUp = styled.div`
  background-color: rgb(253, 236, 234);
  width: 100%;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 8px;
  .icon-err-signup {
    color: #f44336 !important;
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

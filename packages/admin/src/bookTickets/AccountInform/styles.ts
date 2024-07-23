import styled from 'styled-components';
import { Button } from '@mui/material';

import { devices } from '../DeviceScreen';

export const AccountInformContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding-top: 65px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow-x: hidden;
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
export const AccountContain = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const FormAccountContain = styled.div`
  width: 960px;
  height: 90%;
  padding: 24px;
  margin: 0 auto;
  @media ${devices.maxlg} {
    max-width: 960px;
    width: 95%;
  }
`;

export const FormSettingContain = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  padding: 12px;
  .title-form-setting {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    h3 {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.167;
      letter-spacing: -0.01562em;
    }
    h5 {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.235;
      letter-spacing: 0.00735em;
    }
  }
  .show-error-input {
    color: #f44336;
    font-size: 0.75rem;
    margin-top: 5px;
    margin-left: 5px;
    line-height: 1.66;
    font-weight: 400;
    letter-spacing: 0.03333em;
  }
`;

export const FormAccountContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
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
  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
  @media ${devices.maxlg} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonSettingContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 60px;
`;

export const ButtonUpdateSetting = styled(Button)`
  background-color: RGB(251 66 38) !important;
  color: white !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  padding: 8px 12px !important;
  &:hover {
    background-color: RGB(184 48 28) !important;
  }
`;

export const HistoryPurchaseContain = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  margin-top: 24px;
  padding: 12px;
  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.167;
    letter-spacing: -0.01562em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 20px;
  }
`;

export const HistoryContent = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  @media ${devices.maxlg} {
    grid-template-columns: repeat(1, 1fr);
  }
  .history-item {
    h5 {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.167;
      color: rgba(0, 0, 0, 0.87);
    }
    h4 {
      color: #fb4226;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.167;
      letter-spacing: -0.01562em;
    }
    h3 {
      color: #00ac4d;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.167;
      letter-spacing: -0.01562em;
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

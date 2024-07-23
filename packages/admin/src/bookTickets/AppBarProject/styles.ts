import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Dialog from '@mui/material/Dialog';
import { devices } from '../DeviceScreen';

export const AppBarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  overflow-x: hidden;
`;

export const ToolBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media only screen and ${devices.xl} {
    flex-wrap: wrap;
  }
`;

export const LogoAppBar = styled.div`
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
`;

export const DirectAppBar = styled.div`
  display: none;
  @media only screen and ${devices.xl} {
    flex-grow: 0;
    max-width: 42%;
    flex-basis: 42%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .direct-button-item {
      color: black;
      text-transform: none;
      &:hover {
        color: rgb(251, 66, 38);
      }
    }
  }
`;

export const ContainerAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0;
  width: 33%;
  flex-basis: 33%;
`;

export const FormUser = styled.div`
  padding: 10px;
  cursor: pointer;
  height: 100%;
  display: none;

  .text-adjust {
    font-size: 16px;
    font-weight: 500;
    color: rgb(158, 158, 158);
    padding-left: 10px;
    line-height: 1.167;
    letter-spacing: 0em;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    display: flex;
    align-items: center;
  }
  &:hover .hover-form-user {
    color: rgb(251, 66, 38);
  }
  @media screen and ${devices.xl} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const AvatarUser = styled(AccountCircleIcon)`
  transform: scale(1.4);
  color: rgb(158, 158, 158);
`;

export const LogOutIconAppbar = styled(LogoutIcon)`
  transform: scale(1.4);
  color: rgb(158, 158, 158);
`;

export const MenuAppBarContainer = styled.div`
  @media screen and ${devices.xl} {
    display: none;
  }
`;
export const MenuAppBar = styled(MenuIcon)`
  transform: scale(1.5);
  color: rgb(251, 66, 38);
  cursor: pointer;
  &:active {
    background-color: rgb(251, 66, 38);
    color: white;
  }
`;

export const DrawerListItem = styled(ListItem)`
  .form-user-drawer {
    .text-drawer {
      font-size: 17px;
      font-weight: 500;
      color: rgb(158, 158, 158);
      padding-left: 10px;
      line-height: 1.167;
      letter-spacing: 0em;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
  }
  .director-menu-drawer {
    font-size: 14px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 600;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    &:hover {
      color: rgb(251, 66, 38);
    }
  }
  &:hover .hover-form-user {
    color: rgb(251, 66, 38);
  }
`;

export const AvatarDialogSignIn = styled(AccountCircleIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(251, 66, 38);
  transform: scale(1.8);
  width: 100% !important;
  margin-top: 5px;
`;

export const TitleDialogSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  padding-top: 5px;
`;

export const InputSignIn = styled.input`
  display: flex;
  flex-direction: row;
  color: black;
  border: 1px solid RGB(117 117 117);
  max-width: 100%;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const SaveAccount = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  margin-left: -10px;
  p {
    font-size: 16px;
    color: black;
    font-weight: 500;
  }
`;

export const ButtonSignIn = styled(Button)`
  margin-top: 20px !important;
  outline: none !important;
  width: 100%;
  background-color: RGB(251 66 38) !important;
  color: white !important;
  &:hover {
    background-color: RGB(135 37 37) !important;
  }
`;

export const DirectionSignUp = styled.div`
  display: flex;
  right: 0;
  margin-top: 10px;
`;

export const DialogContain = styled(Dialog)`
  padding: 30px 10px;
  #alert-dialog-title {
    text-align: center;
    margin: 40px 0;
    .icon-ask-dialog {
      transform: scale(3.5);
      color: rgb(135, 173, 189);
    }
  }
  #dialog-content {
    text-align: center;
    h3 {
      color: RGB(80 79 79);
      font-size: 1.875em;
      font-weight: 600;
    }
  }
  #dialog-action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .btn-agree {
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
    .btn-close {
      padding: 6px 15px;
      background-color: rgb(117, 117, 117);
      color: white;
      text-transform: none;
      font-size: 18px;
      &:hover {
        background-color: RGB(85 85 85) !important;
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

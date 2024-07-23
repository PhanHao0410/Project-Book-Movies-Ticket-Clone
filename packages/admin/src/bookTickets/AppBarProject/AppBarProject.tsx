import * as React from 'react';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ACCESS_TOKEN } from '../../constants/localStorage';
import { useAppSelector } from '../../redux/hooks';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import {
  removeToken,
  isHavingToken,
  removeAccessToken,
} from '../../utils/localStorage';
import { REQUEST_STATUS } from '../../constants/common';

import {
  ToolBar,
  LogoAppBar,
  DirectAppBar,
  ContainerAction,
  AppBarContainer,
  FormUser,
  AvatarUser,
  MenuAppBar,
  MenuAppBarContainer,
  DrawerListItem,
  LogOutIconAppbar,
  DialogContain,
  ToastContentContain,
} from './styles';

const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Đã đăng xuất!</h3>
    <p>Cảm ơn bạn đã sử dụng TIX</p>
    <Button className="btn-close-toast">OK</Button>
  </ToastContentContain>
);

function AppBarProject(props) {
  const [open, setOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isToken, setIsToken] = useState(isHavingToken());
  const [openLogOut, setOpenLogOut] = React.useState(false);
  const matches = useMediaQuery('(min-width: 960px)');
  const matches600 = useMediaQuery('(min-width: 600px)');

  const handleCloseLogOut = () => {
    setOpenLogOut(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClickOpenSignIn = () => {
    history.push('/sign-in');
    setOpen(false);
  };

  const handleClickOpenSignUp = () => {
    history.push('/sign-up');
    setOpen(false);
  };
  React.useEffect(() => {
    if (isHavingToken()) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [isHavingToken]);

  const handleClickLogout = () => {
    setOpenLogOut(true);
  };
  const handleLogoutAccount = () => {
    setOpenLogOut(false);
    toast.success(<Msg />, {
      icon: false,
      position: 'top-center',
      style: { marginTop: '50%', minWidth: '444px' },
      closeButton: false,
      hideProgressBar: true,
      pauseOnHover: false,
      autoClose: 2000,
      onClose: () => {
        removeToken();
        removeAccessToken();
        setIsToken(false);
      },
    });
  };

  const DrawerList = (
    <Box sx={{ width: 210 }} role="presentation">
      <List sx={{ margin: '10px' }}>
        {isToken ? (
          <>
            <DrawerListItem
              sx={{ paddingBottom: '10px' }}
              disablePadding
              onClick={() => history.push(path.ACCOUNT)}
            >
              <ListItemButton className="form-user-drawer">
                <AvatarUser className="hover-form-user" />
                <div className="hover-form-user text-drawer">Acount</div>
              </ListItemButton>
            </DrawerListItem>

            <DrawerListItem disablePadding onClick={handleClickLogout}>
              <ListItemButton className="form-user-drawer">
                <LogOutIconAppbar className="hover-form-user" />
                <div className="hover-form-user text-drawer">Log out</div>
              </ListItemButton>
            </DrawerListItem>
          </>
        ) : (
          <>
            <DrawerListItem
              sx={{ paddingBottom: '10px' }}
              disablePadding
              onClick={handleClickOpenSignIn}
            >
              <ListItemButton className="form-user-drawer">
                <AvatarUser className="hover-form-user" />
                <div className="hover-form-user text-drawer">Đăng Nhập</div>
              </ListItemButton>
            </DrawerListItem>

            <DrawerListItem disablePadding onClick={handleClickOpenSignUp}>
              <ListItemButton className="form-user-drawer">
                <AvatarUser className="hover-form-user" />
                <div className="hover-form-user text-drawer">Đăng Ký</div>
              </ListItemButton>
            </DrawerListItem>
          </>
        )}
      </List>
      <Divider />
      <List sx={{ margin: '10px' }}>
        {/* {['Lịch Chiếu', 'Cụm Rạp', 'Tin Tức', 'Ứng Dụng'].map((text, index) => ( */}
        <DrawerListItem
          disablePadding
          onClick={
            matches600
              ? () => window.scrollTo(0, 300)
              : () => window.scrollTo(0, 0)
          }
        >
          <ListItemButton className="director-menu-drawer">
            <ListItemText>Lịch Chiếu</ListItemText>
          </ListItemButton>
        </DrawerListItem>
        {matches && (
          <DrawerListItem
            disablePadding
            onClick={() => window.scrollTo(600, 1300)}
          >
            <ListItemButton className="director-menu-drawer">
              <ListItemText>Cụm Rạp</ListItemText>
            </ListItemButton>
          </DrawerListItem>
        )}
        <DrawerListItem
          disablePadding
          role="presentation"
          onClick={
            matches
              ? () => window.scrollTo(1800, 2200)
              : matches600
              ? () => window.scrollTo(600, 1300)
              : () => window.scrollTo(1300, 1600)
          }
        >
          <ListItemButton className="director-menu-drawer">
            <ListItemText>Tin Tức</ListItemText>
          </ListItemButton>
        </DrawerListItem>
        <DrawerListItem
          disablePadding
          onClick={
            matches
              ? () => window.scrollTo(2400, 2800)
              : matches600
              ? () => window.scrollTo(1300, 1600)
              : () => window.scrollTo(1500, 1900)
          }
        >
          <ListItemButton className="director-menu-drawer">
            <ListItemText>Ứng Dụng</ListItemText>
          </ListItemButton>
        </DrawerListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  return (
    <AppBarContainer>
      <Container maxWidth="xl">
        <ToolBar>
          <LogoAppBar
            onClick={() => window.scrollTo(0, 0)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://demo1.cybersoft.edu.vn/logo.png"
              alt="logo"
              style={{ width: '200px' }}
            />
          </LogoAppBar>
          <DirectAppBar>
            <Box sx={{ '& button': { m: 1 } }}>
              <div>
                <Button
                  className="direct-button-item"
                  size="medium"
                  onClick={() => window.scrollTo(0, 600)}
                >
                  Lịch Chiếu
                </Button>
                <Button
                  className="direct-button-item"
                  size="medium"
                  onClick={() => window.scrollTo(800, 1600)}
                >
                  Cụm Rạp
                </Button>
                <Button
                  className="direct-button-item"
                  size="medium"
                  onClick={() => window.scrollTo(2100, 2400)}
                >
                  Tin Tức
                </Button>
                <Button
                  className="direct-button-item"
                  size="medium"
                  onClick={() => window.scrollTo(2800, 3200)}
                >
                  Ứng Dụng
                </Button>
              </div>
            </Box>
          </DirectAppBar>
          <ContainerAction>
            {isToken ? (
              <>
                <FormUser
                  onClick={() => history.push(path.ACCOUNT)}
                  style={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                  <AvatarUser className="hover-form-user" />
                  <div className="hover-form-user text-adjust">Acount</div>
                </FormUser>
                <FormUser onClick={handleClickLogout}>
                  <LogOutIconAppbar className="hover-form-user" />
                  <div className="hover-form-user text-adjust">Logout</div>
                </FormUser>
              </>
            ) : (
              <>
                <FormUser
                  onClick={handleClickOpenSignIn}
                  style={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                  <AvatarUser className="hover-form-user" />
                  <div className="hover-form-user text-adjust">Đăng Nhập</div>
                </FormUser>
                <FormUser onClick={handleClickOpenSignUp}>
                  <AvatarUser className="hover-form-user" />
                  <div className="hover-form-user text-adjust">Đăng Ký</div>
                </FormUser>
              </>
            )}
          </ContainerAction>
          <MenuAppBarContainer>
            <i onClick={toggleDrawer(true)} role="presentation">
              <MenuAppBar />
            </i>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </MenuAppBarContainer>
        </ToolBar>
      </Container>
      <DialogContain
        open={openLogOut}
        onClose={handleCloseLogOut}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            minWidth: '444px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <span>
            <HelpOutlineIcon className="icon-ask-dialog" />
          </span>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Bạn có muốn đăng xuất ?</h3>
        </DialogContent>
        <DialogActions id="dialog-action">
          <div>
            <Button
              onClick={handleLogoutAccount}
              autoFocus
              className="btn-agree"
            >
              Đồng ý
            </Button>
            <Button onClick={handleCloseLogOut} className="btn-close">
              Hủy
            </Button>
          </div>
        </DialogActions>
      </DialogContain>
    </AppBarContainer>
  );
}
export default AppBarProject;

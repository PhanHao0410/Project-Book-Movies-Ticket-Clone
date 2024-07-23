import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import history from '../../utils/history';
import { getSignInRequest, selectSignInSlice } from './reducer';
import { isHavingToken, getToken } from '../../utils/localStorage';
import { REQUEST_STATUS } from '../../constants/common';
import path from '../../constants/clientPath';
import {
  SignInContainer,
  ImageBackGround,
  CardSignIn,
  AvatarDialogSignIn,
  TitleDialogSignIn,
  SaveAccount,
  ButtonSignIn,
  DirectionSignUp,
  ShowErrorSignIn,
  DialogContain,
  ToastContentContain,
} from './style';
import AppBarProject from '../AppBarProject';

type TFormInput = {
  SignIn: {
    account: string;
    password: string;
  };
};
const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Đăng nhập thành công</h3>
    <Button className="btn-close-toast">Đóng</Button>
  </ToastContentContain>
);

const SignIn = (props) => {
  const { signInMessage, signInStatus } = props;
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<TFormInput>();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loadingHandleSubmit, setLoadingHandleSubmut] = useState(false);
  const [open, setOpen] = React.useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  // useEffect(() => {
  //   console.log('check err: ', signInMessage);
  // }, [signInMessage]);

  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkAndToken = () => {
    if (isHavingToken()) {
      toast.success(<Msg />, {
        icon: false,
        position: 'top-center',
        style: { marginTop: '50%', minWidth: '444px' },
        closeButton: false,
        hideProgressBar: true,
        pauseOnHover: false,
        autoClose: 2000,
        onClose: () => {
          history.push('/');
        },
      });
    }
  };
  const onSubmit = (data) => {
    const matKhau = data.SignIn.password;
    const taiKhoan = data.SignIn.account;

    dispatch(getSignInRequest({ taiKhoan, matKhau }));
  };
  useEffect(() => {
    if (signInStatus === REQUEST_STATUS.REQUESTING) {
      setLoadingHandleSubmut(true);
    } else {
      setLoadingHandleSubmut(false);
    }
    checkAndToken();
  }, [signInStatus]);
  return (
    <>
      <AppBarProject />
      <SignInContainer>
        <ImageBackGround />
        <CardSignIn>
          <CardContent sx={{ width: '100%' }}>
            <div>
              <AvatarDialogSignIn />
              <TitleDialogSignIn>Đăng nhập</TitleDialogSignIn>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <TextField
                  fullWidth
                  label="Tài khoản *"
                  id="fullWidth"
                  {...register('SignIn.account', {
                    required: 'Đây là trường bắt buộc!',
                  })}
                />
                {errors.SignIn?.account?.message && (
                  <span className="show-error-input">
                    {errors.SignIn?.account?.message}
                  </span>
                )}
              </Box>
              <FormControl
                sx={{ width: '100%', marginTop: '25px' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Mật khẩu *"
                  {...register('SignIn.password', {
                    required: 'Đây là trường bắt buộc!',
                    pattern: {
                      value: /^[a-zA-Z0-9.-]{6,20}$/,
                      message: 'Mật khẩu phải có ít nhất 6 kí tự !',
                    },
                  })}
                />
                {errors.SignIn?.password?.message && (
                  <span className="show-error-input">
                    {errors.SignIn?.password?.message}
                  </span>
                )}
              </FormControl>
              <SaveAccount>
                <Checkbox
                  {...label}
                  sx={{
                    '&.Mui-checked': {
                      color: 'rgb(251, 66, 38)',
                    },
                  }}
                />
                <div>Nhớ tài khoản</div>
              </SaveAccount>
              {signInMessage && (
                <ShowErrorSignIn>
                  <ErrorOutlineIcon className="icon-err-signin" />
                  <span>{signInMessage}</span>
                </ShowErrorSignIn>
              )}

              <ButtonSignIn type="submit">Đăng Nhập</ButtonSignIn>
              <DirectionSignUp>
                <span
                  onClick={() => history.push('/sign-up')}
                  role="presentation"
                >
                  Bạn chưa có tài khoản? Đăng ký{' '}
                </span>
              </DirectionSignUp>
            </form>
          </CardContent>
        </CardSignIn>
        <DialogContain
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <CheckCircleOutlineIcon className="icon-success-signin" />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h3>Đăng nhập thành công !</h3>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus className="button-close">
              Đóng
            </Button>
          </DialogActions>
        </DialogContain>
      </SignInContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    signInMessage: state.signInSlice.signInMessage,
    signInStatus: state.signInSlice.signInStatus,
  };
};

export default connect(mapStateToProps)(SignIn);

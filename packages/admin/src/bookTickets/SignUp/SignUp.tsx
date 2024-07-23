import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import history from '../../utils/history';
import AppBarProject from '../AppBarProject';
import { getSignUpRequest } from './reducer';

import {
  SignInContainer,
  ImageBackGround,
  CardSignIn,
  AvatarDialogSignIn,
  TitleDialogSignIn,
  ButtonSignIn,
  DirectionSignUp,
  ShowErrorSignUp,
  ToastContentContain,
} from './styles';

type TFormInput = {
  SignUp: {
    account: string;
    password: string;
    repassword: string;
    user: string;
    email: string;
  };
};

const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Đăng ký tài khoản thành công</h3>
    <Button className="btn-close-toast">OK</Button>
  </ToastContentContain>
);

const SignUp = (props) => {
  const { dataSignUp, signUpMessage } = props;
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<TFormInput>();
  const [showPassword, setShowPassword] = React.useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (dataSignUp && dataSignUp.taiKhoan) {
      toast.success(<Msg />, {
        icon: false,
        position: 'top-center',
        style: { marginTop: '50%', minWidth: '444px' },
        closeButton: false,
        hideProgressBar: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
    }
  }, [dataSignUp, signUpMessage]);

  const onSubmit = (data) => {
    if (data) {
      const email = data.SignUp.email;
      const hoTen = data.SignUp.user;
      const matKhau = data.SignUp.password;
      const confirmPassWor = data.SignUp.repassword;
      const taiKhoan = data.SignUp.account;
      const maNhom = 'GP09';
      const maLoaiNguoiDung = 'KhachHang';
      dispatch(
        getSignUpRequest({
          email,
          hoTen,
          matKhau,
          confirmPassWor,
          taiKhoan,
          maNhom,
          maLoaiNguoiDung,
        }),
      );
    }
  };

  return (
    <>
      <AppBarProject />
      <SignInContainer>
        <ImageBackGround />

        <CardSignIn>
          <CardContent sx={{ width: '100%' }}>
            <div>
              <AvatarDialogSignIn />
              <TitleDialogSignIn>Đăng ký</TitleDialogSignIn>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <TextField
                  fullWidth
                  label="Tài khoản *"
                  id="fullWidth"
                  {...register('SignUp.account', {
                    required: 'Đây là trường bắt buộc !',
                  })}
                />
                {errors.SignUp?.account?.message && (
                  <span className="show-error-input">
                    {errors.SignUp?.account?.message}
                  </span>
                )}
              </Box>
              <FormControl
                sx={{ width: '100%', marginTop: '15px' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu *
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
                  {...register('SignUp.password', {
                    required: 'Đây là trường bắt buộc !',
                    pattern: {
                      value: /^[a-zA-Z0-9.-]{6,20}$/,
                      message: 'Mật khẩu phải có ít nhất 6 kí tự !',
                    },
                  })}
                />
                {errors.SignUp?.password?.message && (
                  <span className="show-error-input">
                    {errors.SignUp?.password?.message}
                  </span>
                )}
              </FormControl>
              <FormControl
                sx={{ width: '100%', marginTop: '15px' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Nhập lại mật khẩu *
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
                  label="Nhập lại mật khẩu *"
                  {...register('SignUp.repassword', {
                    required: 'Đây là trường bắt buộc !',
                    validate: (val: string) => {
                      if (watch('SignUp.password') !== val) {
                        return 'Mật khẩu không khớp !';
                      }
                    },
                  })}
                />
                {errors.SignUp?.repassword?.message && (
                  <span className="show-error-input">
                    {errors.SignUp?.repassword?.message}
                  </span>
                )}
              </FormControl>
              <Box sx={{ marginTop: '15px' }}>
                <TextField
                  fullWidth
                  label="Họ tên *"
                  id="fullWidth"
                  {...register('SignUp.user', {
                    required: 'Đây là trường bắt buộc !',
                  })}
                />
                {errors.SignUp?.user?.message && (
                  <span className="show-error-input">
                    {errors.SignUp?.user?.message}
                  </span>
                )}
              </Box>
              <Box sx={{ marginTop: '15px' }}>
                <TextField
                  fullWidth
                  label="Email *"
                  id="fullWidth"
                  {...register('SignUp.email', {
                    required: 'Đây là trường bắt buộc !',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Email không hợp lệ !',
                    },
                  })}
                />
                {errors.SignUp?.email?.message && (
                  <span className="show-error-input">
                    {errors.SignUp?.email?.message}
                  </span>
                )}
              </Box>
              {signUpMessage && (
                <ShowErrorSignUp>
                  <ErrorOutlineIcon className="icon-err-signup" />
                  <span>{signUpMessage}</span>
                </ShowErrorSignUp>
              )}

              <ButtonSignIn type="submit">Đăng Ký</ButtonSignIn>
              <DirectionSignUp>
                <span
                  onClick={() => history.push('/sign-in')}
                  role="presentation"
                >
                  Bạn đã có tài khoản? Đăng nhập
                </span>
              </DirectionSignUp>
            </form>
          </CardContent>
        </CardSignIn>
      </SignInContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataSignUp: state.signUpSlice.dataSignUp && state.signUpSlice.dataSignUp,
    signUpMessage:
      state.signUpSlice.signUpMessage && state.signUpSlice.signUpMessage,
  };
};

export default connect(mapStateToProps)(SignUp);

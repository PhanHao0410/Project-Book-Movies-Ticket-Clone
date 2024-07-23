import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import { getToken } from '../../utils/localStorage';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import {
  AccountInformContain,
  AccountContain,
  FormAccountContain,
  FormSettingContain,
  FormAccountContent,
  ButtonSettingContain,
  ButtonUpdateSetting,
  HistoryPurchaseContain,
  HistoryContent,
  ToastContentContain,
  LoadingContainer,
} from './styles';
import {
  getHistoryAccountRequest,
  getInformAccountRequest,
  getUpdateInformAccountResquest,
} from './reducer';
import AppBarProject from '../AppBarProject';

type TFormInput = {
  SetAccount: {
    account: string;
    password: string;
    user: string;
    email: string;
    phoneNumber: string;
    maLoaiNguoiDung: string;
  };
};

const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Cập nhật thành công</h3>
    <Button className="btn-close-toast">Đóng</Button>
  </ToastContentContain>
);

const AccountInform = (props) => {
  const { dataInformAccount, dataHistoryAccount, isLoading } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const [showPassword, setShowPassword] = React.useState(false);
  const [typeUser, setTypeUser] = React.useState('1');
  const AccountUser = JSON.parse(getToken());
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (AccountUser) {
      const maNhom = AccountUser.maNhom;
      const tuKhoa = AccountUser.hoTen;
      const taiKhoan = AccountUser.taiKhoan;
      dispatch(getInformAccountRequest({ maNhom, tuKhoa }));
      dispatch(getHistoryAccountRequest(taiKhoan));
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTypeUser(event.target.value as string);
  };

  const onSubmit = (data) => {
    if (data.SetAccount) {
      const email = data.SetAccount.email;
      const hoTen = data.SetAccount.user;
      const maLoaiNguoiDung = data.SetAccount.maLoaiNguoiDung;
      const maNhom = AccountUser.maNhom;
      const matKhau = data.SetAccount.password;
      const soDt = data.SetAccount.phoneNumber;
      const taiKhoan = data.SetAccount.account;
      dispatch(
        getUpdateInformAccountResquest({
          email,
          hoTen,
          maLoaiNguoiDung,
          maNhom,
          matKhau,
          soDt,
          taiKhoan,
        }),
      );
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
  };

  return (
    <>
      <AppBarProject />
      {isLoading ? (
        <LoadingContainer>
          <img
            src="https://demo1.cybersoft.edu.vn/static/media/loadingPage.a098baa8.gif"
            alt="image_loading"
          />
        </LoadingContainer>
      ) : (
        <AccountInformContain>
          {dataInformAccount && dataInformAccount.taiKhoan && (
            <AccountContain>
              <FormAccountContain>
                <FormSettingContain>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title-form-setting">
                      <h3>Cài đặt tài khoản chung</h3>
                      <h5>Thông tin có thể được thay đổi</h5>
                    </div>
                    <FormAccountContent>
                      <Box sx={{ height: '-100px' }}>
                        <TextField
                          fullWidth
                          label="Tài khoản *"
                          id="fullWidth"
                          value={dataInformAccount.taiKhoan}
                          {...register('SetAccount.account', {
                            required: 'Đây là trường bắt buộc !',
                          })}
                        />
                        {errors.SetAccount?.account?.message && (
                          <span className="show-error-input">
                            {errors.SetAccount?.account?.message}
                          </span>
                        )}
                      </Box>
                      <FormControl
                        sx={{ width: '100%' }}
                        variant="outlined"
                        // onChange={(e) => setPasswordUser(e.target.value)}
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Mật khẩu *
                        </InputLabel>

                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          label="Mật khẩu *"
                          // value={passwordUser}
                          {...register('SetAccount.password', {
                            // onChange: (e) => e.target.value),

                            value: dataInformAccount.matKhau,
                            required: 'Đây là trường bắt buộc !',
                            pattern: {
                              value: /^[a-zA-Z0-9.-]{6,20}$/,
                              message: 'Mật khẩu phải có ít nhất 6 kí tự !',
                            },
                          })}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />

                        {errors.SetAccount?.password?.message && (
                          <span className="show-error-input">
                            {errors.SetAccount?.password?.message}
                          </span>
                        )}
                      </FormControl>
                      <Box>
                        <TextField
                          fullWidth
                          label="Họ tên *"
                          id="fullWidth"
                          {...register('SetAccount.user', {
                            value: dataInformAccount.hoTen,
                            required: 'Đây là trường bắt buộc !',
                          })}
                        />
                        {errors.SetAccount?.user?.message && (
                          <span className="show-error-input">
                            {errors.SetAccount?.user?.message}
                          </span>
                        )}
                      </Box>
                      <Box>
                        <TextField
                          fullWidth
                          label="Email *"
                          id="fullWidth"
                          // value={dataInformAccount.email}
                          {...register('SetAccount.email', {
                            value: dataInformAccount.email,
                            required: 'Đây là trường bắt buộc !',
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: 'Email không hợp lệ !',
                            },
                          })}
                        />
                        {errors.SetAccount?.email?.message && (
                          <span className="show-error-input">
                            {errors.SetAccount?.email?.message}
                          </span>
                        )}
                      </Box>
                      <Box>
                        <TextField
                          fullWidth
                          label="Số điện thoại *"
                          id="fullWidth"
                          // value={dataInformAccount.soDt}
                          {...register('SetAccount.phoneNumber', {
                            value:
                              dataInformAccount.soDt || dataInformAccount.soDT,
                            required: 'Vui lòng nhập số điện thoại !',
                            pattern: {
                              value: /^[0-9]{6,20}$/,
                              message: 'Vui lòng nhập số  !',
                            },
                          })}
                        />
                        {errors.SetAccount?.phoneNumber?.message && (
                          <span className="show-error-input">
                            {errors.SetAccount?.phoneNumber?.message}
                          </span>
                        )}
                      </Box>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Mã Loại Người Dùng
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={
                              dataInformAccount.maLoaiNguoiDung === 'KhachHang'
                                ? 'KhachHang'
                                : 'QuanTri'
                            }
                            label="Mã Loại Người Dùng"
                            onChange={handleChange}
                            {...register('SetAccount.maLoaiNguoiDung', {
                              required: 'Đây là trường bắt buộc !',
                            })}
                          >
                            <MenuItem value="KhachHang" sx={{ height: '25px' }}>
                              Khách Hàng
                            </MenuItem>
                            <MenuItem value="QuanTri" sx={{ height: '25px' }}>
                              Quản Trị
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </FormAccountContent>
                    <ButtonSettingContain>
                      <ButtonUpdateSetting type="submit">
                        Cập nhật
                      </ButtonUpdateSetting>
                    </ButtonSettingContain>
                  </form>
                </FormSettingContain>
                <HistoryPurchaseContain>
                  <h1>Lịch sử đặt vé</h1>
                  <HistoryContent>
                    {dataHistoryAccount &&
                      dataHistoryAccount.thongTinDatVe &&
                      dataHistoryAccount.thongTinDatVe.map((item) => {
                        return (
                          <div className="history-item" key={item.maVe}>
                            <h5>
                              Ngày đặt:{' '}
                              {moment(item.ngayDat).format(
                                'DD-MM-YYYY | HH:mm',
                              )}
                            </h5>
                            <h4>{`Tên phim: ${item.tenPhim}`}</h4>
                            <h5>{`Thời lượng: ${item.thoiLuongPhim} phút, Giá vé: ${item.giaVe}`}</h5>
                            <h3>{item.danhSachGhe[0].tenHeThongRap}</h3>
                            <h5>
                              <span>{` ${item.danhSachGhe[0].tenRap}, `}</span>
                              <span>
                                Ghế:{' '}
                                {item.danhSachGhe.map((seats) => {
                                  return (
                                    <span
                                      key={seats.maGhe}
                                    >{`${seats.tenGhe}, `}</span>
                                  );
                                })}
                              </span>
                            </h5>
                          </div>
                        );
                      })}
                  </HistoryContent>
                </HistoryPurchaseContain>
              </FormAccountContain>
            </AccountContain>
          )}
        </AccountInformContain>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataInformAccount:
      state.informAccountSlice.dataInformAccount &&
      state.informAccountSlice.dataInformAccount,
    dataHistoryAccount:
      state.informAccountSlice.dataHistoryAccount &&
      state.informAccountSlice.dataHistoryAccount,
    isLoading: state.informAccountSlice.isLoading,
  };
};

export default connect(mapStateToProps)(AccountInform);

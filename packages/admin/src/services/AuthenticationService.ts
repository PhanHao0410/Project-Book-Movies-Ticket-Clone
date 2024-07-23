import { AxiosResponse } from 'axios';
import BaseService from './BaseService';
import { FormHistory, FromInformAccount, LoginForm } from '../types/Requests';
import { UserResponse } from '../types/Responses';
import {
  FormSignIn,
  FromPurchaseTicket,
  FormUpdateAccount,
} from '../types/Requests/index';
import { getToken } from '../utils/localStorage';

const BASE_URL = '/api/v1';

const login = (data: LoginForm): Promise<AxiosResponse<UserResponse>> => {
  return BaseService.post(`${BASE_URL}/auth/signin`, data);
};

const URL_BOOK_TICKETS = 'https://movie0706.cybersoft.edu.vn/api';

const showtimeUrl = (data): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09${data}`,
  );
};
const getInformMovies = (codeMovie): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeMovie}`,
  );
};
const getInformThearter = (): Promise<AxiosResponse> => {
  return BaseService.get(`${URL_BOOK_TICKETS}/QuanLyRap/LayThongTinHeThongRap`);
};

const getListCalendar = (data): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${data.codeTheater}&maNhom=${data.codeGroup}`,
  );
};
const getListRoomTicket = (codeCalendar): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${codeCalendar}`,
  );
};
const getNewsAllFilm = (data): Promise<AxiosResponse> => {
  return BaseService.get(`https://60b9f19280400f00177b744b.mockapi.io/${data}`);
};
const getNewsAll = (data): Promise<AxiosResponse> => {
  return BaseService.get(`https://60babc8f42e1d0001761ff84.mockapi.io/${data}`);
};

const getDetailMovie = (data): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${data}`,
  );
};

const signIn = (data: FormSignIn): Promise<AxiosResponse> => {
  return BaseService.post(`${URL_BOOK_TICKETS}/QuanLyNguoiDung/DangNhap`, data);
};

const purchaseTicket = (data: FromPurchaseTicket): Promise<AxiosResponse> => {
  return BaseService.post(`${URL_BOOK_TICKETS}/QuanLyDatVe/DatVe`, data);
};

const getInformAccount = (data: FromInformAccount): Promise<AxiosResponse> => {
  return BaseService.get(
    `${URL_BOOK_TICKETS}/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${data.maNhom}&tuKhoa=${data.tuKhoa}`,
  );
};

const updateInformAccount = (
  data: FormUpdateAccount,
): Promise<AxiosResponse> => {
  return BaseService.put(
    `${URL_BOOK_TICKETS}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    data,
  );
};

const historyAccount = (data: FormHistory): Promise<AxiosResponse> => {
  return BaseService.post(
    `${URL_BOOK_TICKETS}/QuanLyNguoiDung/ThongTinTaiKhoan`,
    data,
  );
};

const signUp = (data): Promise<AxiosResponse> => {
  return BaseService.post(`${URL_BOOK_TICKETS}/QuanLyNguoiDung/DangKy`, data);
};
export default {
  login,
  showtimeUrl,
  getInformThearter,
  getListCalendar,
  getNewsAll,
  getInformMovies,
  getListRoomTicket,
  getDetailMovie,
  getNewsAllFilm,
  signIn,
  purchaseTicket,
  getInformAccount,
  updateInformAccount,
  historyAccount,
  signUp,
};

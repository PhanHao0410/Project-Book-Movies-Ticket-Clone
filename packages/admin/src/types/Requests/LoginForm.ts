export interface LoginForm {
  email: string;
  password: string;
}

export interface ListCalendar {
  codeGroup: string;
  codeTheater: string;
}

export interface InformMovies {
  codeMovie: string;
}

export interface InformCalendar {
  codeCalendar: string;
}
export interface DetailMovie {
  codeMovie: string;
}

export interface TypeNews {
  typeNews: string;
}
export interface SearchMovies {
  searchMovie: string;
}

export interface FormSignIn {
  taiKhoan: string;
  matKhau: string;
}

export interface FromPurchaseTicket {
  maLichChieu: string;
  danhSachVe: [];
  taiKhoanNguoiDung: string;
}

export interface FromInformAccount {
  maNhom: string;
  tuKhoa: string;
}

export interface FormUpdateAccount {
  taiKhoan: string;
  email: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  hoTen: string;
  matKhau: string;
  soDt: string;
}

export interface FormHistory {
  taiKhoan: string;
}

export interface FormSignUp {
  email: string;
  hoTen: string;
  confirmPassWor: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  matKhau: string;
  taiKhoan: string;
}

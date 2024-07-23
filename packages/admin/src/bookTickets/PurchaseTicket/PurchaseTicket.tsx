/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { isHavingToken, getToken } from '../../utils/localStorage';

import {
  PurchaseTicketContain,
  SeatCotain,
  FormBuyContain,
  ButtonSelectSeat,
  CardBookContain,
  ButtonBookTicket,
  IconErrorSignIn,
  DialogTextContain,
  DialogActionContain,
  DialogContain,
  ToastContentContain,
  LoadingContainer,
} from './styles';
import {
  getInformRoomTicketRequest,
  getPurchaseTicketRequest,
} from './reducer';
import AppBarProject from '../AppBarProject';

const Msg = () => (
  <ToastContentContain>
    <span>
      <CheckCircleOutlineIcon className="icon-toastify" />
    </span>
    <h3>Vui lòng lựa chọn ghế</h3>
    <Button className="btn-close-toast">Đóng</Button>
  </ToastContentContain>
);

const PurchaseTicket = (props) => {
  const { dataInformRoomTicket, dataPurchaseTicket, isLoading } = props;
  const [clickSeat, setClickSeat] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [open, setOpen] = useState(false);
  const [dataSeat, setDataSeat] = useState({});
  const codeCalendar = props.location.pathname.slice(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (codeCalendar) {
      dispatch(getInformRoomTicketRequest(codeCalendar));
    }
    if (dataPurchaseTicket) {
      history.push(`/purchase/${codeCalendar}`);
      setClickSeat([]);
      setTotalMoney(0);
    }
  }, [codeCalendar, dataPurchaseTicket]);

  const handleClickSeat = (data) => {
    const clickCopy = clickSeat.find((item) => item === data);
    setDataSeat(data);
    if (clickCopy) {
      const copy = clickSeat.filter((item) => item !== clickCopy);
      setTotalMoney(totalMoney - clickCopy.giaVe);
      setClickSeat([...copy]);
    } else {
      setClickSeat([...clickSeat, data]);
      setTotalMoney(totalMoney + data.giaVe);
    }
  };

  const handleClickOpen = () => {
    if (!clickSeat[0] && isHavingToken()) {
      toast.info(<Msg />, {
        icon: false,
        position: 'top-center',
        style: { marginTop: '50%', minWidth: '444px' },
        closeButton: false,
        hideProgressBar: true,
        pauseOnHover: false,
        autoClose: 2000,
      });
    } else if (isHavingToken() && clickSeat) {
      const dataDispatch = {
        maLichChieu: codeCalendar,
        danhSachVe: clickSeat,
        taiKhoanNguoiDung: JSON.parse(getToken()).taiKhoan,
      };
      dispatch(getPurchaseTicketRequest(dataDispatch));
      toast.success('Đặt vé thành công!', {
        icon: true,
        position: 'top-right',
        closeButton: true,
        hideProgressBar: false,
        pauseOnHover: false,
        autoClose: 2000,
      });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
        <PurchaseTicketContain>
          <SeatCotain>
            <div style={{ width: '100%' }}>
              <div className="all-seat">
                {/* {seats.map((item, ind) => {
              return <ButtonSelectSeat key={ind}>{ind + 1}</ButtonSelectSeat>;
            })} */}
                {dataInformRoomTicket &&
                  dataInformRoomTicket.danhSachGhe &&
                  dataInformRoomTicket.danhSachGhe.map((item) => {
                    return (
                      <>
                        {item.daDat ? (
                          <ButtonSelectSeat
                            key={item.maGhe}
                            className="seat-booked"
                          >
                            X
                          </ButtonSelectSeat>
                        ) : (
                          <ButtonSelectSeat
                            key={item.maGhe}
                            className={
                              clickSeat.find(
                                (seat) => seat.maGhe === item.maGhe,
                              )
                                ? 'seat-selecter'
                                : item.loaiGhe === 'Vip'
                                ? 'seat-vip'
                                : ''
                            }
                            onClick={() => handleClickSeat(item)}
                          >
                            {item.tenGhe}
                          </ButtonSelectSeat>
                        )}
                      </>
                    );
                  })}
              </div>
              <div className="note-type-seat">
                <div>
                  <ButtonSelectSeat className="color-seat-placed">
                    X
                  </ButtonSelectSeat>
                  <span>Đã đặt</span>
                </div>
                <div>
                  <ButtonSelectSeat className="color-seat-normal" />
                  <span>Thường</span>
                </div>
                <div>
                  <ButtonSelectSeat className="color-seat-vip" />
                  <span>VIP</span>
                </div>
              </div>
            </div>
          </SeatCotain>
          <FormBuyContain>
            {dataInformRoomTicket && dataInformRoomTicket.thongTinPhim && (
              <CardBookContain>
                <h3 className="total-bill">
                  {totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  VND
                </h3>
                <div className="element-contain">
                  <p>Cụm Rạp:</p>
                  <h3>{dataInformRoomTicket.thongTinPhim.tenCumRap}</h3>
                </div>
                <div className="element-contain">
                  <p>Địa Chỉ:</p>
                  <h3>{dataInformRoomTicket.thongTinPhim.diaChi}</h3>
                </div>
                <div className="element-contain">
                  <p>Rạp:</p>
                  <h3>{dataInformRoomTicket.thongTinPhim.tenRap}</h3>
                </div>
                <div className="element-contain">
                  <p>Ngày giờ chiếu:</p>
                  <h3>
                    1{dataInformRoomTicket.thongTinPhim.ngayChieu} -{' '}
                    <span>{dataInformRoomTicket.thongTinPhim.gioChieu}</span>
                  </h3>
                </div>
                <div className="element-contain">
                  <p>Tên Phim:</p>
                  <h3>{dataInformRoomTicket.thongTinPhim.tenPhim}</h3>
                </div>
                <div className="element-contain total-select">
                  <p>Chọn:</p>
                  <div style={{ textAlign: 'right' }}>
                    {clickSeat &&
                      clickSeat.map((item) => {
                        return (
                          <h3
                            key={item.maGhe}
                            style={{ display: 'inline', marginRight: '3px' }}
                          >
                            Ghế {item.tenGhe},
                          </h3>
                        );
                      })}
                  </div>
                </div>
              </CardBookContain>
            )}
            <ButtonBookTicket onClick={handleClickOpen}>
              Đặt vé
            </ButtonBookTicket>
          </FormBuyContain>
        </PurchaseTicketContain>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            minWidth: '460px',
            overflowY: 'hidden',
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px 0',
          }}
        >
          <span>
            <IconErrorSignIn />
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogTextContain id="alert-dialog-description">
            <div className="dialog-text-title">Bạn chưa đăng nhập</div>
            <div className="dialog-text-content">
              Bạn có muốn đăng nhập không ?
            </div>
          </DialogTextContain>
        </DialogContent>
        <DialogActionContain>
          <div style={{ margin: '0 auto' }}>
            <Button
              onClick={() => history.push(path.SIGNiN)}
              className="btn btn-agree"
              autoFocus
            >
              Đồng ý
            </Button>
            <Button onClick={handleClose} className="btn btn-refuse">
              Không
            </Button>
          </div>
        </DialogActionContain>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataInformRoomTicket: state.getInformRoomTicketSlice.dataInformRoom,
    dataPurchaseTicket: state.getInformRoomTicketSlice.dataPurchaseTicket,
    isLoading: state.getInformRoomTicketSlice.isLoading,
  };
};
export default connect(mapStateToProps)(PurchaseTicket);

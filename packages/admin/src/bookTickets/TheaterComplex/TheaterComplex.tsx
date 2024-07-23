import React, { useEffect, useState } from 'react';
import moment from 'moment';
import path from '../../constants/clientPath';
import history from '../../utils/history';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getListCalendarRequest, getTheaterRequest } from './reducer';
import { connect } from 'react-redux';

import {
  TheaterComplexContain,
  DistanceOther,
  DistanceContain,
  ListAllContain,
  ListAll,
  TrademarkContain,
  AllTheatersContain,
  AllShowtimesContain,
  ButtonTrademark,
  ListTheater,
  ListShowtimes,
  DescribeShowtime,
  ShowTimesMovies,
} from './styles';

const TheaterComplex = (props) => {
  const { dataGetTheater, dataListCalendar } = props;
  const [codeTheater, setCodeTheater] = useState(
    useEffect(() => {
      setCodeTheater(dataGetTheater[0]?.maHeThongRap);
    }, [dataGetTheater]),
  );
  const [codeGroup, setCodeGroup] = useState('GP09');
  const [theaterMovies, setTheaterMovies] = useState(
    useEffect(() => {
      setTheaterMovies(dataListCalendar[0]?.lstCumRap[0]?.maCumRap);
    }, [dataListCalendar]),
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTheaterRequest());
  }, []);
  useEffect(() => {
    if (codeTheater && codeGroup) {
      dispatch(getListCalendarRequest({ codeGroup, codeTheater }));
    }
  }, [codeGroup, codeTheater]);

  const handleClickPurchase = (data) => {
    if (data) {
      history.push(`/purchase/${data}`);
    }
  };
  return (
    <TheaterComplexContain id="movies">
      <DistanceContain>
        <DistanceOther />
      </DistanceContain>
      <ListAllContain>
        <ListAll>
          <TrademarkContain>
            {dataGetTheater &&
              dataGetTheater.map((item) => {
                return (
                  <>
                    <ButtonTrademark
                      key={item}
                      className={
                        item.maHeThongRap === codeTheater ? 'active' : ''
                      }
                      onClick={() => setCodeTheater(item.maHeThongRap)}
                    >
                      <img src={item.logo} alt="hãng" />
                    </ButtonTrademark>
                    <div />
                  </>
                );
              })}
          </TrademarkContain>
          {dataListCalendar &&
            dataListCalendar.map((item) => {
              return (
                <>
                  <AllTheatersContain key={item}>
                    {item &&
                      item.lstCumRap.map((theater) => {
                        return (
                          <>
                            <ListTheater
                              key={theater.maCumRap}
                              className={
                                theater.maCumRap === theaterMovies
                                  ? 'active'
                                  : ''
                              }
                              onClick={() => setTheaterMovies(theater.maCumRap)}
                            >
                              <span style={{ width: '100%', height: '100%' }}>
                                <h4 className="name">{theater.tenCumRap}</h4>
                                <h6 className="address">{theater.diaChi}</h6>
                                <div className="title">[chi tiết]</div>
                              </span>
                            </ListTheater>
                            <div className="theater-border-left" />
                          </>
                        );
                      })}
                  </AllTheatersContain>
                  <AllShowtimesContain>
                    {item &&
                      item.lstCumRap &&
                      item.lstCumRap.find(
                        (arraylist) => arraylist.maCumRap === theaterMovies,
                      ) &&
                      item.lstCumRap.find(
                        (arraylist) => arraylist.maCumRap === theaterMovies,
                      ).danhSachPhim &&
                      item.lstCumRap
                        .find(
                          (arraylist) => arraylist.maCumRap === theaterMovies,
                        )
                        .danhSachPhim.map((lists) => {
                          return (
                            <>
                              <ListShowtimes key={lists.maPhim}>
                                <img src={lists.hinhAnh} alt="show-times" />
                                <DescribeShowtime>
                                  <div className="title-movies-showtime">
                                    <span className="type-theater">C18</span>
                                    <span className="name-movies">
                                      {lists.tenPhim}
                                    </span>
                                  </div>
                                  <ShowTimesMovies>
                                    {lists &&
                                      lists.lstLichChieuTheoPhim.map(
                                        (moviesList) => {
                                          return (
                                            <div
                                              onClick={() =>
                                                handleClickPurchase(
                                                  moviesList.maLichChieu,
                                                )
                                              }
                                              role="presentation"
                                              key={moviesList.maLichChieu}
                                            >
                                              <span className="day-showtime">
                                                {moment(
                                                  moviesList.ngayChieuGioChieu,
                                                ).format('DD-MM-YYYY')}
                                              </span>
                                              <span
                                                style={{
                                                  color: 'RGB(175 175 175)',
                                                }}
                                              >
                                                ~
                                              </span>
                                              <span className="hour-showtime">
                                                {moment(
                                                  moviesList.ngayChieuGioChieu,
                                                ).format('HH:mm')}
                                              </span>
                                            </div>
                                          );
                                        },
                                      )}
                                  </ShowTimesMovies>
                                </DescribeShowtime>
                              </ListShowtimes>
                              <div className="theater-border-left" />
                            </>
                          );
                        })}
                  </AllShowtimesContain>
                </>
              );
            })}
        </ListAll>
      </ListAllContain>
    </TheaterComplexContain>
  );
};

const mapStateToProps = (state) => {
  return {
    dataGetTheater: state.getTheaterSlice.dataTheater,
    dataListCalendar: state.getTheaterSlice.dataListCalendar,
  };
};

export default connect(mapStateToProps)(TheaterComplex);

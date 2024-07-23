import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import history from '../../utils/history';
import path from '../../constants/clientPath';

import {
  DetailTimesContain,
  ContentDetailContain,
  HeadderContain,
  MoviesUICotain,
  ButtonBuyTicket,
  RatingMoviesContain,
  ListMoviesTime,
  ThearterContain,
  ButtonThearterItem,
  TimeMoviesContain,
  ScheduleMoviesContain,
  IconVideoTrailer,
  IconClose,
  LoadingContainer,
} from './styles';
import { getDetailMovieRequest } from './reducer';
import AppBarProject from '../AppBarProject';

const DetailMoviesTime = (props) => {
  const codeMovie = props.location.pathname.slice(8);
  const { dataDetailMovie, isLoading } = props;
  const [theaterCurrent, setTheaterCurrent] = useState(
    useEffect(() => {
      if (dataDetailMovie) {
        setTheaterCurrent(dataDetailMovie.heThongRapChieu[0].maHeThongRap);
      }
    }, [dataDetailMovie]),
  );
  const matches = useMediaQuery('(min-width: 960px)');
  const [openVideo, setOpenVideo] = React.useState(false);
  const [codeTrailer, setCodeTrailer] = useState('');
  const dispatch = useAppDispatch();

  console.log('check data detail at ui: ', theaterCurrent);
  useEffect(() => {
    dispatch(getDetailMovieRequest(codeMovie));
  }, [codeMovie]);
  const handleClickVideoTrailer = (data) => {
    setCodeTrailer(data);
    setOpenVideo(true);
  };
  const handleCloseVideo = () => {
    setOpenVideo(false);
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
        <DetailTimesContain>
          <>
            {dataDetailMovie && dataDetailMovie.moTa && (
              <>
                <ContentDetailContain>
                  <HeadderContain>
                    <MoviesUICotain>
                      <div
                        style={{
                          backgroundImage: `url(${dataDetailMovie.hinhAnh})`,
                        }}
                        className="image-movie"
                        role="presentation"
                      >
                        <IconVideoTrailer
                          className="video-trailer"
                          onClick={() =>
                            handleClickVideoTrailer(dataDetailMovie.trailer)
                          }
                        />
                      </div>
                      <div className="info-movies">
                        <h4>
                          {moment(dataDetailMovie.ngayKhoiChieu).format(
                            'DD.MM.YYYY',
                          )}
                        </h4>
                        <h1>{dataDetailMovie.tenPhim}</h1>
                        <h5>120 phút</h5>
                        <ButtonBuyTicket
                          onClick={() => window.scrollTo(300, 700)}
                        >
                          Mua vé
                        </ButtonBuyTicket>
                      </div>
                    </MoviesUICotain>
                    <RatingMoviesContain>
                      <div>
                        <div className="point-movies">
                          {dataDetailMovie.danhGia}
                        </div>
                        <div className="star-rating">
                          <Box
                            sx={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Rating
                              name="text-feedback"
                              value={dataDetailMovie.danhGia / 2}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                          </Box>
                        </div>
                      </div>
                    </RatingMoviesContain>
                  </HeadderContain>
                  {dataDetailMovie && dataDetailMovie.heThongRapChieu && (
                    <ListMoviesTime>
                      <ThearterContain>
                        {dataDetailMovie.heThongRapChieu.map((item) => {
                          return (
                            <>
                              <ButtonThearterItem
                                className={
                                  item.maHeThongRap === theaterCurrent
                                    ? 'active'
                                    : ''
                                }
                                key={item.tenHeThongRap}
                                onClick={() =>
                                  setTheaterCurrent(item.maHeThongRap)
                                }
                              >
                                <img src={item.logo} alt="image_theater" />
                              </ButtonThearterItem>
                              <div className="theater-border-bottom" />
                            </>
                          );
                        })}
                      </ThearterContain>

                      <TimeMoviesContain>
                        {dataDetailMovie.heThongRapChieu.find(
                          (item) => item.maHeThongRap === theaterCurrent,
                        ) &&
                          dataDetailMovie.heThongRapChieu
                            .find(
                              (item) => item.maHeThongRap === theaterCurrent,
                            )
                            .cumRapChieu.map((theater) => {
                              return (
                                <div
                                  className="theater-other"
                                  key={theater.maCumRap}
                                >
                                  <h3>{theater.tenCumRap}</h3>
                                  <ScheduleMoviesContain>
                                    {theater &&
                                      theater.lichChieuPhim &&
                                      theater.lichChieuPhim.map((calendar) => {
                                        return (
                                          <div
                                            onClick={() =>
                                              history.push(
                                                `/purchase/${calendar.maLichChieu}`,
                                              )
                                            }
                                            role="presentation"
                                            key={calendar.maLichChieu}
                                          >
                                            <span className="date-movies action-hover">
                                              {moment(
                                                calendar.ngayChieuGioChieu,
                                              ).format('DD-MM-YYYY')}
                                            </span>{' '}
                                            ~{' '}
                                            <span className="hour-movies action-hover">
                                              {moment(
                                                calendar.ngayChieuGioChieu,
                                              ).format('HH:mm')}
                                            </span>
                                          </div>
                                        );
                                      })}
                                  </ScheduleMoviesContain>
                                </div>
                              );
                            })}
                      </TimeMoviesContain>
                    </ListMoviesTime>
                  )}
                </ContentDetailContain>
                <Dialog
                  open={openVideo}
                  onClose={handleCloseVideo}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  PaperProps={
                    matches
                      ? {
                          sx: {
                            minWidth: '900px',
                            minHeight: '400px',
                            maxHeight: '100vh',
                            maxWidth: '100vw',
                            padding: '0',
                            overflowX: 'hidden',
                          },
                        }
                      : {
                          sx: {
                            maxWidth: '960px',
                            width: '95%',
                            minHeight: '200px',
                            padding: '0',
                            overflowX: 'hidden',
                          },
                        }
                  }
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      backgroundColor: 'RGB(236 236 236)',
                    }}
                  >
                    <IconClose onClick={handleCloseVideo} />
                  </div>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      style={{ width: '100%', height: '100%' }}
                      src={`https://www.youtube.com/embed/${codeTrailer.slice(
                        -11,
                      )}?si=1Cwerz5GWAO-eO79`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Dialog>
              </>
            )}
          </>
        </DetailTimesContain>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataDetailMovie:
      state.getDetailMovieSlice.dataDetailMovie &&
      state.getDetailMovieSlice.dataDetailMovie,
    isLoading: state.getDetailMovieSlice.isLoading,
  };
};
export default connect(mapStateToProps)(DetailMoviesTime);

import React, { useEffect, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  ShowTimesContain,
  SelecTicket,
  useStyles,
  ButtonBuyTicket,
  SearchMovieContain,
  ListMovieContain,
  ListMovies,
  MoviesContain,
  NameMovies,
  DescribeMovies,
  IconVideoTrailer,
  IconClose,
} from './styles';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { useAppDispatch } from '../../redux/hooks';
import { getToken } from '../../utils/localStorage';
import { getInformMoviesRequest, showtimeRequest } from './reducer';

function* SplitArray(arr: any, n: any) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const ShowTimes = (props) => {
  const { dataInfromMovies, dataShowtime, isLoading } = props;
  const classes = useStyles();
  const [movie, setMovie] = React.useState('');
  const [theater, setTheater] = React.useState('');
  const [calendar, setCalendar] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [dataImages, setDataImages] = useState([]);
  const [openVideo, setOpenVideo] = React.useState(false);
  const [videoTrailer, setVideoTrailer] = useState('');
  const [codeCalendar, setCodeCalendar] = useState('');
  const [search, setSearch] = useState('');
  const [changeSearch, setChangeSearch] = useState('');

  const matches = useMediaQuery('(min-width: 960px)');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showtimeRequest(search));
  }, [search]);

  useEffect(() => {
    if (matches && dataShowtime) {
      const imagesCopy: any = [...SplitArray(dataShowtime, 8)];
      setDataImages(imagesCopy);
    } else {
      const imagesCopy: any = [...SplitArray(dataShowtime, 6)];
      setDataImages(imagesCopy);
    }
    // dispatch(showtimeRequest());
  }, [dataShowtime, matches]);

  const handleClickOpen = () => {
    if (codeCalendar.length > 0) {
      history.push(`/purchase/${codeCalendar}`);
    }
    if (codeCalendar.length === 0) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickInformMovies = (codeMovie: string) => {
    dispatch(getInformMoviesRequest(codeMovie));
  };
  const handleClickSelectMovie = () => {
    setTheater('');
    setCalendar('');
    setCodeCalendar('');
  };
  const handelClickSelectTheater = () => {
    setCalendar('');
    setCodeCalendar('');
  };
  const handleClickDetailMovies = (data) => {
    // history.push(path.DETAILMOVIES);
    if (data) {
      history.push(`/detail/${data}`);
    }
  };

  const handleClickOpenVideo = (urlTrailer) => {
    setVideoTrailer(urlTrailer);
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        setSearch(`&tenPhim=${e.target.value}`);
      } else {
        setSearch('');
      }
    }
  };
  const handleChangeSearch = (e) => {
    setChangeSearch(e.target.value);
  };
  const handleClickSearchMovie = () => {
    if (changeSearch) {
      setSearch(`&tenPhim=${changeSearch}`);
    } else {
      setSearch('');
    }
  };

  return (
    <ShowTimesContain>
      <SelecTicket>
        <div className="select-movies">
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: '100%',
              height: '100%',
            }}
            classes={{ root: classes.customOutline }}
          >
            <InputLabel
              sx={{
                color: 'black',
                fontWeight: '600',
                paddingLeft: '10px',
              }}
              id="demo-simple-select-standard-label"
            >
              Phim
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              onClick={handleClickSelectMovie}
              label="Phim"
              sx={{
                '& .MuiSelect-select': {
                  paddingBottom: '29px',
                },
              }}
            >
              <MenuItem disabled value="">
                <em>Phim</em>
              </MenuItem>
              {dataShowtime &&
                dataShowtime.map((item) => {
                  return (
                    <MenuItem
                      value={item.maPhim}
                      key={item.maPhim}
                      onClick={() => handleClickInformMovies(item.maPhim)}
                    >
                      {item.tenPhim}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>

        <div style={{ width: '25%', height: '80px' }}>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: '100%',
              height: '100%',
            }}
            classes={{ root: classes.customOutline }}
          >
            <InputLabel
              sx={{
                color: 'black',
                fontWeight: '600',
                paddingLeft: '10px',
              }}
              id="demo-simple-select-standard-label"
            >
              Rạp
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={theater}
              onChange={(e) => setTheater(e.target.value)}
              onClick={handelClickSelectTheater}
              label="Rạp"
              sx={{
                '& .MuiSelect-select': {
                  paddingBottom: '29px',
                },
              }}
            >
              <MenuItem disabled value="">
                <em>Rạp</em>
              </MenuItem>
              {dataInfromMovies &&
                dataInfromMovies.heThongRapChieu &&
                dataInfromMovies.heThongRapChieu.map((item) =>
                  item.cumRapChieu.map((theaters) => {
                    return (
                      <MenuItem
                        value={theaters.tenCumRap}
                        key={theaters.maCumRap}
                      >
                        {theaters.tenCumRap}
                      </MenuItem>
                    );
                  }),
                )}
            </Select>
          </FormControl>
        </div>
        <div style={{ width: '25%', height: '100%' }}>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: '100%',
              height: '100%',
            }}
            classes={{ root: classes.customOutline }}
          >
            <InputLabel
              sx={{
                color: 'black',
                fontWeight: '600',
                paddingLeft: '10px',
              }}
              id="demo-simple-select-standard-label"
            >
              Ngày giờ chiếu
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={calendar}
              onChange={(e) => setCalendar(e.target.value)}
              label="Ngày giờ chiếu"
              sx={{
                '& .MuiSelect-select': {
                  paddingBottom: '29px',
                },
              }}
            >
              <MenuItem disabled value="">
                <em>Ngày giờ chiếu</em>
              </MenuItem>
              {theater.length > 0 &&
                dataInfromMovies &&
                dataInfromMovies.heThongRapChieu &&
                dataInfromMovies.heThongRapChieu
                  .map((item) =>
                    item.cumRapChieu.find(
                      (listTheater) => listTheater.tenCumRap === theater,
                    ),
                  )
                  .find((arrayTheater) => arrayTheater !== undefined)
                  .lichChieuPhim.map((calen, ind) => {
                    return (
                      <MenuItem
                        value={calen.maLichChieu}
                        key={`${ind}${calen.maLichChieu}`}
                        onClick={() => setCodeCalendar(calen.maLichChieu)}
                      >
                        {moment(calen.ngayChieuGioChieu).format(
                          'DD-MM-YYYY ~ HH:mm',
                        )}
                      </MenuItem>
                    );
                  })}
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            width: '20%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ButtonBuyTicket onClick={handleClickOpen}>
            Mua vé ngay
          </ButtonBuyTicket>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{
                width: '500px',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '30px',
                fontWeight: '500',
              }}
            >
              {!movie && 'Bạn chưa chọn phim'}
              {movie && !theater && 'Bạn chưa chọn rạp'}
              {movie && theater && !calendar && 'Bạn chưa chọn ngày giờ chiếu'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                {!movie && 'Vui lòng chọn phim'}
                {movie && !theater && 'Vui lòng chọn rạp'}
                {movie &&
                  theater &&
                  !calendar &&
                  'Vui lòng chọn ngày giờ chiếu'}
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5px',
              }}
            >
              <ButtonBuyTicket onClick={handleClose} sx={{ width: '100px' }}>
                Đã hiểu
              </ButtonBuyTicket>
            </DialogActions>
          </Dialog>
        </div>
      </SelecTicket>
      <SearchMovieContain>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Tìm kiếm phim"
          inputProps={{ 'aria-label': 'search google maps' }}
          onKeyDown={handleKeyDown}
          onChange={handleChangeSearch}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleClickSearchMovie}
        >
          <SearchIcon sx={{ color: 'RGB(251 66 38)' }} />
        </IconButton>
      </SearchMovieContain>
      <ListMovieContain>
        <Carousel controls={false} interval={null}>
          {dataImages &&
            dataImages.map((images, ind) => {
              return (
                <Carousel.Item key={ind}>
                  <ListMovies>
                    {images &&
                      images.map((item, index) => {
                        return (
                          <MoviesContain key={item.maPhim}>
                            <div className="image-contain">
                              <div
                                className="image-movies"
                                style={{
                                  backgroundImage: `url(${item.hinhAnh})`,
                                }}
                              >
                                <IconVideoTrailer
                                  className="icon-video"
                                  onClick={() =>
                                    handleClickOpenVideo(item.trailer)
                                  }
                                />
                              </div>
                            </div>
                            <div className="contain-inform">
                              <div
                                className="information-movies"
                                style={{ width: '100%' }}
                              >
                                <NameMovies>
                                  <p>C18</p>
                                  <h3>{item.tenPhim}</h3>
                                </NameMovies>
                                <DescribeMovies>{item.moTa}</DescribeMovies>
                              </div>
                              <div
                                className="buy-ticket-movies"
                                role="presentation"
                                onClick={() =>
                                  handleClickDetailMovies(item.maPhim)
                                }
                              >
                                Mua vé
                              </div>
                            </div>
                          </MoviesContain>
                        );
                      })}
                  </ListMovies>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </ListMovieContain>
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
            src={`https://www.youtube.com/embed/${videoTrailer.slice(
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
    </ShowTimesContain>
  );
};

const mapStateToProps = (state) => {
  return {
    dataShowtime: state.showtimeSlice.dataShowtime,
    dataInfromMovies: state.showtimeSlice.dataInformMovie,
    isLoading: state.showtimeSlice.isLoading,
  };
};

export default connect(mapStateToProps)(ShowTimes);

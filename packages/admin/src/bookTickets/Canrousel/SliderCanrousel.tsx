import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';

import Carousel from 'react-bootstrap/Carousel';

import { CanrouselContain, IconVideoSlider, IconClose } from './styles';

const TOTALCAROUSEL = [
  {
    url: 'https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png',
    video: 'kBY2k3G6LsM',
  },
  {
    url: 'https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png',
    video: 'uqJ9u7GSaYM',
  },
  {
    url: 'https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png',
    video: 'JNZv1SgHv68',
  },
];

const changePrevIcon = (
  <span>
    <ArrowBackIosNewIcon sx={{ color: 'white' }} />
  </span>
);
const changeNextIcon = (
  <span>
    <ArrowForwardIosIcon sx={{ color: 'white' }} />
  </span>
);

const SliderCanrousel = () => {
  const [codeTrailer, setCodeTrailer] = useState('');
  const [openVideo, setOpenVideo] = React.useState(false);
  const matches = useMediaQuery('(min-width: 960px)');

  const handleClickVideoTrailer = (data) => {
    setCodeTrailer(data);
    setOpenVideo(true);
  };
  const handleCloseVideo = () => {
    setOpenVideo(false);
  };
  return (
    <CanrouselContain>
      <Carousel prevIcon={changePrevIcon} nextIcon={changeNextIcon}>
        {TOTALCAROUSEL &&
          TOTALCAROUSEL.map((item) => {
            return (
              <Carousel.Item key={item.url}>
                <div
                  className="container-images"
                  style={{ backgroundImage: `url(${item.url})` }}
                  role="presentation"
                >
                  <span
                    className="icon-video"
                    onClick={() => handleClickVideoTrailer(item.video)}
                    role="presentation"
                  >
                    <IconVideoSlider />
                  </span>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>
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
    </CanrouselContain>
  );
};

export default SliderCanrousel;

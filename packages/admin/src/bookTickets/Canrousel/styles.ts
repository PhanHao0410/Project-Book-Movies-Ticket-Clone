import styled from 'styled-components';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { devices } from '../DeviceScreen';

export const CanrouselContain = styled.div`
  @media only screen and ${devices.maxsm} {
    display: none;
  }
  position: relative;
  height: 100%;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  padding-top: 65px;
  .carousel-control-prev {
    span {
      transform: scale(2.2);
      color: white !important;
      font-weight: 600 !important;
    }
  }
  .carousel-control-next {
    span {
      transform: scale(2.2);
      color: white !important;
      font-weight: 600 !important;
    }
  }
  .carousel-indicators {
    height: 15%;
    @media ${devices.lg} and ${devices.maxXl} {
      height: 22%;
    }
    li {
      border-radius: 100% !important;
      width: 15px !important;
      height: 15px !important;
      background-color: white !important;
      &:hover {
        background-color: RGB(84 90 90) !important;
      }
    }
    .active {
      background-color: RGB(251 66 38) !important;
      &:hover {
        background-color: RGB(251 66 38) !important;
      }
    }
  }
  .container-images {
    height: 310px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-video {
      display: none;
    }
    &:hover .icon-video {
      display: block;
    }

    @media only screen and ${devices.xl} {
      height: 620px;
    }
  }
`;

export const IconVideoSlider = styled(PlayCircleOutlineIcon)`
  transform: scale(4);
  color: white;
  cursor: pointer;
  &:hover {
    color: RGB(118 118 118);
  }
`;

export const IconClose = styled(CloseIcon)`
  transform: scale(1.5);
  color: RGB(127 127 127);
  cursor: pointer;
  &:hover {
    color: RGB(217 49 23);
  }
`;

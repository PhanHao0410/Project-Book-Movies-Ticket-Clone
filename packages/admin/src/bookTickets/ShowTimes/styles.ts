import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import { devices } from '../DeviceScreen';

export const useStyles = makeStyles({
  customOutline: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
    },
  },
});

export const ShowTimesContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  @media only screen and ${devices.maxsm} {
    padding-top: 65px;
  }
`;

export const SelecTicket = styled.div`
  display: none;
  @media only screen and ${devices.xl} {
    height: 80px;
    width: 960px;
    position: absolute;
    z-index: 2;
    border-radius: 6px;
    margin-top: -40px;
    background-color: white;
    align-items: center;
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    flex-wrap: wrap;
    display: flex;
  }
  @media only screen and ${devices.lg} and ${devices.maxXl} {
    height: 80px;
    position: absolute;
    z-index: 2;
    border-radius: 6px;
    margin-top: -40px;
    background-color: white;
    align-items: center;
    box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    flex-wrap: wrap;
    display: flex;
    max-width: 960px;
    width: 90%;
  }
  .select-movies {
    width: 30%;
    height: 100%;
  }
  .css-ba6l01-MuiInputBase-root-MuiInput-root-MuiSelect-root:before {
    border-bottom: none;
    content: none;
  }
  .css-sautqc-MuiFormLabel-root-MuiInputLabel-root {
    display: none;
  }

  .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon {
    margin-top: -10px;
  }
`;

export const ButtonBuyTicket = styled(Button)`
  background-color: rgb(251, 66, 38) !important;
  color: white !important;
  font-weight: 600 !important;
  :hover {
    background-color: RGB(116 2 2) !important;
  }
`;

export const SearchMovieContain = styled(Paper)`
  position: absolute;
  z-index: 2;
  width: 90%;
  max-width: 960px;
  min-width: 415px;
  height: 50px;
  display: flex;
  margin-top: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  @media only screen and ${devices.lg} {
    display: none;
  }
`;
export const ListMovieContain = styled.div`
  position: relative;
  width: 415px;
  height: 100%;
  display: flex;
  background-color: white;
  .carousel-indicators {
    margin-bottom: -60px !important;
    li {
      border-radius: 100% !important;
      width: 13px !important;
      height: 13px !important;
      background-color: RGB(175 175 175) !important;
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

  @media only Screen and ${devices.xl} {
    margin-top: 70px;
    width: 960px;
    display: flex;
  }

  @media only screen and ${devices.lg} and ${devices.maxXl} {
    margin-top: 70px;

    max-width: 960px;
    width: 90%;
  }
  @media only screen and ${devices.xs} and ${devices.maxlg} {
    margin-top: 100px;
    max-width: 960px;
    min-width: 415px;
    width: 90%;
  }
`;

export const ListMovies = styled.div`
  display: grid;
  justify-items: stretch;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(6, 1fr);
  row-gap: 50px;
  width: 100%;

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr) !important;
    column-gap: 25px;
  }
  @media only screen and ${devices.sm} and ${devices.maxlg} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr) !important;
    column-gap: 25px;
  }
`;

export const MoviesContain = styled.div`
  min-width: 149px;
  width: 100%;
  height: 200px;
  \.image-movies {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
  }
  .icon-video {
    display: none;
  }
  &:hover {
    .image-contain {
      background-image: linear-gradient(
        to bottom,
        white,
        RGB(168 168 168),
        RGB(76 75 75)
      );
    }
    .image-movies {
      filter: brightness(70%);
    }
    .icon-video {
      display: inline-block !important;
    }
  }
  @media ${devices.maxsm} {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .image-contain {
      width: 30%;
      height: 200px;
      position: relative;
      border-radius: 4px;

      .icon-video {
        display: none;
      }
    }
    .contain-inform {
      width: 66%;
      height: 200px;
    }
    .buy-ticket-movies {
      display: flex;
      width: 100%;
      height: 60px;
      justify-content: center;
      align-items: center;
      background-color: rgb(251, 66, 38);
      color: white;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      margin-top: 7px;
      filter: brightness(90%);
      &:hover {
        filter: brightness(100%);
      }
    }
  }
  @media only screen and ${devices.sm} {
    max-width: 270px;
    height: 400px;
    cursor: pointer;
    .image-contain {
      width: 100%;
      height: 314px;
      border-radius: 4px;
      position: relative;
    }
    .buy-ticket-movies {
      display: none;
    }
    &:hover {
      .information-movies {
        display: none;
      }
      .buy-ticket-movies {
        display: flex;
        width: 100%;
        height: 60px;
        justify-content: center;
        align-items: center;
        background-color: rgb(251, 66, 38);
        color: white;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 7px;
        filter: brightness(90%);
        &:hover {
          filter: brightness(100%);
        }
      }
    }
  }
`;

export const IconVideoTrailer = styled(PlayCircleOutlineIcon)`
  position: absolute;
  z-index: 2;
  transform: scale(3);
  color: RGB(197 195 195);
  &:hover {
    color: RGB(248 96 72);
  }
`;

export const NameMovies = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  height: 40px;
  p {
    padding: 4px 6px;
    border-radius: 5px;
    background-color: RGB(251 66 38);
    color: white;
    font-weight: 600;
  }
  h3 {
    margin-left: 7px;
    font-size: 20px;
    text-overflow: ellipsis;
    white-space: initial;
    overflow: hidden;
  }
`;

export const DescribeMovies = styled.div`
  width: 100%;

  color: RGB(117 117 117);
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  margin-top: 16px;
  @media only screen and ${devices.maxsm} {
    height: 86px;
    line-height: 1.5rem;
    margin-top: 0 !important;
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

import styled from 'styled-components';
import { Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { devices } from '../DeviceScreen';

export const DetailTimesContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  background-color: rgb(10, 32, 41);
  overflow-y: auto;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const ContentDetailContain = styled.div`
  width: 960px;
  padding: 0 24px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
  @media ${devices.maxlg} {
    max-width: 960px;
    width: 95%;
  }
`;

export const HeadderContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const MoviesUICotain = styled.div`
  color: white;
  display: flex;
  align-items: center;
  @media ${devices.maxsm} {
    display: block;
    text-align: center;
    .info-movies {
      margin-top: 10px;
    }
  }
  .image-movie {
    width: 204px;
    height: 314px;
    margin-right: 25px;
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .video-trailer {
      display: none;
    }
    &:hover {
      .video-trailer {
        display: block !important;
      }
    }
  }
  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.167;
  }
  h5 {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.334;
  }
`;

export const ButtonBuyTicket = styled(Button)`
  background-color: rgb(251, 66, 38) !important;
  padding: 6px 25px !important;
  color: white !important;
  font-size: 13px !important;
  margin-top: 15px !important;
  &:hover {
    background-color: RGB(173 47 27) !important;
  }
`;

export const RatingMoviesContain = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .point-movies {
    border: 10px solid rgb(134, 243, 72);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    font-weight: 400;
  }
  .star-rating {
    margin-top: 20px;
  }
`;

export const ListMoviesTime = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
`;

export const ThearterContain = styled.div`
  width: 100px;
  height: 100%;
  border-right: 1px solid RGB(213 211 211);
  .theater-border-bottom {
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid RGB(213 211 211);
  }
  .active {
    border-right: 2px solid #00ac4d;
    border-radius: 0;
  }
`;

export const ButtonThearterItem = styled(Button)`
  padding: 13px 24px !important;
  width: 100% !important;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const TimeMoviesContain = styled.div`
  width: 100%;
  padding: 16px 24px;
  overflow-y: auto;
  .theater-other {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid RGB(213 211 211);
    h3 {
      color: rgb(139, 195, 74);
      font-size: 16px;
      font-weight: 500;
      line-height: 1.167;
      margin-bottom: 15px;
    }
  }
`;

export const ScheduleMoviesContain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media ${devices.maxlg} {
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.maxmd} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  div {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: 10px 0 10px 0px;
    background-color: rgba(246, 246, 246, 0.5);
    color: grey;
    cursor: pointer;
    text-align: center;
    &:hover .action-hover {
      font-weight: 600 !important;
    }
    .date-movies {
      color: #108f3e;
      font-size: 14px;
      font-weight: 500;
    }
    .hour-movies {
      color: #fa5238;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.00938em;
    }
  }
`;

export const IconVideoTrailer = styled(PlayCircleOutlineIcon)`
  transform: scale(3.5);
  color: white;
  cursor: pointer;
  &:hover {
    color: RGB(193 193 193);
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
export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(19, 8, 49);
  display: flex;
  justify-content: center;
  img {
    width: 400px;
    height: 400px;
  }
`;

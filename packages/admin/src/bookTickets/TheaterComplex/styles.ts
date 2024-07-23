import styled from 'styled-components';
import Button from '@mui/material/Button';

import { devices } from '../DeviceScreen';

export const TheaterComplexContain = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  top: 80px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  @media only Screen and ${devices.maxlg} {
    display: none;
  }
`;

export const DistanceContain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
`;
export const DistanceOther = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(to right, white, RGB(217 214 214), white);
  width: 960px;
  padding: 0 24px;
`;
export const ListAllContain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 720px;
`;
export const ListAll = styled.div`
  height: 100%;
  display: flex;
  width: 960px;
  padding: 0 24px;
`;

export const TrademarkContain = styled.div`
  height: 100%;
  width: 90px;
  border: 1px solid rgb(228, 228, 228);
  overflow-y: auto;
  .active {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-right: 3px solid rgb(32, 182, 99);
  }

  img {
    width: 50px;
    height: 50px;
  }
  div {
    width: 80%;
    height: 0;
    border: 1px solid rgb(228, 228, 228);
    margin-left: 10%;
  }
`;

export const ButtonTrademark = styled(Button)`
  width: 100%;
  height: 90px;
  border-radius: 0 !important;
`;

export const AllTheatersContain = styled.div`
  height: 100%;
  width: 264px;
  border: 1px solid rgb(228, 228, 228);
  border-left: none;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(193, 193, 193);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }

  .active {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-right: 3px solid rgb(32, 182, 99);
    opacity: 1 !important;
  }
  .theater-border-left {
    width: 80%;
    height: 0;
    border: 1px solid rgb(228, 228, 228);
    margin-left: 10%;
  }
`;
export const ListTheater = styled(Button)`
  height: 90px;
  width: 100%;
  padding: 15px !important;
  border-radius: 0px !important;
  opacity: 0.7;
  .name {
    color: #108f3e;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }
  .address {
    color: #757575;
    font-size: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
  }
  .title {
    color: #fb4226;
    font-size: 12px;
    text-transform: lowercase;
    display: flex;
    justify-content: left;
  }
`;

export const AllShowtimesContain = styled.div`
  height: 100%;
  width: 555px;
  border: 1px solid rgb(228, 228, 228);
  border-left: none;
  overflow-y: auto;
  overflow-x: hidden;

  .theater-border-left {
    width: 90%;
    height: 0;
    border: 1px solid RGB(228 228 228);
    margin-left: 5%;
  }
`;

export const ListShowtimes = styled.div`
  width: 100%;
  max-height: 186px;
  min-height: 160px;
  padding: 20px;
  height: 100%;
  display: flex;

  img {
    width: 100px;
    height: 126px;
    align-items: center;
  }
`;

export const DescribeShowtime = styled.div`
  margin-left: 20px;
  width: 100%;
  .title-movies-showtime {
    .type-theater {
      border: 1px solid red;
      color: white;
      background-color: RGB(251 66 38);
      border-radius: 4px;
      font-weight: 600;
      padding: 3px 7px;
    }
    .name-movies {
      color: black;
      margin-left: 5px;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const ShowTimesMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 5px;
  row-gap: 15px;
  height: 70%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(193, 193, 193);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  div {
    border: 1px solid rgb(228, 228, 228);
    width: 170px;
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 4px;
    background-color: rgb(250, 250, 250);
    font-weight: 500;
    cursor: pointer;
    .day-showtime {
      color: #108f3e;
      font-size: 14px;
      margin-right: 2px;
    }
    .hour-showtime {
      color: #fa5238;
      font-size: 16px;
      margin-left: 2px;
    }
    &:hover {
      font-weight: 600;
    }
  }
`;

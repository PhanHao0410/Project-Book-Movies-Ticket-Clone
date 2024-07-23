import styled from 'styled-components';
import Button from '@mui/material/Button';
import { devices } from '../DeviceScreen';

export const NewsAllContain = styled.div`
  height: 100%;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow: hidden;
  position: relative;
  top: 150px;
  margin: 0 auto;
  padding: 0 24px;
  @media screen and ${devices.lg} {
    width: 960px;
  }
  @media screen and ${devices.maxlg} {
    max-width: 960px;
    width: 95%;
  }
`;

export const TitleNewsAll = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .MuiTab-textColorPrimary {
    color: #000;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-transform: unset;
    &:hover {
      font-size: 22px;
    }
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: RGB(251 66 38);
    font-size: 22px;
  }
  .MuiTabs-indicator {
    background-color: RGB(251 66 38);
  }
  .tab-item {
    width: 180px;
    @media screen and ${devices.maxsm} {
      width: 130px !important;
    }
  }
`;

export const TapPanelALl = styled.div`
  margin-top: 50px;
  height: 100%;
`;

export const PanelImage = styled.img`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  @media screen and ${devices.maxlg} {
    height: 400px;
  }
`;

export const TitlePanelItem = styled.div`
  cursor: pointer;
  font-weight: 600;
  color: black;
  font-size: 16px;
  line-height: 20px;
  margin-top: 15px;
  &:hover {
    color: RGB(251 66 38);
  }
`;

export const DescribeDetailMovies = styled.p`
  width: 100%;
  padding-right: 5px;
  color: #4a4a4a;
  list-style: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  font-size: 13px;
  margin-top: 20px;
  @media screen and ${devices.maxlg} {
    margin-bottom: 30px;
  }
`;

export const PanelSmallContain = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 22px;
  img {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    border-radius: 4px;
  }
  p {
    width: 100%;
    margin-left: 5px;
    padding-right: 5px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: RGB(251 66 38);
    }
  }
`;
export const HideShowButtonContain = styled.div`
  display: flex;
  justify-content: center;
`;

export const HideShowButton = styled(Button)`
  color: #949494 !important;
  border: 1px solid #949494 !important;
  font-weight: 600 !important;
  padding: 8px 24px !important;
  margin: 40px 0px !important;
  font-size: 16px !important;
  &:hover {
    background-color: RGB(251 66 38) !important;
    color: white !important;
    border: none !important;
  }
`;

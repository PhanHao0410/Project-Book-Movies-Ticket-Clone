import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import {
  NewsAllContain,
  TitleNewsAll,
  TapPanelALl,
  PanelImage,
  TitlePanelItem,
  DescribeDetailMovies,
  PanelSmallContain,
  HideShowButton,
  HideShowButtonContain,
} from './styles';
import { getNewsAllRequest } from './reducer';

const NewsAll = () => {
  const [value, setValue] = useState(0);
  const [showAllNews, setShowAllNews] = useState(false);
  const [typeNews, setTypeNews] = useState('ArticlesDienAnh02');
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(max-width: 960px)');

  const dataNewsAll = useAppSelector(
    (state) => state.getNewsAllSlice.dataNewsAll,
  );
  const isLoading = useAppSelector((state) => state.getNewsAllSlice.isLoading);

  useEffect(() => {
    if (showAllNews === true) {
      dispatch(getNewsAllRequest(typeNews));
    }
  }, [typeNews, showAllNews]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setShowAllNews(false);
    if (newValue === 0) {
      setTypeNews('ArticlesDienAnh02');
    }
    if (newValue === 1) {
      setTypeNews('ArticlesReview02');
    }
    if (newValue === 2) {
      setTypeNews('ArticlesKhuyenMai02');
    }
  };

  return (
    <NewsAllContain id="newsAll">
      <TitleNewsAll>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Điện Ảnh 24h" className="tab-item" />
            <Tab label="Review" className="tab-item" />
            <Tab label="Khuyến mãi" className="tab-item" />
          </Tabs>
        </Box>
      </TitleNewsAll>
      {!showAllNews ? (
        <HideShowButtonContain onClick={() => setShowAllNews(true)}>
          <HideShowButton>Xem thêm</HideShowButton>
        </HideShowButtonContain>
      ) : (
        <>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <TapPanelALl>
              {dataNewsAll && dataNewsAll[0] && dataNewsAll[0].img && (
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={matches ? 1 : 2}
                    columns={matches ? 24 : 12}
                  >
                    <Grid container xs={24}>
                      <Grid xs={matches ? 24 : 6}>
                        <div>
                          <PanelImage
                            src={dataNewsAll[0].img}
                            alt="image_newsall"
                          />
                          <TitlePanelItem
                            onClick={() => window.open(dataNewsAll[0].url)}
                          >
                            {dataNewsAll[0].title}
                          </TitlePanelItem>
                          <DescribeDetailMovies>
                            {dataNewsAll[0].text}
                          </DescribeDetailMovies>
                        </div>
                      </Grid>
                      <Grid xs={matches ? 24 : 6}>
                        <div>
                          <PanelImage
                            src={dataNewsAll[1].img}
                            alt="image_newsall"
                          />
                          <TitlePanelItem
                            onClick={() => window.open(dataNewsAll[1].url)}
                          >
                            {dataNewsAll[1].title}
                          </TitlePanelItem>
                          <DescribeDetailMovies>
                            {dataNewsAll[1].text}
                          </DescribeDetailMovies>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={matches ? 24 : 12}
                      spacing={matches ? 1 : 3}
                    >
                      <Grid xs={matches ? 24 : 4}>
                        <div>
                          <PanelImage
                            src={dataNewsAll[2].img}
                            alt="image_newsall"
                            style={
                              matches
                                ? { height: '400px' }
                                : { height: '165px' }
                            }
                          />
                          <TitlePanelItem
                            onClick={() => window.open(dataNewsAll[2].url)}
                          >
                            {dataNewsAll[2].title}
                          </TitlePanelItem>
                          <DescribeDetailMovies>
                            {dataNewsAll[2].text}
                          </DescribeDetailMovies>
                        </div>
                      </Grid>
                      <Grid xs={matches ? 24 : 4}>
                        <div>
                          <PanelImage
                            src={dataNewsAll[3].img}
                            alt="image_newsall"
                            style={
                              matches
                                ? { height: '400px' }
                                : { height: '165px' }
                            }
                          />
                          <TitlePanelItem
                            onClick={() => window.open(dataNewsAll[3].url)}
                          >
                            {dataNewsAll[3].title}
                          </TitlePanelItem>
                          <DescribeDetailMovies>
                            {dataNewsAll[3].text}
                          </DescribeDetailMovies>
                        </div>
                      </Grid>
                      <Grid xs={matches ? 24 : 4}>
                        <PanelSmallContain>
                          <img src={dataNewsAll[4].img} alt="image_panel" />
                          <p
                            onClick={() => window.open(dataNewsAll[4].url)}
                            role="presentation"
                          >
                            {dataNewsAll[4].title}
                          </p>
                        </PanelSmallContain>
                        <PanelSmallContain>
                          <img src={dataNewsAll[5].img} alt="image_panel" />
                          <p
                            onClick={() => window.open(dataNewsAll[5].url)}
                            role="presentation"
                          >
                            {dataNewsAll[5].title}
                          </p>
                        </PanelSmallContain>
                        <PanelSmallContain>
                          <img src={dataNewsAll[6].img} alt="image_panel" />
                          <p
                            onClick={() => window.open(dataNewsAll[6].url)}
                            role="presentation"
                          >
                            {dataNewsAll[6].title}
                          </p>
                        </PanelSmallContain>
                        <PanelSmallContain>
                          <img src={dataNewsAll[7].img} alt="image_panel" />
                          <p
                            onClick={() => window.open(dataNewsAll[7].url)}
                            role="presentation"
                          >
                            {dataNewsAll[7].title}
                          </p>
                        </PanelSmallContain>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <HideShowButtonContain onClick={() => setShowAllNews(false)}>
                <HideShowButton>Rút gọn</HideShowButton>
              </HideShowButtonContain>
            </TapPanelALl>
          )}
        </>
      )}
    </NewsAllContain>
  );
};

export default NewsAll;

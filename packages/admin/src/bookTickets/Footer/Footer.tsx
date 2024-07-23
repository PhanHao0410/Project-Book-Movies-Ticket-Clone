import React, { useState } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Unstable_Grid2';

import Carousel from 'react-bootstrap/Carousel';

import {
  LIST_THEATER,
  IMAGESCAROUSEL,
  URL_WINDOW,
  URl_APPLE,
} from './Datatotal';
import {
  FooterContain,
  ApplicationContain,
  ContentAppContain,
  ContentApplication,
  ButtonDirectApp,
  UiApplication,
  FooterInfomation,
  InfomationContain,
  RulesContain,
  TrademarkContain,
  LinkSystemAll,
  DetailInfoCompany,
} from './styles';

const Footer = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  return (
    <FooterContain>
      <ApplicationContain>
        <ContentAppContain>
          <ContentApplication>
            <div>
              <h3>Ứng dụng tiện lợi dành cho</h3>
            </div>
            <div>
              <h3>người yêu điện ảnh</h3>
            </div>
            <h5>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </h5>
            <div>
              <ButtonDirectApp onClick={() => window.open(URl_APPLE)}>
                App miễn phí - Tải về ngay
              </ButtonDirectApp>
            </div>
            <p className="select-system">
              TIX có hai phiên bản{' '}
              <span onClick={() => window.open(URl_APPLE)} role="presentation">
                IOS
              </span>{' '}
              &{' '}
              <span onClick={() => window.open(URL_WINDOW)} role="presentation">
                Android
              </span>
            </p>
          </ContentApplication>
          <div className="demo-app">
            <UiApplication>
              <Carousel controls={false} indicators={null} interval={3000}>
                {IMAGESCAROUSEL &&
                  IMAGESCAROUSEL.map((item, ind) => {
                    return (
                      <Carousel.Item key={item}>
                        <img src={item} alt="image_mobile_demo" />
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
            </UiApplication>
          </div>
        </ContentAppContain>
      </ApplicationContain>
      <FooterInfomation>
        <InfomationContain>
          <Box sx={{ flexGrow: 1 }} className="footer-system-contain">
            <Grid container spacing={3} xs={12}>
              <Grid xs={4}>
                <RulesContain>
                  <h5>TIX</h5>
                  <div className="all-rules">
                    <div>FAQ</div>
                    <div>Thỏa thuận sử dụng</div>
                    <div>Brand Guidelines</div>
                    <div>Chính sách bảo mật</div>
                  </div>
                </RulesContain>
              </Grid>
              <Grid xs={4}>
                <TrademarkContain>
                  <h5>Đối tác</h5>
                  <div>
                    {LIST_THEATER &&
                      LIST_THEATER.map((item) => {
                        return (
                          <img
                            src={item.src}
                            alt="image_trademark"
                            key={item.src}
                            onClick={() => window.open(item.url)}
                            role="presentation"
                          />
                        );
                      })}
                  </div>
                </TrademarkContain>
              </Grid>
              <Grid xs={4}>
                <LinkSystemAll>
                  <div>
                    <h5>Mobile App</h5>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABaCAMAAADHGlvmAAAAgVBMVEUAAACVlZWnp6eWlpaVlZWhoaGVlZWWlpaXl5ebm5uUlJSVlZWenp6VlZWVlZWVlZWWlpaXl5eZmZmVlZWUlJSVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWXl5eVlZWVlZWVlZWWlpaVlZWUlJSVlZWUlJSWlpaWlpaVlZWYmJiUlJT4ZcJDAAAAKnRSTlMA+AVP8guOKx0Q7qkT472zZTIX586hiYFfx6WcRifc1nk9697Rl2pVciP1WFzxAAACV0lEQVRYw62Y6ZKqMBCFEzbZkUVARBgdt+n3f8BbtxxtenApOXx/U36VmNOdBPU5Ruusc99TOK7j038WsCk8arqSoqqzTze2mMk4EhNCKjsmxsdmNVRRDLlWNOQLUS3Zg0bCtYRqrQAaEtSAKpWqzphvWiZSOlqokvk2Mc8QVzBU6Z1CiIYqE6tEYqxWQfyw6oD2wMV9fZUB9+Xf5Tnu59NYOkGSrL5a+9Zu1lEfO6ZxHVwVvtb7PnHO77LRNlzFOl56spTKTpb4SYwLjGVEEt3c0+SdChphlU9sbUcP6KpUKdtsND1kXz9K0ZGeoXN6QWCPNutAUykyqVpENJ0+FNHeE8J6sEyvJ4wNuxIC4TtBjZr05abKfFD1zbeeI6g6ZJwsDaoGiXAwVe6yythjrp1iTExVyssQQm7LAwvhNFRtIZUlpnWG65CpIJcpXAHkCoVrjagiJeigHihdFuJKpAsq7GBGVzyjq5AuH4q9dH0TgitcBeSqhSshdCPn6tBaFNEFcsmHZIu5xIeKkDA2eI9mTLiBMdZCPMIwoh/48GDyFK4iRi85rTjJ7zp3NAN643EqYK4Py3IWl8vvQ5ReXYmJQYvcxFU6+3UZeMRWcB0xXJTwxBLF1KArne84aliEFpLlKsEGzhbj5ZNVB4M1YGB1qkYc4RUydg/fwZiFNUHliz3EEms+8EzsipV6SjC5PYwxPpMFhnolG+W/KM2tZ3vbs9ON36FvOFnE+OVWMelKE5Of1Vuy+y/i+u8awsutoewr+5WEbbXTbCozfDxoXqrqtBv/U/8AtXW2fqhv80sAAAAASUVORK5CYII="
                      alt="image_mobile"
                      onClick={() => window.open(URl_APPLE)}
                      role="presentation"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAMAAAB7hEg4AAAAe1BMVEUAAACVlZWXl5eWlpaUlJSUlJSUlJSWlpaVlZWVlZWVlZWWlpaUlJSjo6OVlZWVlZWfn5+WlpaVlZWXl5eVlZWVlZWVlZWUlJSXl5eenp6VlZWtra2VlZWVlZWVlZWVlZWZmZmbm5uVlZWVlZWVlZWVlZWWlpaVlZWUlJTu8U1AAAAAKHRSTlMA51MY6UO6WiTD+JatBYDcDDvJNfHToJEuE4gI4ox4ayAQtqZ9ckhgkElVywAAAgxJREFUWMPt2NmSojAYhuHfaVAIKqtsCojrd/9XOB0DZtol8ls9B13NcySWvpVoQmnoR1m0ZNAuOK1UOPRUjJLTCuE+H/NKOMSRoaEnDjgQS7BJtvRQLlYL4jlhp6Lx7FB6XlnP4uAywwgxcaU4U1hF0ERU5nRERWyFlfi4sxL+mp1a1wkeshr2x7XBU6uQtexLmIiasSCmeGE+dJ5thJd262ETdDHAfFDLw0VS1o/WxLES6tFyQOoPlFAuMdzw1/oF9oCN2C0jeTHHDU9+BlBeb8slOtvPd91N0pWbG53m1XK/Tiuy4z3uePnJv06YzM5gOJlbUzDszVMUYLCMrRgsgak1A8uHqXUEi2Nq1d/YOk9YtvRfbSs3SkN6k52587rt7wwCUiYf8r9HD9JEDcURUBp+S3/zVqF+H/SXC35Lb5Tq600q57f0RnG/bmeb39IbZfKNLWtsja2xNbbG1u9p7dAL+S0bvZX6m94RLb9VoJfKlq2v+C3a60lJaTfI9p1W4UO6njM0n9dJFrz3OyfINhDRia4K+exbLalY0D1+q/OTWuz/HSY+GFwyCgUGS3Iyi10MtHPopcCRIvQy52KP3tSRAhqsG54+PPBujybG1tgaWyY79I7qiRK9lNtaohfe3nIbbusjgRKpa32wZgW8kj4d2Gypk1uQkpD48r0l/Kr4Z6jZRkxSw1nJX+vMF/qKdZ1sAAAAAElFTkSuQmCC"
                      alt="image_mobile"
                      onClick={() => window.open(URL_WINDOW)}
                      role="presentation"
                    />
                  </div>
                  <div>
                    <h5>Social</h5>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAflBMVEUAAACVlZWWlpaUlJSUlJSampqVlZWVlZWXl5eWlpaXl5ewsLCVlZWXl5eVlZWVlZWioqKUlJSVlZWVlZWVlZWXl5eenp6YmJiVlZWVlZWVlZWVlZWVlZWVlZWWlpaXl5eVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWWlpaUlJRq2G1aAAAAKXRSTlMAwXf4zxX8Y0OiIwTyHNy7Ce6mlHBQDynVheCd6o1qMl85ta99Vz7LSFONebAAAAKSSURBVFjD3dnX0towEIbhz2AJ415woxn4aXv/NxggM4EEw0qydZLn2Lyj0SJAAxSlIvL92vcjUQUYS7qf5G5IL5aHthQYKlokU+rVbPYwV80S+iZua8MFF1NiOVdoq+eSlLgnvbFWhSRlF41ND2Zr0iFXQnWTHdKVlVBRZmSgSPnNKMiM63NH70Cm1t+nKS5kLiy/DTCmIeTu85obGkZ+Wnfl0lBTD30Ch4YLO/TY0BjiCm9KGsfPW9kPaSQT/MNRmlJSTLbb7eIu//hQjb/MiBfvUqVXOHglMmJtAtXFzPBipbGFfDqrXmYoiZNDPU1HnUWHQiedVRqLXqEvzS+7IJanl85SPKQhsVK9NO3wsCNWjKdJs7zL6I55byfEujzLHqmQEW6EJJbzsmhSssDNiWykE9zMraSn98HHVtJ0BgTZSU+AM/NI5t68HMaZ+1vMf+hsmUfm6MNPvwFaw/SCmyMwN0xv+M+Gg2E6J4bAxTDtECNCY5bmj4OP2DA9tZauiE2zG5J4N92zGXkPO4W0a+mgUwTHVlrgx1a6QmErHWBiKb0GSkvpBKgtpTdAENpJnwAkdtIR86x5usFNbSW9wV1sI33GXWshvcRDbSHdMt9F5mnpM3doPs3fpt2x0x1z9TdPH/DUjJvu8OQZp/nraz5iOhPM/d88PWOugeZph/l5aJ5eR2/ptBkn7eFdHX45uNM/JH11RB9vSoOt0K+UNNBPgA9mNEwS4KOdHLTmFF9cQzJWMP+idGsyI4/giIRMrK9QMJEGAxRQ0rmkJ1xAVbDNdHZ5LqBBFMpH09lDk2hD4snDHgaqBbfn66KGqbqNP88uvwYYxN/my/ds0p4DjKHqyu1xs5rn81XRLk7nCP+vXxyyUrzi8kSkAAAAAElFTkSuQmCC"
                      alt="image_mobile"
                      onClick={() => window.open(URl_APPLE)}
                      role="presentation"
                    />
                    <img
                      src="data:image/png;base64,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"
                      alt="image_mobile"
                      onClick={() => window.open(URL_WINDOW)}
                      role="presentation"
                    />
                  </div>
                </LinkSystemAll>
              </Grid>
            </Grid>
          </Box>
          <DetailInfoCompany>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={matches ? 1 : 3} sx={{ color: 'white' }}>
                <Grid
                  xs={matches ? 12 : 2}
                  sx={
                    matches
                      ? {
                          display: 'flex',
                          justifyContent: 'center',
                          marginBottom: '30px',
                        }
                      : {}
                  }
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="image_company"
                    style={{ width: '100px', height: '50px' }}
                  />
                </Grid>
                <Grid xs={matches ? 12 : 8}>
                  <div className="all-info-company">
                    <h5>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
                    <div>
                      Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7,
                      Tp. Hồ Chí Minh, Việt Nam.
                    </div>
                    <div>
                      Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                    </div>
                    <div>
                      đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do
                      Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                    </div>
                    <div>Số Điện Thoại (Hotline): 1900 545 436</div>
                  </div>
                </Grid>
                <Grid
                  xs={matches ? 12 : 2}
                  sx={
                    matches
                      ? {
                          display: 'flex',
                          justifyContent: 'center',
                          marginTop: '30px',
                        }
                      : {}
                  }
                >
                  <img
                    src="https://demo1.cybersoft.edu.vn/static/media/daThongBao-logo.cb85045e.png"
                    alt="image_company"
                    style={{ width: '100px', height: '40px' }}
                  />
                </Grid>
              </Grid>
            </Box>
          </DetailInfoCompany>
        </InfomationContain>
      </FooterInfomation>
    </FooterContain>
  );
};

export default Footer;

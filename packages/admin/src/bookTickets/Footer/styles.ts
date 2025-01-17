import styled from 'styled-components';
import Button from '@mui/material/Button';

import { devices } from '../DeviceScreen';

export const FooterContain = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  margin-top: 200px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const ApplicationContain = styled.div`
  background-image: url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  @media screen and ${devices.lg} {
    padding-top: 120px;
    padding-bottom: 80px;
    /* height: 650px; */
  }
  @media ${devices.maxlg} {
    padding-top: 60px;
    padding-bottom: 80px;
    /* height: 1150px; */
  }
`;

export const ContentAppContain = styled.div`
  height: 100%;
  padding: 0 24px;
  margin: 0 auto;
  @media screen and ${devices.lg} {
    display: flex;
    width: 960px;
    .demo-app {
      position: relative;
      .carousel-item {
        width: 200px;
        height: 430px;
      }
    }
  }
  @media screen and ${devices.maxlg} {
    max-width: 960px;
    width: 95%;
    .demo-app {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      position: relative;
      .carousel-item {
        width: 300px;
        height: 650px;
      }
    }
  }
`;

export const ContentApplication = styled.div`
  width: 100%;
  @media screen and ${devices.lg} {
    margin: 50px 110px 16px 16px;
    width: 50%;
  }
  h3 {
    color: white;
    font-weight: 700;
    font-size: xx-large;
    line-height: 1.5;
    white-space: 6px;

    @media ${devices.maxsm} {
      font-size: medium;
      margin-top: 10px;
    }
  }
  h5 {
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 15px;
  }
  div {
    @media screen and ${devices.maxlg} {
      display: flex;
      justify-content: center;
    }
  }
  .select-system {
    color: white;
    font-size: medium;
    padding-top: 20px;
    margin-bottom: 10px;

    span {
      cursor: pointer;
      text-decoration: underline;
      margin: 0px 5px;
    }
    @media ${devices.maxlg} {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ButtonDirectApp = styled(Button)`
  background-color: rgb(251, 66, 38) !important;
  color: white !important;
  font-weight: 700 !important;
  font-size: medium !important;
  padding: 15px 32px !important;
  margin-top: 30px !important;
  border-radius: 4px !important;
  border: none !important;
  &:hover {
    background-color: RGB(178 53 33) !important;
  }
`;

export const UiApplication = styled.div`
  margin-top: 10px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAAMgCAMAAAAa9FkaAAACfFBMVEUAAAA/NAAgGgApIQAODAAyKAAVEQAXEgAdFwAjHAAJCAAPDAArIwAjHQAzKQAvKgAuJQA+MgAxKAA9MQAIBgA+MgAlHQA4LQA+MwAkHAAnHwA9MQADAgA8MQACAgA5LgADAgAwJQADAgAEAwACAgA9MQA+MAADAgABAQA8MAACAQA/NAA8MQADAgADAwA9MAA9MgA9MgACAQA+MgA9MgA7MAABAQA3LgA9MQADAwAEBAADAwD///8AAAAFBQUPDw8kJCYVFRU+MgBCQUM/MwA/PkBWV1lFPBbr6+uurq6Dg4NUUkwSEhPe3t4CAgIICAgKCgoODQ4QEBEYGBkMCQAIBgAXEgATDwAMDAwaGhsiIiMaFQA9PD46OTsgICEUFBQ4ODkcGxwpKCk7MAAuLi8rKyw1NTYWFhYPDAAiGwBAP0ExMTIXFxgEBAIfGQA0MzUUEgswLzEoIAAnJygdHR42NjgtLS4UEQcmHgAdGAIrIwAvJgAmJicUEw5DQ0UfHyBLTE4yMjQyKQA8Oz0tJAATEARTVFUpKiscFwAqIQA9PkAeHh8VEQARDgBJSUtFRUckHQBVVlc3LAA1KwAlJSY5LgA0KgBHSElRUlRRUVJNTlAxKhAsJg04LQBOT1EeHh4xKAA6Oz1BNw41LhI5MhQrKisoIwsgGwZYWVsuJQAmIQlTUUxQTkY6MQskHwiYmJhOTEH29vZxcXFcXF1BOhzDw8NJRC8iHQfy8vLk5OT6+vrS0tLNzc1MSDkuJgBkZGRIR0FCPzDJycmpqalHQSTa2tp/f39BQTvW1taxsbGioqKKiopCPCQ5LQC7u7uGhobt7e2RkZFqamo/OilVan5xAAAAPHRSTlMAmWtra2uda52dnZ2dE50NnfAG5WrYOJ73HJ3NRPvXaiojtOvDUy70zbBdRb2jjoJ3XeGnkn1z9op2fGzPbm65AAAWWElEQVR42uza9dMSQRjAcf3Fsbu7u3v0lhDBOu+wQQEPVNSzRUzEQLED88Xu7u7ujn/IZ/c47k5AT+GckdnPGCOvIy/fW59d7n1L/YFKzWo3rFmzX/lcKuRU5o+U1a2cHvW1KuZWNbvKOdRRKd21SbfaretVKVVwlZrWrNC8cYsxKqNzmJZhi2yc1mbJ2AwTMqyXLZHMVpv+k+0pixXzFRskSzXWEGfPnn30aJnKEWK1bI9sJ7FDcZDoU6NBu77dmhWuf/VmNTs1lnL/t+nV8TdoqNrL/ckVyHkBQM4LsBvr06B0q3qFCF+vffM26uKz9F2Bv06fI/qSzOYga3OQ0VzHqv+b9AopvWTSpEk16rSqlGf42hVazJKK499Gu+Yu/6W5v7bol9bmMC6LLP9b1FdridrptNuSSynn0k4pDvxs/0+Oq51Qu3hxN0m/G0xqVKtL6zwmTcPmbWbh5vCLc67bFzi5cN4MMA+bDBYuXDhlypR1IBAIhUKRSGTXLgs2HvP5fCtWbNq06fCCBQv8fr/b7R4FZoKpU61W60TAsuxIwmwegblcLifgJSYJl4JUOIVJxqc4gYuAf9FsNo/EWAye0WqdOhU+A/hE3MDvX4BtWuED4zELiETgxQTWYfDy4EXCS50Hr3wVmBMMhjFB8B6VbMRE0Wazia9fP/1+Ay7Ax4/QHpZ+6dp/Wb5h81mSMS53ZPKcOfDEM9TRwcmTEB0o3ZXs0H0FdD+c6q6UnyqXZzHSHSjpte2JnOlNmeEJEh6D8oRcXko/CsPpAUm/Qo6P2+/aheMHALQHpD2JPwPaz4H6kF8AXi/0j3k86fjRaHRb9PXTG7D8d+P61Ur/zcpv2omXwjv9J+HJIDw8M02fO326/ba927bh+gBWfpd6fzpranaXwpvHr4LugKQnstYPAYivrq8MnOz1/316TXc5PHyGpLs2fAi6q8LPU4cPAxIexg10l7JHcXhID+0h/t69Tz5I8Rs1aFX9j5Y8mTXcrOWBoBCU08OPyQHL+BX+UcrMJsgilrFyUMwsGyFzYc40XsukxclQLpqRr8VrOWXSLiAzEyOBsiFIrFOBvDEQbswvWQAO46uWumyRKfNWeUXIDkj7rVufPD1GRn61nn+w8Nu3wOE5cygshIM4Pfycsc43dQRv4hCVA8e7rL55R6Ow5CE9tF+59+lFSA8Lv4PeYdMZ1vssxI8Pe8Nhkj48IzTTSaPrYmIt4ehWnB7ar3zyYRJWo4muoVOvOYdZZ3gFAacXgutm8ojSjxsZ8UB40n7lw2OTyNCppGPMtyWT0ydAeUgvBHeNpOv9j/GbhL0rSfp9Wz+Q9nXq/bZ8YwiPXJNjAhG0uBD1N0yjwlAet993Cy/8uu2a6SlvDXq9AhYYgai/ZfJ7pPSHnuhoL5V3ewGcW2dMRVQ+nKFt+1bug/ZXbvyufTNSfkHMS1hMiMoPxwr7cPpDF6D9gLo9cu61lVri8oel8sGZiMofv27rIUifhPYDBlTrWSXHeb4TKe/B6WPzXCgb10SWym4iy2ef+NFDkL6EtK/RNfv5vjfCc94Ti0H5UMawcXuvf3374OVwKqc3N58PTaxikRY3cWMS0kvta7XKeo+4DeLQxBhOHxvPaa/cumtvhzOUHlfvv7vu0+YbEU4mof2VQZMGNOrYOsugb4zniQDlYx6fdr1f+3SVof7A4OdnJmrGdLAEt394DLbaOpnjvjNe3ZPtHig/HqmEXt1lqD919dk3t3rdCyWQPnlrAIz7JlnGDUIWu8ejLe97/4Wh/sa9+9dGqda9UFJSEj//YtKAgQ1+GjlV2sLHrR4swCEZf42u+Dzi34ybkMy8MV4Sj18YNGlgtdLaU05NPG7m2KH8ZOWvz/nEUPn4cjmEZNZtcfBwID7lZOyx40UoH3Yi2ePBDJWfe8+2ohTOvzIeTyRfDIA3teqdtj/eCrx40VvT0+k9Q+Xv7jc+/b4W0sevHBswEJa9dtGfhEVvT2+xM98yVCEMfs/Ki9mbiCfglDMQlr1m0ps9do99jjzo3TcZqjDuXJ6ICG7m1kQicUGz7Kvj4806POlZWp4xoL0VEaZQPJGIw+FeOeQ0nCUtejEkTxtavrDtWUSM8DjIsh+QPtuXh0dDot3u5RHhHMJQhTR4qCl1ykmSZT+wRtfUJtsCId4r2kUfknxmqMIa/hgRTgGWPRxy6raTNtr2eLhDeYFHxKF7DFVgD2II49yHHI5hcAezVgeSvhM8NFm028YjwkJvDxfe1SGjUgfMM44Enji9yLzpjpDTI4peJyKeM1ThDX6FMG5FicORnjgN4ZFRNru4DhFJhjLCfQ/CRtjOwMRJ3b/sBw9MgfSs9KEHDGWEO5edCJgCDgc+49TqBumbw5/Dohg0IewbQxnjZRJhU1c6Eg8HDqzWRbp/M8Ij2iIIY98wlDGuPh+BgMtzxnHhGLmP07QNjPqoaGcRdp2hjPJmrzRxEjDsBzbqWInsshabKJjI4/QOgmFg2nMIjDp0Jv6C7LO94U+TbbZ1CBPotx4Y6NnJ1BkngffZDvgNFQqLNj+9hWAo5XYCv+qMA/bZGt1KtYUx4xXtIxFw0k3WSFff8eTWccJxBY44XUuR97I26aalSO/eGOrBPHL7soQccfqWwtPHbgsi7BVDGUWZOOzKM/hLVaVx+pF22xQEOPr1WGMN/sxBZnNUSW+1RS0IsC8ZyijKuyrX0evnBynpNyEQoaPeYDcX4MPMHE36mQjsZShj3cd7Kj9Zk95Kb50ZTLmFxk/JTE+/38xodx9npBdHInCZoYx19xp5T3VGld5uRoCeLY02eChOb3EM+zk9/fabn9D0xYOm14umLx40vV40ffGg6fWi6YsHTa8XTV88aHq9aPriQdPrRdMXD5peL5q+eND0etH0xYOm14umLx40vV40ffGg6fWi6YvHD3bomAYAAIBhkH/Xs7C7AQmof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1HeMHTqmAQAAYBjk3/Us9F5AAuor9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9WOHjmkAAAAYBvl3PQu7G5BAh/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qxQ8c0AAAADIP8u56F3gtIoFL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlL/Q32l/of6Sv0P9ZX6H+or9T/UV+p/qK/U/1Bfqf+hvlI/duiYBgAAgGGQf9ezsLsBCXSof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/qO9S/1Heof6nvUP9S36H+pb5D/Ut9h/qX+g71L/Ud6l/q1659NScRRQEcX9s4o8MwRkUde++9j5zFhIBlcBeCBSMYTUzUtcRCsEUsKCpW7FjAbuy9997b+IU89+7qAkEFZV+Y+xvzkCfDf0/OXpbkDpY+XSx97mDp08XS5w6WPl0sfe5g6dPF0ucOlj5dLH3uYOnTxdLnDpY+XSx97mDp08XS5w6WPl0sfe5g6dPF0ucOlj592qeXigBdMTLaunedpC+tuaCm9+cD+mJktDXhCQCI5TdqpX9iZLT16lDt9E5AfiOjrQfrSPrFCem3Aiq+b2Q0dWsqANgrE9KPBmR6YGS0dO29CwBc7vj0Zh8ggZ0utTX2tUAmfKd6wimymCuAuG5ktDShBpDtUM3FEyT9IACHxewRAVWxZa+p55vIbvEetGL6lv25LgD2gCTZAIls2Wvp7hWevqOyYvrCJgO4RviNR/LHgHhtZLQz4QbQA06N9WphYdOB3DAAqDCby4FYd83IaObWaEBF/prwo8LC5r25NgDgM0seHojPRkYrXz8AEpwHa8K3Cwtbd+Q6dAYoNkuWfCCsRkYrDyyAxHKrNfiysG0fHafvATDbL5mXAiE+NzLauHtFBOSQaqwXxhQ2qZPHcZ3wW7ckVfFA1BgZbbz1A+GM0gNO0/4cR+6zCyrMFmk2EPZbRkYLd7+JgESf1Urvsl0xvUEA2ITpfUBJ7JCjiefzQDnfWIO3C/Aui+l17QCcmN7tAmCfVWkFP58i+OKgFVd9QcvBeg71BbB7JIs0Gqj57C1t9t19bwPC5a4JW6+eKGg6gCN60ZO9RfLYgXLfNTLZdf/WLCAEb8RK9k1BawNH6AYBOCULHXv2AFMTr4JAuY5bw+q+Qf0A+BnY3uMCimfrHmV10Qty2OkHw+EweYDTnpMZRIDRksUtlYPM/sLIZM/Y8SJQJjMOffAl7ptunCyvC4ArYHG7LbNB5mLtNSgv+sIIb7JNhnA/9RIASiVMX8Gz9lkv/1opLzjXhoNhvMmSp5YK+hzH4SZjvxQULrbvs7XnRZA5QlieDn2LPE6mnC/3Sm7kBIVwnb2tzYIHQQFk4qxgMBiO4KbHoVfpcOztnhCmn+GAnw5NMDL/59pnDyj46dEgokOv5yh17GNk7C3rePgpxpbO/7n3ejYoBOcOMvQXkoYe5XUCWDCPrhyf2h6iD43Mv7o7LgC/2PzBg8Fg5FFBQZMRXCJDd4CiAJYPuEsF+MV0nW2df3PtVtgVVz4UPIjpL54oa9unI5dkJABMt2B6bM+Dav4TNvmZu/suWgSqotDBCKa/8LKsoPlALpm+C66ccos7gO2XChDHfuj9PSOTvvsPvrlFiC/vPhjB9JHbuG6G5HHJ6OfjYmUI03sCS3lIMHXtledfjUwa2e99/iKVQAIblifpHxXSdZNCL14Ak8eN6T0Bnx2SiKU7r38b9/zhw1cTmBTePnx46/2HJ+7pPCQSppojUVL+6okycrpJqZ8gwGwPpkeVRfAbjhIbk6zEZofU+OID0Wg0cjBydUxZAT6xTE3fCds73ZgezYgJwPw3x7y10UOYPnLxJpbvn8f9hq4Lto8FjtP0nlI7MP9HcLqjhw5helq+SR0991utSHvnjABJP8NTMZMH5j84Zu04tJamv3qzrKxJHR2H/th+9gySHnlmlbCt88/so81rEUn/9IRS/q/tTfMCmJ46bWPx/4lY7MbucvpH6ZTH9nivFcTT8thXVc2oKJ/P1k7GXNWhHWt37KDp1z4rwPJDdNxf6Rth+wWxKg9NX1VRVTEr5mCjnwHR6TPvoEj5p7jm8e9u9Fwa8oZ1x/gmn0dOj6rWlXtNbPbTIbicPvfOHQcOHFDSP8Nl0xb/wjJNbdotWCDwMys9SvrKSvzyVXtL7CLP5v83eNFu826qCh04sHPnTkxPy5ORL2vZ08ClrVUjfoEg2IsrZsjp0Tpinq+0evSarVu3xmIxr9c7k5qqcFLz58+W5eeXyGyyIspEORQul8uuEOPwKkEBtQkqPo4Yz67A/8ihMKEimY0oofLz82ej+fOd1FRqJuH1xmJbt65ZM50qJkZTe/dWV1cvXbq0FG0qX1zpCfn9WB2/lPRrn368hOWbDtVxmWjTAwd/gaO4EudeST8PLSb/FhOzkM/nK0enN20qRUurq/fu3TsaFRPT0RpymZSLNJWQL878X1fGRihXJO5SJF8CgUiVvXZxNTWprCaW+8pxlbZy2K3Y9VdVpSjpuWlTOfL58HXiy8XXjqNHfv0r8OyB8Px9/Dj5gCMUCkmSWTJTfkTTY3kMv08e+Qzp+nVegFxrFuONVk2fFP00Rkd47XECanXH8LFY6u75Sd0xfJbTY/va9fMT69P4WB9/1BTx4/IjJX9livwhml9S0+PQv8Hw+3DLt9dzmevQqDu2FyblVy8mg8/Sp5cew+988+xU2T5yex3aivs3hsY4+cheMv30YnnwWfrfpTcjDO83v/l+6tK+TzR8R+7fdRjZY9KkSVh/kqNkZnEp+SFY+tTpLRbLm2ffb5Lsn3Dim/QZ2Ir7P/o2/QaJNP8kZDeZVqe26K+W/cXG35iSaBs1Odk01ebNK+KcjXOHuqw4/8sZ1ZFkh2s5Ge/UT5cuXToqKysb3rq/IY/LAl2bfl06T/qNianNibP9p1oRqdQR1Y5IjbkwwdxEu35aHmdJki2ylYk2/HKOePx4leoYtV61X7Ynzm509Og+1LZpz6EGPZc1ea3ajOzbpV3n7nHN04iecfpptWxW/X/6LSq1uUptnjr6/p+U3Cqc9U/7hjdt3adOe4Muj8s+XccOBkOvUc3i1c9cw0zU/Xf1/kmDDLUnGrTvajB0a5XRsP8AsKL2NQLuFb4AAAAASUVORK5CYII=');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  @media screen and ${devices.lg} {
    width: 200px;
    height: 430px;
  }
  @media ${devices.maxlg} {
    width: 300px;
    height: 650px;
  }
  img {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    @media screen and ${devices.lg} {
      border-radius: 30px;
      padding: 10px 5px 10px 5px;
      width: 200px;
      height: 430px;
    }
    @media ${devices.maxlg} {
      padding: 10px 6px 10px 6px;
      border-radius: 40px;
      width: 300px;
      height: 650px;
    }
  }
`;

export const FooterInfomation = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(33, 33, 33);
`;

export const InfomationContain = styled.div`
  width: 960px;
  height: 100%;
  padding: 0px 24px;
  margin: 0 auto;
  padding-bottom: 50px;
  overflow: hidden;

  @media screen and ${devices.xl} {
    padding-top: 24px;
    .footer-system-contain {
      padding-bottom: 50px;
    }
  }

  @media ${devices.maxXl} {
    max-width: 960px;
    width: 90%;
    .footer-system-contain {
      display: none;
    }
  }
`;

export const RulesContain = styled.div`
  h5 {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
  }
  div {
    color: white;
  }
  .all-rules {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5px;
    div {
      color: #9e9e9e;
      font-size: 12px;
      letter-spacing: 0.00938em;
      &:hover {
        color: white;
      }
    }
  }
`;

export const TrademarkContain = styled.div`
  h5 {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 50%;
    }
  }
`;

export const LinkSystemAll = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  h5 {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const DetailInfoCompany = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  width: 100%;
  height: 100%;
  padding-top: 30px;
  .all-info-company {
    h5 {
      font-size: 12px;
      text-align: left;
      @media ${devices.maxXl} {
        text-align: center;
      }
    }
    div {
      font-size: 12px;
      line-height: 1.6;
      font-weight: 500;
      letter-spacing: 0.0075em;
      @media ${devices.maxXl} {
        text-align: center;
      }
    }
  }
`;

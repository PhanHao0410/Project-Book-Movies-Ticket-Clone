import { all } from 'redux-saga/effects';
import loginSaga from '../../containers/Login/saga';
import {
  showtimeWatcher,
  getInformMoviesWatcher,
} from '../../bookTickets/ShowTimes/saga';
import {
  getTheaterWatcher,
  getListCalendarWatcher,
} from '../../bookTickets/TheaterComplex/saga';
import newsAllSaga from '../../bookTickets/NewsAll/saga';
import {
  informRoomTicketWatcher,
  purchaseTicketWatcher,
} from '../../bookTickets/PurchaseTicket/saga';
import detailMoviesSaga from '../../bookTickets/DetailMoviesTime/saga';
import signInSaga from '../../bookTickets/SignIn/saga';
import {
  informAccountWatcher,
  updateInformAccountWatcher,
  historyAccountWatcher,
} from '../../bookTickets/AccountInform/saga';
import signUpSaga from '../../bookTickets/SignUp/saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    showtimeWatcher(),
    getInformMoviesWatcher(),
    getTheaterWatcher(),
    getListCalendarWatcher(),
    newsAllSaga(),
    detailMoviesSaga(),
    signInSaga(),
    informRoomTicketWatcher(),
    purchaseTicketWatcher(),
    informAccountWatcher(),
    updateInformAccountWatcher(),
    historyAccountWatcher(),
    signUpSaga(),
  ]);
}

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import globalStore from '../../containers/Global/reducer';
import loginSlice from '../../containers/Login/reducer';
import showtimeSlice from '../../bookTickets/ShowTimes/reducer';
import getTheaterSlice from '../../bookTickets/TheaterComplex/reducer';
import getNewsAllSlice from '../../bookTickets/NewsAll/reducer';
import getInformRoomTicketSlice from '../../bookTickets/PurchaseTicket/reducer';
import getDetailMovieSlice from '../../bookTickets/DetailMoviesTime/reducer';
import signInSlice from '../../bookTickets/SignIn/reducer';
import informAccountSlice from '../../bookTickets/AccountInform/reducer';
import signUpSlice from '../../bookTickets/SignUp/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  globalStore,
  loginSlice,
  showtimeSlice,
  getTheaterSlice,
  getNewsAllSlice,
  getInformRoomTicketSlice,
  getDetailMovieSlice,
  signInSlice,
  informAccountSlice,
  signUpSlice,
});

export default rootReducer;

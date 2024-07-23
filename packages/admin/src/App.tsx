import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import path from 'admin/src/constants/clientPath';
import LoginPage from './containers/Login';
import ProtectedRoute from './components/ProtectedRoute';
import DefaultSidebar from './components/DefaultSidebar';
import history from './utils/history';
import ContainersUi from './bookTickets/ContainersUi';
import AppBarProject from './bookTickets/AppBarProject';
import SignIn from './bookTickets/SignIn';
import SignUp from './bookTickets/SignUp';
import PurchaseTicket from './bookTickets/PurchaseTicket';
import DetailMoviesTime from './bookTickets/DetailMoviesTime';
import AccountInform from './bookTickets/AccountInform';
import TestBuyTicket from './bookTickets/TestBuyTicket';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const s3ConfigPath = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
  if (s3ConfigPath) {
    history.replace(s3ConfigPath);
  }
  return (
    <div>
      <HashRouter>
        {/* <AppBarProject /> */}
        <Switch>
          {/**
           * PUBLIC PATHS
           *  */}

          <Route exact path={path.UIHOME} component={ContainersUi} />
          <Route exact path={path.SIGNiN} component={SignIn} />
          <Route exact path={path.SIGNUP} component={SignUp} />
          <Route path="/purchase/:codeCalendar" component={PurchaseTicket} />
          <Route path="/detail/:codeMovies" component={DetailMoviesTime} />
          <Route path={path.ACCOUNT} component={AccountInform} />
          <Route path="/test-buy-ticket" component={TestBuyTicket} />
          {/**
           * PROTECTED PATHS
           */}
          {/* <ProtectedRoute path={path.ROOT} component={DefaultSidebar} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

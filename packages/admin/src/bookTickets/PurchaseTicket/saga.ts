import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import AuthenticationService from '../../services/AuthenticationService';
import { REQUEST_STATUS, STATUS_CODE } from '../../constants/common';
import { InformCalendar, FromPurchaseTicket } from '../../types/Requests/index';
import {
  getgetPurchaseTicketSuccess,
  getInformRoomTicketFail,
  getInformRoomTicketRequest,
  getInformRoomTicketSuccess,
  getPurchaseTicketFail,
  getPurchaseTicketRequest,
} from './reducer';

function* informRoomTicketFlow(data: PayloadAction<InformCalendar>) {
  try {
    const response = yield AuthenticationService.getListRoomTicket(
      data.payload,
    );
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getInformRoomTicketSuccess(response.data));
    }
  } catch (error) {
    yield put(getInformRoomTicketFail(error.response));
  }
}

function* purchaseTicketFlow(action: PayloadAction<FromPurchaseTicket>) {
  try {
    console.log('check data dispatch at saga: ', action);
    if (action.payload) {
      const response = yield AuthenticationService.purchaseTicket(
        action.payload,
      );
      if (response.status === STATUS_CODE.SUCCESS) {
        yield put(getgetPurchaseTicketSuccess(response.data));
      }
    }
  } catch (error) {
    console.log('check error: ', error.response);
    yield put(getPurchaseTicketFail(error.response.data));
  }
}

export function* informRoomTicketWatcher() {
  yield takeEvery(getInformRoomTicketRequest, informRoomTicketFlow);
}

export function* purchaseTicketWatcher() {
  yield takeEvery(getPurchaseTicketRequest, purchaseTicketFlow);
}

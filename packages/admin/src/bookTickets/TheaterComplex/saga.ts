import { takeEvery, put } from 'redux-saga/effects';
import AuthenticationService from '../../services/AuthenticationService';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  getTheaterRequest,
  getTheaterSuccess,
  getTheaterFail,
  getListCalendarRequest,
  getListCalendarFail,
  getListCalendarSuccess,
} from './reducer';
import { STATUS_CODE } from '../../constants/common';
import { ListCalendar } from '../../types/Requests';

function* getTheaterFlow() {
  try {
    const response = yield AuthenticationService.getInformThearter();
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getTheaterSuccess(response.data));
    }
  } catch (error) {
    yield put(getTheaterFail(error));
  }
}

function* getListCalendarFlow(data: PayloadAction<ListCalendar>) {
  try {
    const response = yield AuthenticationService.getListCalendar(data.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getListCalendarSuccess(response.data));
    }
  } catch (error) {
    yield put(getListCalendarFail(error));
  }
}

export function* getTheaterWatcher() {
  yield takeEvery(getTheaterRequest, getTheaterFlow);
}

export function* getListCalendarWatcher() {
  yield takeEvery(getListCalendarRequest, getListCalendarFlow);
}

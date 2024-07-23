import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { STATUS_CODE } from '../../constants/common';
import AuthenticationService from '../../services/AuthenticationService';
import {
  FormHistory,
  FormUpdateAccount,
  FromInformAccount,
} from '../../types/Requests/index';
import {
  getHistoryAccountFail,
  getHistoryAccountRequest,
  getHistoryAccountSuccess,
  getInformAccountFail,
  getInformAccountRequest,
  getInformAccountSuccess,
  getUpdateInformAccountFail,
  getUpdateInformAccountResquest,
  getUpdateInformAccountSuccess,
} from './reducer';

function* informAccountFlow(action: PayloadAction<FromInformAccount>) {
  try {
    const response = yield AuthenticationService.getInformAccount(
      action.payload,
    );
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getInformAccountSuccess(response.data[0]));
    }
  } catch (error) {
    yield put(getInformAccountFail(error.response));
  }
}

function* updateInformAccountFlow(action: PayloadAction<FormUpdateAccount>) {
  try {
    const response = yield AuthenticationService.updateInformAccount(
      action.payload,
    );
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getUpdateInformAccountSuccess(response.data));
    }
  } catch (error) {
    yield put(getUpdateInformAccountFail(error.response));
  }
}

function* historyAccountFlow(action: PayloadAction<FormHistory>) {
  try {
    if (action.payload) {
      const taiKhoan = action.payload;
      const response = yield AuthenticationService.historyAccount({ taiKhoan });
      if (response.status === STATUS_CODE.SUCCESS) {
        yield put(getHistoryAccountSuccess(response.data));
      }
    }
  } catch (error) {
    yield put(getHistoryAccountFail(error.response));
  }
}

export function* informAccountWatcher() {
  yield takeEvery(getInformAccountRequest, informAccountFlow);
}

export function* updateInformAccountWatcher() {
  yield takeEvery(getUpdateInformAccountResquest, updateInformAccountFlow);
}

export function* historyAccountWatcher() {
  yield takeEvery(getHistoryAccountRequest, historyAccountFlow);
}

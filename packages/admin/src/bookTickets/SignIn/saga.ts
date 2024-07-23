import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { STATUS_CODE } from '../../constants/common';
import { getSignInFail, getSignInRequest, getSignInSuccess } from './reducer';
import AuthenticationService from '../../services/AuthenticationService';
import { FormSignIn } from '../../types/Requests/index';

function* signInFlow(action: PayloadAction<FormSignIn>) {
  try {
    const response = yield AuthenticationService.signIn(action.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      console.log('check data sign in at saga: ', response.data);
      yield put(getSignInSuccess(response.data));
    }
  } catch (error) {
    yield put(getSignInFail(error.response.data));
  }
}

function* signInWatcher() {
  yield takeEvery(getSignInRequest, signInFlow);
}

export default signInWatcher;

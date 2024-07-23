import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { STATUS_CODE } from '../../constants/common';
import AuthenticationService from '../../services/AuthenticationService';
import { getSignUpFail, getSignUpRequest, getSignUpSuccess } from './reducer';
import { FormSignUp } from '../../types/Requests/index';
import { getSignInFail } from '../SignIn/reducer';

function* signUpFlow(action: PayloadAction<FormSignUp>) {
  try {
    const response = yield AuthenticationService.signUp(action.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getSignUpSuccess(response.data));
    }
  } catch (error) {
    yield put(getSignUpFail(error.response.data));
  }
}

function* signUpWatcher() {
  yield takeEvery(getSignUpRequest, signUpFlow);
}

export default signUpWatcher;

import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { STATUS_CODE } from '../../constants/common';
import AuthenticationService from '../../services/AuthenticationService';
import {
  getDetailMovieRequest,
  getDetailMoviesFail,
  getDetailMovieSuccess,
} from './reducer';
import { DetailMovie } from '../../types/Requests/index';

function* getDetailMovieFlow(data: PayloadAction<DetailMovie>) {
  try {
    const response = yield AuthenticationService.getDetailMovie(data.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getDetailMovieSuccess(response.data));
    }
  } catch (error) {
    yield put(getDetailMoviesFail(error));
  }
}

function* getDetailMovieWatcher() {
  yield takeEvery(getDetailMovieRequest, getDetailMovieFlow);
}

export default getDetailMovieWatcher;

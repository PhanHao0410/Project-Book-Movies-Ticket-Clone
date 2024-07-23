import { put, takeEvery } from 'redux-saga/effects';
import AuthenticationService from '../../services/AuthenticationService';
import {
  showtimeRequest,
  showtimeSuccess,
  showtimeFail,
  getInformMoviesFail,
  getInformMoviesRequest,
  getInformMoviesSuccess,
} from './reducer';
import { STATUS_CODE } from '../../constants/common';
import { InformMovies, SearchMovies } from '../../types/Requests/index';
import { PayloadAction } from '@reduxjs/toolkit';

function* showtimeFlow(action: PayloadAction<SearchMovies>) {
  try {
    const response = yield AuthenticationService.showtimeUrl(action.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(showtimeSuccess(response.data));
    }
  } catch (error) {
    yield put(showtimeFail(error));
  }
}

function* getInformMoviesFlow(data: PayloadAction<InformMovies>) {
  try {
    const response = yield AuthenticationService.getInformMovies(data.payload);
    if (response.status === STATUS_CODE.SUCCESS) {
      yield put(getInformMoviesSuccess(response.data));
    }
  } catch (error) {
    yield put(getInformMoviesFail(error));
  }
}

export function* getInformMoviesWatcher() {
  yield takeEvery(getInformMoviesRequest, getInformMoviesFlow);
}

export function* showtimeWatcher() {
  yield takeEvery(showtimeRequest, showtimeFlow);
}

import { takeEvery, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import AuthenticationService from '../../services/AuthenticationService';
import { STATUS_CODE } from '../../constants/common';
import { TypeNews } from '../../types/Requests/index';
import {
  getNewsAllFail,
  getNewsAllRequest,
  getNewsAllSuccess,
} from './reducer';

function* NewsAllFlow(action: PayloadAction<TypeNews>) {
  try {
    const typenew: string = action.payload.toString();
    if (typenew === 'ArticlesDienAnh02') {
      const response = yield AuthenticationService.getNewsAllFilm(
        action.payload,
      );
      if (response.status === STATUS_CODE.SUCCESS) {
        yield put(getNewsAllSuccess(response.data));
      }
    } else {
      const response = yield AuthenticationService.getNewsAll(action.payload);
      if (response.status === STATUS_CODE.SUCCESS) {
        yield put(getNewsAllSuccess(response.data));
      }
    }
  } catch (error) {
    yield put(getNewsAllFail(error.message));
  }
}

function* NewsAllWatcher() {
  yield takeEvery(getNewsAllRequest, NewsAllFlow);
}

export default NewsAllWatcher;

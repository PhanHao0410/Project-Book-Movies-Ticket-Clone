import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'informAccountSlice';

const slice = createSlice({
  name: sliceName,
  initialState: {
    informAccountStatus: REQUEST_STATUS.IDLE,
    updateInformAccountStatus: REQUEST_STATUS.IDLE,
    historyAccountStatus: REQUEST_STATUS.IDLE,
    updateInformAccountMessage: '',
    informAccountMessage: '',
    historyAccountMessage: '',
    dataInformAccount: {},
    dataHistoryAccount: {},
    isLoading: false,
  },
  reducers: {
    getInformAccountRequest: (state, action) => {
      state.informAccountStatus = REQUEST_STATUS.REQUESTING;
    },
    getInformAccountSuccess: (state, action) => {
      state.informAccountStatus = REQUEST_STATUS.SUCCESS;
      state.dataInformAccount = action.payload;
    },
    getInformAccountFail: (state, action) => {
      state.informAccountStatus = REQUEST_STATUS.ERROR;
      state.informAccountMessage = action.payload;
    },
    getUpdateInformAccountResquest: (state, action) => {
      state.updateInformAccountStatus = REQUEST_STATUS.REQUESTING;
    },
    getUpdateInformAccountSuccess: (state, action) => {
      state.updateInformAccountStatus = REQUEST_STATUS.SUCCESS;
      state.dataInformAccount = action.payload;
    },
    getUpdateInformAccountFail: (state, action) => {
      state.updateInformAccountStatus = REQUEST_STATUS.ERROR;
      state.updateInformAccountMessage = action.payload;
    },
    getHistoryAccountRequest: (state, action) => {
      state.historyAccountStatus = REQUEST_STATUS.REQUESTING;
      state.isLoading = true;
    },
    getHistoryAccountSuccess: (state, action) => {
      state.historyAccountStatus = REQUEST_STATUS.SUCCESS;
      state.isLoading = false;
      state.dataHistoryAccount = action.payload;
    },
    getHistoryAccountFail: (state, action) => {
      state.historyAccountStatus = REQUEST_STATUS.ERROR;
      state.isLoading = false;
      state.historyAccountMessage = action.payload;
    },
  },
});

export const {
  getInformAccountRequest,
  getInformAccountSuccess,
  getInformAccountFail,
  getUpdateInformAccountResquest,
  getUpdateInformAccountSuccess,
  getUpdateInformAccountFail,
  getHistoryAccountRequest,
  getHistoryAccountSuccess,
  getHistoryAccountFail,
} = slice.actions;

export default slice.reducer;

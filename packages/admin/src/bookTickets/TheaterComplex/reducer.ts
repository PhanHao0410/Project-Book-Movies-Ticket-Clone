import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const slicename = 'getTheaterSlice';

export const slice = createSlice({
  name: slicename,
  initialState: {
    getTheaterStatus: REQUEST_STATUS.IDLE,
    dataTheater: [],
    dataListCalendar: [],
    getTheaterMessage: '',
  },
  reducers: {
    makeLoading: (state, { payload }) => {
      state.getTheaterStatus = payload;
    },
    getTheaterRequest: (state) => {
      state.getTheaterStatus = REQUEST_STATUS.REQUESTING;
    },
    getTheaterSuccess: (state, action) => {
      state.getTheaterStatus = REQUEST_STATUS.SUCCESS;
      state.dataTheater = action.payload;
    },
    getTheaterFail: (state, action) => {
      state.getTheaterStatus = REQUEST_STATUS.ERROR;
      state.getTheaterMessage = action.payload;
    },
    getListCalendarRequest: (state, action) => {
      state.getTheaterStatus = REQUEST_STATUS.REQUESTING;
    },
    getListCalendarSuccess: (state, action) => {
      state.getTheaterStatus = REQUEST_STATUS.SUCCESS;
      state.dataListCalendar = action.payload;
    },
    getListCalendarFail: (state, action) => {
      state.getTheaterStatus = REQUEST_STATUS.ERROR;
      state.getTheaterMessage = action.payload;
    },
    clearApiMessage: (state) => {
      state.getTheaterMessage = '';
    },
  },
});

export const {
  makeLoading,
  getTheaterRequest,
  getTheaterSuccess,
  getTheaterFail,
  getListCalendarRequest,
  getListCalendarSuccess,
  getListCalendarFail,
  clearApiMessage,
} = slice.actions;

export const selectGetTheaterSlice = (state: any) => state[slicename];
export default slice.reducer;

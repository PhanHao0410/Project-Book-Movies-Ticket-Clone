import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'showtimeSlice';

export const slice = createSlice({
  name: sliceName,
  initialState: {
    showtimeStatus: REQUEST_STATUS.IDLE,
    isLoading: false,
    dataShowtime: [],
    dataInformMovie: [],
    showtimeMessage: '',
  },
  reducers: {
    makeLoading: (state, { payload }) => {
      state.showtimeStatus = payload;
    },
    showtimeRequest: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.REQUESTING;
      state.showtimeMessage = '';
      state.isLoading = true;
    },
    showtimeSuccess: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.SUCCESS;
      state.isLoading = false;
      state.dataShowtime = action.payload;
    },
    showtimeFail: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.ERROR;
      state.isLoading = false;
      state.showtimeMessage = action.payload;
    },
    getInformMoviesRequest: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.REQUESTING;
    },
    getInformMoviesSuccess: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.SUCCESS;
      state.dataInformMovie = action.payload;
    },
    getInformMoviesFail: (state, action) => {
      state.showtimeStatus = REQUEST_STATUS.ERROR;
      state.showtimeMessage = action.payload;
    },
    clearApiMessage: (state) => {
      state.showtimeMessage = '';
    },
  },
});

export const {
  makeLoading,
  showtimeRequest,
  showtimeSuccess,
  showtimeFail,
  getInformMoviesRequest,
  getInformMoviesSuccess,
  getInformMoviesFail,
  clearApiMessage,
} = slice.actions;

export const selectShowtimeSlice = (state: any) => state[sliceName];

export default slice.reducer;

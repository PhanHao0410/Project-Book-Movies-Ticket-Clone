import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'getDetailMovieSlice';

const slice = createSlice({
  name: sliceName,
  initialState: {
    detailMovieStatus: REQUEST_STATUS.IDLE,
    detailMovieMessage: '',
    dataDetailMovie: null,
    isLoading: false,
  },
  reducers: {
    getDetailMovieRequest: (state, action) => {
      state.detailMovieStatus = REQUEST_STATUS.REQUESTING;
      state.isLoading = true;
    },
    getDetailMovieSuccess: (state, action) => {
      state.detailMovieStatus = REQUEST_STATUS.SUCCESS;
      state.isLoading = false;
      state.dataDetailMovie = action.payload;
    },
    getDetailMoviesFail: (state, action) => {
      state.detailMovieStatus = REQUEST_STATUS.ERROR;
      state.isLoading = false;
      state.detailMovieMessage = action.payload;
    },
  },
});

export const {
  getDetailMovieRequest,
  getDetailMovieSuccess,
  getDetailMoviesFail,
} = slice.actions;

export default slice.reducer;

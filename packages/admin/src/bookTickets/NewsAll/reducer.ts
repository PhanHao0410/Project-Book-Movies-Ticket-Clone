import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'NewsAllSlice';

const slice = createSlice({
  name: sliceName,
  initialState: {
    newsAllStatus: REQUEST_STATUS.IDLE,
    isLoading: false,
    dataNewsAll: [],
    newsAllMessage: '',
  },
  reducers: {
    makeLoading: (state, { payload }) => {
      state.newsAllStatus = payload;
    },
    getNewsAllRequest: (state, action) => {
      state.newsAllStatus = REQUEST_STATUS.REQUESTING;
      state.isLoading = true;
      state.dataNewsAll = [];
    },
    getNewsAllSuccess: (state, action) => {
      state.newsAllStatus = REQUEST_STATUS.SUCCESS;
      state.isLoading = false;
      state.dataNewsAll = action.payload;
    },
    getNewsAllFail: (state, action) => {
      state.newsAllStatus = REQUEST_STATUS.ERROR;
      state.isLoading = false;
      state.newsAllMessage = action.payload;
    },
    clearApiMessage: (state) => {
      state.newsAllMessage = '';
    },
  },
});

export const {
  makeLoading,
  getNewsAllRequest,
  getNewsAllSuccess,
  getNewsAllFail,
  clearApiMessage,
} = slice.actions;

export const selectNewsAllSlice = (state: any) => state[sliceName];

export default slice.reducer;

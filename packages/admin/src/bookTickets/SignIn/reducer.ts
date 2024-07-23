import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';
import { CURRENT_USER, ACCESS_TOKEN } from '../../constants/localStorage';

const sliceName = 'signInSlice';

const slice = createSlice({
  name: sliceName,
  initialState: {
    signInStatus: REQUEST_STATUS.IDLE,
    signInMessage: '',
  },
  reducers: {
    getSignInRequest: (state, action) => {
      if (action) state.signInStatus = REQUEST_STATUS.REQUESTING;
      state.signInMessage = '';
    },
    getSignInSuccess: (state, action) => {
      if (action.payload.accessToken) {
        localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
        localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      }
      state.signInStatus = REQUEST_STATUS.SUCCESS;
      state.signInMessage = '';
    },
    getSignInFail: (state, action) => {
      state.signInStatus = REQUEST_STATUS.ERROR;
      state.signInMessage = action.payload;
    },
  },
});

export const { getSignInRequest, getSignInSuccess, getSignInFail } =
  slice.actions;

export const selectSignInSlice = (state: any) => state[sliceName];

export default slice.reducer;

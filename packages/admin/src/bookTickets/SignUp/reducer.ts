import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'signUpSlice';
const slice = createSlice({
  name: sliceName,
  initialState: {
    signUpStatus: REQUEST_STATUS.IDLE,
    signUpMessage: '',
    dataSignUp: {},
  },
  reducers: {
    getSignUpRequest: (state, action) => {
      state.signUpStatus = REQUEST_STATUS.REQUESTING;
      state.signUpMessage = '';
      state.dataSignUp = {};
    },
    getSignUpSuccess: (state, action) => {
      state.signUpStatus = REQUEST_STATUS.SUCCESS;
      state.dataSignUp = action.payload;
    },
    getSignUpFail: (state, action) => {
      state.signUpStatus = REQUEST_STATUS.ERROR;
      state.signUpMessage = action.payload;
    },
  },
});

export const { getSignUpRequest, getSignUpSuccess, getSignUpFail } =
  slice.actions;
export default slice.reducer;

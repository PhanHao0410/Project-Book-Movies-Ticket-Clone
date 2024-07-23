import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/common';

const slicename = 'informRoomTicketSlice';

const slice = createSlice({
  name: slicename,
  initialState: {
    informRoomTicketStatus: REQUEST_STATUS.IDLE,
    isLoading: false,
    dataInformRoom: [],
    informRoomTicketMessage: '',
    purchaseTicketStatus: REQUEST_STATUS.IDLE,
    purchaseTicketMessage: '',
    dataPurchaseTicket: '',
  },
  reducers: {
    makeLoading: (state, action) => {
      state.informRoomTicketStatus = action.payload;
    },
    getInformRoomTicketRequest: (state, action) => {
      state.informRoomTicketStatus = REQUEST_STATUS.REQUESTING;
      state.isLoading = true;
      state.informRoomTicketMessage = '';
    },
    getInformRoomTicketSuccess: (state, action) => {
      state.informRoomTicketStatus = REQUEST_STATUS.SUCCESS;
      state.isLoading = false;
      state.dataInformRoom = action.payload;
    },
    getInformRoomTicketFail: (state, action) => {
      state.informRoomTicketStatus = REQUEST_STATUS.ERROR;
      state.isLoading = false;
      state.informRoomTicketMessage = action.payload;
    },
    getPurchaseTicketRequest: (state, action) => {
      state.purchaseTicketStatus = REQUEST_STATUS.REQUESTING;
      state.purchaseTicketMessage = '';
      state.dataPurchaseTicket = '';
    },
    getgetPurchaseTicketSuccess: (state, action) => {
      state.purchaseTicketStatus = REQUEST_STATUS.SUCCESS;
      state.dataPurchaseTicket = action.payload;
    },
    getPurchaseTicketFail: (state, action) => {
      state.purchaseTicketStatus = REQUEST_STATUS.ERROR;
      state.purchaseTicketMessage = action.payload;
    },
    clearApiMessage: (state) => {
      state.informRoomTicketMessage = '';
    },
  },
});

export const {
  makeLoading,
  getInformRoomTicketRequest,
  getInformRoomTicketSuccess,
  getInformRoomTicketFail,
  getPurchaseTicketRequest,
  getgetPurchaseTicketSuccess,
  getPurchaseTicketFail,
  clearApiMessage,
} = slice.actions;

export const selectInformRoomTicket = (state: any) => state[slicename];

export default slice.reducer;

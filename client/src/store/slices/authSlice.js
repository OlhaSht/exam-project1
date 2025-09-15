import { createSlice } from '@reduxjs/toolkit';
import CONSTANTS from '../../constants';
import * as restController from '../../api/rest/restController';
import {
  decorateAsyncThunk,
  pendingReducer,
  fulfilledReducer,
  rejectedReducer,
} from '../../utils/store';

const AUTH_SLICE_NAME = 'auth';

const initialState = {
  isFetching: false,
  error: null,
};

export const checkAuth = decorateAsyncThunk({
  key: `${AUTH_SLICE_NAME}/checkAuth`,
  thunk: async ({ data: authInfo, history, authMode }) => {
    let response;
    if (authMode === CONSTANTS.AUTH_MODE.LOGIN) {
      response = await restController.loginRequest(authInfo);
    } else {
      response = await restController.registerRequest(authInfo);
    }
    const token = response?.data?.token || response?.data?.tokenPair?.access;
    if (token) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token);
    }
    
    history.replace('/');
  },
});

export const refreshToken = decorateAsyncThunk({
  key: `${AUTH_SLICE_NAME}/refreshToken`,
  thunk: async () => {
    const response = await restController.refreshRequest(); 
    // const accessToken = response?.data?.accessToken;
    const accessToken = response?.data?.tokenPair?.access;

    if (accessToken) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, accessToken);
    }
    return accessToken;
  },
});


const reducers = {
  clearAuthError: state => {
    state.error = null;
  },
  clearAuth: () => initialState,
};

const extraReducers = builder => {
  builder.addCase(checkAuth.pending, pendingReducer);
  builder.addCase(checkAuth.fulfilled, fulfilledReducer);
  builder.addCase(checkAuth.rejected, rejectedReducer);

  builder.addCase(refreshToken.pending, pendingReducer);
  builder.addCase(refreshToken.fulfilled, fulfilledReducer);
  builder.addCase(refreshToken.rejected, rejectedReducer);
};

const authSlice = createSlice({
  name: `${AUTH_SLICE_NAME}`,
  initialState,
  reducers,
  extraReducers,
});

const { actions, reducer } = authSlice;

export const { clearAuthError, clearAuth } = actions;

export default reducer;

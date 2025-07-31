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

// export const checkAuth = decorateAsyncThunk({
//   key: `${AUTH_SLICE_NAME}/checkAuth`,
//   thunk: async ({ data: authInfo, history, authMode }) => {
//     authMode === CONSTANTS.AUTH_MODE.LOGIN
//       ? await restController.loginRequest(authInfo)
//       : await restController.registerRequest(authInfo);
//     history.replace('/');
//   },
// });

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

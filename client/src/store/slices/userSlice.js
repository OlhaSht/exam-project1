import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
import { controller } from '../../api/ws/socketController';
import { rejectedReducer } from '../../utils/store';
import { changeEditModeOnUserProfile } from './userProfileSlice';

const USER_SLICE_NAME = 'user';

const initialState = {
  isFetching: true,
  error: null,
  data: null,
  isLoggedIn: true,
};

export const getUser = createAsyncThunk(
  `${USER_SLICE_NAME}/getUser`,
  async (replace, { rejectWithValue }) => {
    try {
      const { data:user } = await restController.getUser();
      controller.subscribe(user.id);
      if (replace) {
        replace('/');
      }
      return user;
    } catch (err) {
      return rejectWithValue({
        data: err?.response?.data ?? 'Gateway Timeout',
        status: err?.response?.status ?? 504,
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  `${USER_SLICE_NAME}/updateUser`,
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await restController.updateUser(payload);
      dispatch(changeEditModeOnUserProfile(false));
      return data;
    } catch (err) {
      return rejectWithValue({
        data: err?.response?.data ?? 'Gateway Timeout',
        status: err?.response?.status ?? 504,
      });
    }
  }
);

const reducers = {
  clearUserStore: state => {
    state.error = null;
    state.data = null;
    state.isLoggedIn = false; 
  },
  clearUserError: state => {
    state.error = null;
  },

  loginSuccess: (state, action) => {
    state.data = action.payload;
    state.isLoggedIn = true; 
  },

  logout: (state) => {
    state.data = null;
    state.isLoggedIn = false; 
  },
};

const extraReducers = builder => {
  builder.addCase(getUser.pending, state => {
    state.isFetching = true;
    state.error = null;
    state.data = null;
  });
  builder.addCase(getUser.fulfilled, (state, { payload }) => {
    state.isFetching = false;
    state.data = payload;
    state.isLoggedIn = true;
  });
  builder.addCase(getUser.rejected, rejectedReducer);

  builder.addCase(updateUser.fulfilled, (state, { payload }) => {
    state.data = { ...state.data, ...payload };
    state.error = null;
  });
  builder.addCase(updateUser.rejected, (state, { payload }) => {
    state.error = payload;
  });
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers,
  extraReducers,
});

const { actions, reducer } = userSlice;

export const { clearUserStore, clearUserError, loginSuccess, logout } = actions;

export default reducer;

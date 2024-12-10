import { createSlice } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
import { decorateAsyncThunk, pendingReducer } from '../../utils/store';

const MODERATOR_SLICE_NAME = 'moderator';

const initialState = {
  isFetching: true,
  error: null,
  offers: [],
};

export const getModeratorOffers = decorateAsyncThunk({
  key: `${MODERATOR_SLICE_NAME}/getModeratorOffers`,
  thunk: async () => {
    const { data } = await restController.getAllOffersForModerator();
    return data;
  },
});

export const approveModeratorOffer = decorateAsyncThunk({
  key: `${MODERATOR_SLICE_NAME}/approveModeratorOffer`,
  thunk: async (offerId) => {
    const { data } = await restController.approveOfferByModerator(offerId);
    return { offerId, message: data.message };
  },
});

export const rejectModeratorOffer = decorateAsyncThunk({
  key: `${MODERATOR_SLICE_NAME}/rejectModeratorOffer`,
  thunk: async (offerId) => {
    const { data } = await restController.rejectOfferByModerator(offerId);
    return { offerId, message: data.message };
  },
});

const reducers = {};

const extraReducers = (builder) => {
  builder
    // Получение офферов
    .addCase(getModeratorOffers.pending, pendingReducer)
    .addCase(getModeratorOffers.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.offers = payload;
    })
    .addCase(getModeratorOffers.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    })

    // Одобрение оффера
    .addCase(approveModeratorOffer.fulfilled, (state, { payload }) => {
      const offer = state.offers.find((offer) => offer.id === payload.offerId);
      if (offer) {
        offer.moderatorStatus = 'approved';
      }
    })
    .addCase(approveModeratorOffer.rejected, (state, { payload }) => {
      state.error = payload;
    })

    // Отклонение оффера
    .addCase(rejectModeratorOffer.fulfilled, (state, { payload }) => {
      const offer = state.offers.find((offer) => offer.id === payload.offerId);
      if (offer) {
        offer.moderatorStatus = 'rejected';
      }
    })
    .addCase(rejectModeratorOffer.rejected, (state, { payload }) => {
      state.error = payload;
    });
};

const moderatorSlice = createSlice({
  name: MODERATOR_SLICE_NAME,
  initialState,
  reducers,
  extraReducers,
});

export const { actions, reducer } = moderatorSlice;

export default reducer;

import { createSlice } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
import { decorateAsyncThunk } from '../../utils/store';

const MODERATOR_SLICE_NAME = 'moderator';

const initialState = {
  isFetching: true,
  error: null,
  offers: [],
  currentPage: 1,
  totalPages: 1,
  total: 0,
};

export const getModeratorOffers = decorateAsyncThunk({
  key: `${MODERATOR_SLICE_NAME}/getModeratorOffers`,
  thunk: async ({ page = 1, limit = 5 }) => {
    console.log(`Fetching page ${page} with limit ${limit}`);
    const { data } = await restController.getAllOffersForModerator({ page, limit });
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
    .addCase(getModeratorOffers.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(getModeratorOffers.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.offers = payload.offers;
      state.currentPage = payload.currentPage;
      state.totalPages = payload.totalPages;
      state.total = payload.total;
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

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  offers: [],
  isDataLoaded: false,
  offer: null,
  isOfferLoaded: false,
  nearOffers: [],
  reviews: [],
};

export const offersData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      state.offer = action.payload;
      state.isOfferLoaded = true;
    },
    loadNearOffers: (state, action) => {
      state.nearOffers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    sendReview: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { loadOffers, loadOffer, loadNearOffers, loadReviews, sendReview } = offersData.actions;

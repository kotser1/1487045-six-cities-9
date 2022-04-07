import { createReducer } from '@reduxjs/toolkit';

import {
  changeCity,
  loadOffers,
  loadOffer,
  loadNearOffers,
  loadReviews,
  changeSortType,
  requireAuthorization,
  setUserEmail,
  sendReview
} from './action';

import { DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus } from '../const';
import { City, Offer } from '../types/offer';
import { Review } from '../types/review';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userEmail: string;
  offer: Offer | null;
  isOfferLoaded: boolean;
  nearOffers: Offer[];
  reviews: Review[];
  // newReview: NewReview;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userEmail: '',
  offer: null,
  isOfferLoaded: false,
  nearOffers: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoaded = true;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

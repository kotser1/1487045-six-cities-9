import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortType, requireAuthorization } from './action';

import { DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus } from '../const';
import { City, Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

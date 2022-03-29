import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, changeSortType } from './action';

import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../const';
import { mockOffers } from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: mockOffers,
  sortType: DEFAULT_SORT_TYPE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

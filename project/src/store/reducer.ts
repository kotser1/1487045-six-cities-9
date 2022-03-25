import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';

import { DEFAULT_CITY } from '../const';
import { mockOffers } from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: mockOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

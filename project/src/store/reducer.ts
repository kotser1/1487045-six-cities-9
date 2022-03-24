import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';

import { CITIES } from '../const';
import { mockOffers } from '../mocks/offers';
import { getOffersInCurrentCity } from '../utils';

const initialOffers = getOffersInCurrentCity(mockOffers, CITIES.Paris.name);

const initialState = {
  city: CITIES.Paris,
  offers: initialOffers,
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

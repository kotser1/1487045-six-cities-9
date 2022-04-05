import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const changeSortType = createAction<string>('changeSortType');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

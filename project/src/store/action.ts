import { createAction } from '@reduxjs/toolkit';

import { City, Offer } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const loadOffer = createAction<Offer>('loadOffer');

export const loadNearOffers = createAction<Offer[]>('loadNearOffers');

export const loadReviews = createAction<Review[]>('loadReviews');

export const sendReview = createAction<Review[]>('sendReview');

export const changeSortType = createAction<string>('changeSortType');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setUserEmail = createAction<string>('setUserEmail');

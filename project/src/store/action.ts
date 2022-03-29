import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';

export const changeCity = createAction<City>('changeCity');

export const setOffers = createAction<Offer[]>('setOffers');

export const changeSortType = createAction<string>('changeSortType');

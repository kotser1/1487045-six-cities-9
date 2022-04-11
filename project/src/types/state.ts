import { store } from '../store/index';
import { AuthorizationStatus} from '../const';
import {City, Offer} from './offer';
import { Review } from './review';

export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
};

export type OffersData = {
  offers: Offer[];
  isDataLoaded: boolean;
  offer: Offer | null;
  isOfferLoaded: boolean;
  nearOffers: Offer[];
  reviews: Review[];
}

export type AppData = {
  city: City;
  sortType: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

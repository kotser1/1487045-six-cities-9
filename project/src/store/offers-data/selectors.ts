import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getOffer = (state: State): Offer | null  => state[NameSpace.data].offer;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getLoadedOfferStatus = (state: State): boolean => state[NameSpace.data].isOfferLoaded;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.data].nearOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.data].reviews;

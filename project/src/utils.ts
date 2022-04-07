import { Offer } from './types/offer';
import { SortTypes } from './const';
import { AuthorizationStatus } from './const';

export function getOffersInCurrentCity(offers: Offer[], currentCityName: string) {
  return offers.filter((offer) => offer.city.name === currentCityName);
}

export const getSortedOffers = (sortType: string, offers: Offer[]) => {
  switch (sortType) {
    case SortTypes.Popular:
      return offers;
    case SortTypes.LowPrice:
      return offers.sort((a: Offer, b: Offer) => a.price - b.price);
    case SortTypes.HighPrice:
      return offers.sort((a: Offer, b: Offer) => b.price - a.price);
    case SortTypes.TopRated:
      return offers.sort((a: Offer, b: Offer) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const isAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Auth;

export const getRatingValue = (rating: number | null): number => {
  if (rating === null) {
    return 0;
  }
  return rating * 20;
};

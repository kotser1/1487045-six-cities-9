import { Offer } from './types/offer';

export function getOffersInCurrentCity(offers: Offer[], currentCityName: string) {
  return offers.filter((offer) => offer.city.name === currentCityName);
}

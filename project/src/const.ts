import { CardClasses } from './types/card-class';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
  PropertyId = '/offer/:id',
  Page404 = '/page404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATES = [
  {
    title: 'perfect',
    value: 5,
  },
  {
    title: 'good',
    value: 4,
  },
  {
    title: 'not bad',
    value: 3,
  },
  {
    title: 'badly',
    value: 2,
  },
  {
    title: 'terribly',
    value: 1,
  },
];

export const CITIES = {
  Paris: {
    'name': 'Paris',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 12,
    },
  },

  Cologne: {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 12,
    },
  },

  Brussels: {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 12,
    },
  },

  Amsterdam: {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 12,
    },
  },

  Hamburg: {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 12,
    },
  },

  Dusseldorf: {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 12,
    },
  },
};

export const MAP_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const DEFAULT_MARKER_URL = 'img/pin.svg';

export const CURRENT_MARKER_URL = 'img/pin-active.svg';

export const CARD_CLASSNAMES: CardClasses = {
  main: {
    list: 'cities__places-list places__list tabs__content',
    article: 'cities__place-card place-card',
    wrapper: 'cities__image-wrapper place-card__image-wrapper',
  },
  nearPlaces: {
    list: 'near-places__list places__list',
    article: 'near-places__card place-card',
    wrapper: 'near-places__image-wrapper place-card__image-wrapper',
  },
};

export const DEFAULT_BOOKMARK_SIZES = {
  width: 18,
  height: 19,
};

export const PROPERTY_BOOKMARK_SIZES = {
  width: 31,
  height: 33,
};

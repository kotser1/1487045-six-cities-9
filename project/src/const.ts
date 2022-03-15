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

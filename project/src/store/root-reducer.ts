import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { appData } from './app-data/app-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [NameSpace.app]: appData.reducer,
  [NameSpace.data]: offersData.reducer,
  [NameSpace.user]: userData.reducer,
});

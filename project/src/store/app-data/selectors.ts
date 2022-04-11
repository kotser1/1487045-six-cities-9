import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { City } from '../../types/offer';

export const getCurrentCity = (state: State): City => state[NameSpace.app].city;
export const getSortType = (state: State): string => state[NameSpace.app].sortType;

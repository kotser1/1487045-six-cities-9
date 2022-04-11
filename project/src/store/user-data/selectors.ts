import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.user].authorizationStatus;

export const getUserEmail = (state: State): string => state[NameSpace.user].userEmail;

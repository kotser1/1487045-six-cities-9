import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserData } from '../../types/state';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

export const userData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

export const { requireAuthorization, setUserEmail } = userData.actions;

import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, NameSpace } from '../../const';
import { AppData } from '../../types/state';

const initialState: AppData = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
};

export const appData = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { changeCity, changeSortType } = appData.actions;

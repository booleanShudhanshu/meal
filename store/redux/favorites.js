import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids = [...state.ids, action.payload.id];
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export default favoriteSlice.reducer;

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

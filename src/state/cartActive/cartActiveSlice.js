import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const cardActiveSlice = createSlice({
  name: "cardActive",
  initialState,
  reducers: {
    cartOpened(state = initialState, action) {
      return true;
    },

    cartClosed(state = initialState, action) {
      return false;
    },
  },
});

export const { cartOpened, cartClosed } = cardActiveSlice.actions;

export default cardActiveSlice.reducer;

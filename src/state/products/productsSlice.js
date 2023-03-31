import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsReducer(state = initialState, action) {
      return action.payload;
    },
  },
});

export const { productsReducer } = productSlice.actions;

export default productSlice.reducer;

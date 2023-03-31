// import { SET_PRODUCTS } from '../../constants/actionTypes'
//const INIT_STATE = []

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    productsReducer(state = initialState, action) {
      return action.payload;
    },
  },
});

export const { productsReducer } = productSlice.actions;

export default productSlice.reducer;

// const productsReducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case SET_PRODUCTS:
//       return [...action.payload]
//     default:
//       return state
//   }
// }

// export default productsReducer;

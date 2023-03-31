// import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constants/actionTypes";

// const INIT_STATE = [];

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addedToCart: (state, action) => {
      const itemInCart = state?.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state?.cart?.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addedToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const isInCart = state.find(
//         (cartItem) => cartItem.id === action.payload.id
//       );
//       return isInCart
//         ? state.map((cartItem) =>
//             cartItem.id === action.payload.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           )
//         : [...state, { ...action.payload, quantity: 1 }];
//     case REMOVE_FROM_CART:
//       const cartItemToRemove = state.find(
//         (cartItem) => cartItem.id === action.payload.id
//       );
//       return cartItemToRemove.quantity === 1
//         ? state.filter((cartItem) => cartItem.id !== action.payload.id)
//         : state.map((cartItem) =>
//             cartItem.id === action.payload.id
//               ? { ...cartItem, quantity: cartItem.quantity - 1 }
//               : cartItem
//           );
//     default:
//       return state;
//   }
// };

// export default cartReducer;

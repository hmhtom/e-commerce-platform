import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "store",

  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  },

  reducers: {
    UPDATE_PRODUCTS: (state, action) => {
      state.products = action.products;
    },

    ADD_TO_CART: (state, action) => {
      state.cartOpen = true;
      state.cart = [...state.cart, action.product];
    },

    ADD_MULTIPLE_TO_CART: (state, action) => {
      state.cart = [...state.cart, ...action.products];
    },

    UPDATE_CART_QUANTITY: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map((product) => {
        if (action._id === product._id) {
          product.purchaseQuantity = action.purchaseQuantity;
        }
        return product;
      });
    },

    REMOVE_FROM_CART: (state, action) => {
      let newCart = state.cart.filter((product) => {
        return product._id !== action._id;
      });
      state.cart = newCart;
      state.cartOpen = newCart.length > 0;
    },

    CLEAR_CART: (state) => {
      state.cartOpen = false;
      state.cart = [];
    },

    TOGGLE_CART: (state) => {
      state.cartOpen = !state.cartOpen;
    },

    UPDATE_CATEGORIES: (state, action) => {
      state.categories = action.categories;
    },

    UPDATE_CURRENT_CATEGORY: (state, action) => {
      state.currentCategory = action.currentCategory;
    },
  },
});

export const {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} = storeSlice.actions;

export default storeSlice.reducer;

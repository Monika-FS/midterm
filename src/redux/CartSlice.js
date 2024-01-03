import { createSlice } from "@reduxjs/toolkit";

const CART = "reduxState";

const loadCartItem = () => {
  try {
    const CartState = localStorage.getItem(CART);
    if (CartState === null) {
      return undefined;
    }
    return JSON.parse(CartState);
  } catch (err) {
    return undefined;
  }
};

const saveCartItem = (state) => {
  try {
    const CartState = JSON.stringify(state);
    localStorage.setItem(CART, CartState);
  } catch (err) {
    return undefined;
  }
};

const initialState = {
  value: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: loadCartItem() || initialState,
  reducers: {
    AddtoCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.value.find(
        (item) => item.id === newProduct.id
      );
      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        state.value.push(newProduct);
      }
      saveCartItem(state);
    },
    RemoveFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      saveCartItem(state);
    },
    increaseQuantity: (state, action) => {
      const product = state.value.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
      saveCartItem(state);
    },
    decreaseQuantity: (state, action) => {
      const product = state.value.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      saveCartItem(state);
    },
    clearCart: (state) => {
      state.value = [];
      saveCartItem(state);
    },
  },
});

export default CartSlice.reducer;
export const {
  AddtoCart,
  RemoveFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = CartSlice.actions;
export const selectcart = (state) => state.cart.value;

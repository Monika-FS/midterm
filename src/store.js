import { configureStore } from "@reduxjs/toolkit";
import Loginreducer from "./redux/LoginSlice";
import CartSlice from "./redux/CartSlice";
import toogleSlice from "./redux/toogleSlice";

const store = configureStore({
  reducer: {
    user: Loginreducer,
    cart: CartSlice,
    toogle: toogleSlice,
  },
});

export default store;

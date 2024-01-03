import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsOpen: false,
  likedProducts: [],
};
const toogleSlice = createSlice({
  name: "toogle",
  initialState: initialState,
  reducers: {
    toogleMenu: (state) => {
      state.IsOpen = !state.IsOpen;
    },

    toogleLike: (state, action) => {
      const product = action.payload;

      const existingproduct = state.likedProducts.find(
        (item) => item.id === product.id
      );
      const index = state.likedProducts.indexOf(existingproduct);
      if (existingproduct) {
        state.likedProducts.splice(index, 1);
      } else {
        state.likedProducts.push(product);
      }
    },
  },
});
export default toogleSlice.reducer;
export const { toogleLike, toogleMenu } = toogleSlice.actions;

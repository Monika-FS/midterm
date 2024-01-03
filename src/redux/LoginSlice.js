import { createSlice } from "@reduxjs/toolkit";

const LOGIN = "reduxState";

// Load the state from localStorage
const loadState = () => {
  try {
    const loginState = localStorage.getItem(LOGIN);
    if (loginState === null) {
      return undefined;
    }
    return JSON.parse(loginState);
  } catch (err) {
    return undefined;
  }
};

// Save the state to localStorage
const saveState = (state) => {
  try {
    const loginState = JSON.stringify(state);
    localStorage.setItem(LOGIN, loginState);
  } catch (err) {
    return undefined;
  }
};

const initialState = {
  userData: null,
  isAuthenticated: false,
};

const LoginSlice = createSlice({
  name: "user",
  initialState: loadState() || initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      saveState(state);
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
      // saveState(state);
    },
    register: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = false;
      saveState(state);
    },
  },
});

export const { login, logout, register } = LoginSlice.actions;
export default LoginSlice.reducer;
export const selectUserData = (state) => {
  return state.user.userData;
};

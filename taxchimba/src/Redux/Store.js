import { configureStore } from '@reduxjs/toolkit'
import navReducer from "./Slices/navSlice";
import userReducer from "./Slices/usuarioSlice";
export const store = configureStore({
  reducer: {
    nav:navReducer,
    user:userReducer
  },
})
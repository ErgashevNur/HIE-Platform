import { configureStore } from "@reduxjs/toolkit";
import auth from "../redux/slices/auth/auth-slices";
export const store = configureStore({
  reducer: {
    auth,
  },
});

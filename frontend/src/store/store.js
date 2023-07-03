import { configureStore } from "@reduxjs/toolkit";
import UserLogin from "./slices/UserLogin";

export const store = configureStore({
  reducer: {
    user: UserLogin,
  },
});

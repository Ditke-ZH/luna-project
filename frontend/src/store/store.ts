import { configureStore } from "@reduxjs/toolkit";
import UserLogin from "./slices/UserLogin";

export const store = configureStore({
  reducer: {
    user: UserLogin,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  accessToken: string | null;
  email: string;
}

const initialState: UserState = {
  accessToken: null,
  email: "",
};
const UserLogin = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginUser: (state, action) => {
      state.accessToken = action.payload;
    },
    logoutUser: state => {
      state.accessToken = null;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setemail } = UserLogin.actions;
export const selectUser = (state: RootState) => state.user;
export default UserLogin.reducer;

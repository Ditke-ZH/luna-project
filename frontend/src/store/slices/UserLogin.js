import { createSlice } from "@reduxjs/toolkit";

const UserLogin = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    email: "",
  },

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
export const selectUser = state => state.user.value;
export default UserLogin.reducer;

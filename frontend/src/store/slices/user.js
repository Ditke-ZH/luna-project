import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  details: null,
  firstName: "",
  lastName: "",
  username: "",
  avatar: "",
  banner: "",
  location: "",
  about: "",
  email: "",
  phone: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.details = null;
    },
    loadUserDetails: (state, action) => {
      state.details = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAllInformation(state, action) {
      const {
        firstName,
        lastName,
        username,
        avatar,
        banner,
        location,
        about,
        phone,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = username;
      state.avatar = avatar;
      state.banner = banner;
      state.location = location;
      state.about = about;
      state.phone = phone;
    },
  },
});

export const { login, logout, loadUserDetails, setEmail, setAllInformation } =
  userSlice.actions;
export default userSlice.reducer;

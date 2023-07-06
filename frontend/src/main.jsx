import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Signup from "./pages/signUp/Signup";
import SignIn from "./pages/login/SignIn";
import NewReview from "./pages/newReview/NewReview.jsx";
import UserProfile from "./pages/userProfile/UserProfile.jsx";
import RestaurantPage from "./pages/Restaurant";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/search" element={<Search />} />
            <Route path="search/users" element={<UserProfile />}/>
            <Route path="/user-profile" element={<UserProfile />}/>
            <Route path="/new-review" element={<NewReview />}/>
            <Route
              path="search/restaurants/:resturantId"
              element={<RestaurantPage />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

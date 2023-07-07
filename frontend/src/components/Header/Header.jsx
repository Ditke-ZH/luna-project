import LunaLogo from "../../assets/images/luna-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/slices/user.js";
import {useEffect, useState} from "react";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = useSelector((state) => state.user.accessToken);
  const [MenuItems, SetMenuItems] = useState([])

  useEffect(() =>{
     SetMenuItems([
      { name: "Home", link: "/" },
      { name: "Search", link: "/search" },
      { name: "Profile", link: access_token ? "/profile" : "/login" },
      ]);
  }, [access_token])

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("refreshToken");
  }

  return (
    <header className="headerContainer">
      <img src={LunaLogo} alt="Luna Logo" />
      <nav className="flexContainer">
        <ul className="flexContainer">
          {MenuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        { access_token ?
            <button
              className="logout-button"
              onClick={handleLogout}
            >logout</button>
          : <div className="header-buttons-container">
          <button
              className="header-button-left"
              onClick={() => {
                navigate("/signup");
              }}
          >
            signup
          </button>
          <button
              className="header-button-right"
              onClick={() => {
                navigate("/login");
              }}
          >
            login
          </button>
        </div>}
      </nav>
    </header>
  );
};

export default Header;

import LunaLogo from "../../assets/images/luna-logo.svg";
import { NavLink, useNavigate, Link } from "react-router-dom";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/user.js";

const MenuItems = [
  { name: "Home", link: "/" },
  { name: "Search", link: "/search" },
  { name: "Profile", link: "/profile" },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIsLoged = useSelector(state => state?.user.email);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header className="headerContainer">
      <Link to="/">
        <img src={LunaLogo} alt="Luna Logo" />
      </Link>
      <nav className="flexContainer">
        <ul className="flexContainer">
          {MenuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="header-buttons-container">
          {!userIsLoged && (
            <button
              className="header-button-left"
              onClick={() => {
                navigate("/signup");
              }}
            >
              signup
            </button>
          )}
          <button
            className="header-button-right"
            onClick={() => {
              if (userIsLoged) {
                handleLogout();
              } else {
                navigate("/login");
              }
            }}
          >
            {userIsLoged ? "logout" : "login"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

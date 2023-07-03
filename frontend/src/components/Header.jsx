import LunaLogo from "../assets/images/luna-logo.svg";
import { NavLink } from "react-router-dom";

const MenuItems = [
  { name: "Home", link: "/" },
  { name: "Search", link: "serach" },
  { name: "Profile", link: "profile" },
];
const Header = () => {
  return (
    <header className=" flex p-5 justify-between border-b-2">
      <img src={LunaLogo} alt="Luna Logo" />
      <nav className="flex gap-5">
        <ul className="flex gap-5">
          {MenuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

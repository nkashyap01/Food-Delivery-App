import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li> Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/About"> About us </Link>
          </li>
          <li>
            <Link to="/Contact"> Contact </Link>
          </li>
          <li>
            <Link to="/Grocery"> Grocery </Link>
          </li>
          <li> Cart</li>

          <button
            className="login"
            onClick={() => {
              btnName === "logIn" ? setbtnName("logOut") : setbtnName("logIn");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

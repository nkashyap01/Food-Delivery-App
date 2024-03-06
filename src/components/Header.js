import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-25 h-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          
          <span className="px-4" > Online Status:{onlineStatus ? "✅" : "🔴"}</span>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About"> About us </Link>
          </li>
          <li className="px-4">
            <Link to="/Contact"> Contact </Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold"> Cart-({cartItems.length})</li>

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

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=314048"
    );
    const json = await data.json();

    console.log("deomo");
    console.log(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <h1> Name of Restaurants</h1>
      <h2> Menu</h2>
      <ul>
        <li> Burger</li>
        <li> Biryani</li>
        <li> Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

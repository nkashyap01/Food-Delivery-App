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

    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="Menu">
      <h1> {name}</h1>
      <p>
        {" "}
        {cuisines.join(" ")}- {costForTwoMessage}
      </p>
      <h2>Menu </h2>
      <ul>
        <li> {itemCards[0].card.info.name}</li>
        <li> Biryani</li>
        <li> Pizza</li>
        <li> Fries</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

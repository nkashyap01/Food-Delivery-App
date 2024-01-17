import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  //
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );
    const json = await data.json();

    console.log(json.data);

    setResInfo(json.data.cards);
  };

  if (resInfo == null) return <Shimmer />;

  if (resInfo.length == 6) {
    var { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;

    var { itemCards } =
      resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  } else {
    var { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;

    var { itemCards } =
      resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  }

  
  return (
    <div className="Menu">
      <h1> {name}</h1>
      <p>
        {" "}
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"RS."}
            {item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

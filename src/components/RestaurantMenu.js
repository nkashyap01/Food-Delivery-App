import Shimmer from "./Shimmer";
import { useParams, useResolvedPath } from "react-router";

import useRestaurantMenu from "./useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  console.log("I am hre");
  console.log(resInfo);

  if (resInfo.length == 6) {
    var { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
    var { itemCards } =
      resInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  } else {
    var { name, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;
    var { itemCards } =
      resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  }

  return (
    <div className="Menu">
      {/* <h1> {name}</h1>
     
      <p>
        {" "}
        {cuisines.join(",")}- {costForTwoMessage}
      </p> */}
      <h2>Menu </h2>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"RS."}
            {item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

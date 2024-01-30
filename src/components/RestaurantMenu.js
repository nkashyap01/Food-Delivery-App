import Shimmer from "./Shimmer";
import { useParams, useResolvedPath } from "react-router";

import useRestaurantMenu from "./useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  if (resInfo == null) return <Shimmer />;

  if (resInfo.length == 6) {
    var { name, cuisines, costForTwoMessage } =
      resInfo.cards[2]?.card?.card?.info;
    var { itemCards } =
      resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card;
    console.log(
      resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card
    );
    const categories =
      resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(categories);
  } else {
    var { name, cuisines, costForTwoMessage } =
      resInfo.cards[0]?.card?.card?.info;
    var { itemCards } =
      resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    console.log(
      resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    );
    const categories =
      resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log(categories);
    console.log(categories);
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

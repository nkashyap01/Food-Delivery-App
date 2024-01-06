import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    if (json.data.cards.length == 10 || json.data.cards.length == 13) {
      setlistOfRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } else if (json.data.cards.length == 12) {
      setlistOfRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } else {
      setlistOfRestaurants(
        json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
      );
    }
  };

  return listOfRestaurants == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filterList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((obj, index) => {
          return <RestaurantCard key={index} resData={obj} />;
        })}
      </div>
    </div>
  );
};

export default Body;

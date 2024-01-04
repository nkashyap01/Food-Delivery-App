import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

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

    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
    );

    setlistOfRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    listOfRestaurants && (
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
          {listOfRestaurants.map((obj) => {
            return <RestaurantCard resData={obj} />;
          })}
        </div>
      </div>
    )
  );
};

export default Body;

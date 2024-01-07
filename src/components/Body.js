import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
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
      setfilteredRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } else if (json.data.cards.length == 12) {
      setlistOfRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setfilteredRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } else {
      setlistOfRestaurants(
        json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
      );
      setfilteredRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    }
  };

  return listOfRestaurants == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredRestaurants(filterList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((obj, index) => {
          return <RestaurantCard key={index} resData={obj} />;
        })}
      </div>
    </div>
  );
};

export default Body;

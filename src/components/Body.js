import RestaurantCard  from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  console.log(listOfRestaurants);
  // const RestaurantCardPrompted = withPromptedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);

    if (json.data.cards.length == 10 || json.data.cards.length == 13) {
      setlistOfRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
      setfilteredRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
    } else if (json.data.cards.length == 12) {
      setlistOfRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setfilteredRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline!!please check your internet connection;
      </h1>
    );

  return listOfRestaurants == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-200 rounded-md"
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
        <div className="p-4 m-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-200 rounded-md"
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
      </div>
      <div className="flex flex-wrap">
        {/* {filteredRestaurants.map((obj, index) => {
          return (
            <Link to={obj.info.id}>
              <RestaurantCard key={index} resData={obj} />
            </Link>
          );
        })} */}

        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promopted then add a promoted label to it */}
            {/* {restaurant.info.orderabilityCommunication.promoted ? (
              <RestaurantCardPrompted resData={restaurant} />
            ) : ( */}
              <RestaurantCard resData={restaurant} />
            {/* )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
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

  const handleFilter = (e) => {
    const filterItems = listOfRestaurants.filter((item) => {
      console.log(item);
      if (e.target.value === "veg") {
        if (item.info.veg) {
          return true;
        }
      } else if (e.target.value === "4.5") {
        return item.info.avgRating >= 4.5;
      } else if (e.target.value === "4") {
        return item.info.avgRating >= 4;
      } else if (e.target.value === "350") {
      } else if (e.target.value === "non-veg") {
        if (!item.info.veg) {
          return true;
        }
      }
    });

    if (e.target.value === "Reset Filter") {
      setfilteredRestaurants(listOfRestaurants);
      return;
    }

    setfilteredRestaurants(filterItems);
  };

  const filterCuisines = (e) => {
    const filterItems = listOfRestaurants.filter((item) => {
      return item.info.cuisines.includes(e.target.value);
    });
    if (e.target.value === "Reset Filter") {
      setfilteredRestaurants(listOfRestaurants);
      return;
    }
    setfilteredRestaurants(filterItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
    // <div>Loading</div>
    <div className="body">
      <div className="filter flex justify-center items-center gap-2">
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
        <div>
          <select onChange={handleFilter}>
            <option selected disabled value="filter">
              Filter
            </option>
            <option value="4.5"> Above 4.5 Star</option>
            <option value="4">Above 4 star </option>
            <option value="350">&#8377; Cost 350 For Two</option>
            <option value="veg">veg</option>
            <option value="non-veg">non-veg</option>
            <option value="Reset Filter"> Reset Filter</option>
          </select>
        </div>
        <div>
          <select onChange={filterCuisines}>
            <option selected disabled value=" cuisines">
              cuisines
            </option>
            <option> Pizzas</option>
            <option>Burgers </option>
            <option>Biryani</option>
            <option>Pastas</option>
            <option>Desserts</option>

            <option value="Reset Filter"> Reset Filter</option>
          </select>
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

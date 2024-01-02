import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([
    {
      info: {
        id: "164613",
        name: "El Mexicano",
        cloudinaryImageId: "yc37c1fbmghsz2u9wzmt",
        areaName: "Sector 8",
        costForTwo: "₹200 for two",
        cuisines: [
          "Mexican",
          "Tex-Mex",
          "Beverages",
          "Desserts",
          "Pizzas",
          "Fast Food",
        ],
        avgRating: 3.4,
      },
    },
    {
      info: {
        id: "106055",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "fco6bt4rjqr7hztnqwxo",
        locality: "Sec 27",
        areaName: "Sector 27",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.4,
      },
    },
    {
      info: {
        id: "41297",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Sector 8",
        areaName: "Sector 8",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.1,
      },
    },
  ]);
  return (
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
        {/* {resList.map((res, index) => (
            <RestaurantCard key={index} resData={res} />
          ))} */}
        {/* {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

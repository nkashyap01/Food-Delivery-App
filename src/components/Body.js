import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {/* {resList.map((res, index) => (
            <RestaurantCard key={index} resData={res} />
          ))} */}
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

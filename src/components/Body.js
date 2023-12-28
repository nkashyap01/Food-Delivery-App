import RestaurantCard from "./RestaurantCard.js";
const Body = () => {
    return (
      <div className="body">
        <div className="search"> Search</div>
        <div className="res-container">
          <RestaurantCard
            resName="Meghana Food"
            cuisine="Biryani, North Indian, Asian"
          />
          <RestaurantCard
            resName="RFC"
            cuisine="Burger, North Indian, Fast Food"
          />
        </div>
      </div>
    );
  };
  export default Body;
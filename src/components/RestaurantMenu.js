import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="Menu">
      <h1> Name of Restaurants</h1>
      <h2> Menu</h2>
      <ul>
        <li> Burger</li>
        <li> Biryani</li>
        <li> Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className="">
      <div className="w-6/12  mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className="font-bold text-slate-600">
          {data.title} ({data.itemCards.length})
        </span>
        <span onClick={() => handleClick()}>🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;

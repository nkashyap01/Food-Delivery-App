import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) =>{
    dispatch(addItem("item"));
    console.log(item);
  }
  

  return (
    <div className="flex justify-between items-center flex-col">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 hover:shadow-xl shadow-lg duration-200 w-6/12 flex"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              <span className="font-bold text-teal-600">
                {item.card.info.name}
              </span>
              <span>
                {" "}
                <FaRupeeSign className="inline -mt-[2px]" />
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-10">
              <button className="bg-white text-green-500 text-sm font-bold rounded-sm px-2 py-[1px] shadow-md"  onClick={() => handleAddItems(item)}>
                Add +
              </button>
            </div>

            <img className="h-20" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

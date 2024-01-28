import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla } = props.resData.info;

  return (
    <div className=" p-4 m-4 w-52 bg-gray-100 rounded-xl hover:bg-gray-300">
      <button className=" w-35 p-1 bg-yellow-300 font-bold text-sm relative right-5 bottom-5 ">
        {" "}
        Top Rated
      </button>
      <img
        className="res-img rounded-md"
        alt="res-pic"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold  py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}stars </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}Mins</h4>
    </div>
  );
};
export default RestaurantCard;

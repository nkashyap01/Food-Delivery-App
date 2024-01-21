import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla } = props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-pic"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}stars </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}Mins</h4>
    </div>
  );
};
export default RestaurantCard;

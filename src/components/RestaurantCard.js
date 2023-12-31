import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cuisines } = props.resData.info;
  // const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-pic"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>4.3 stars </h4>
      <h4> 38 Mins</h4>
    </div>
  );
};
export default RestaurantCard;

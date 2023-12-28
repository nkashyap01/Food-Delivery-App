const RestaurantCard = ({ resName, cuisine }) => {
    return (
      <div className="res-card">
        <img
          className="res-img"
          alt="pic"
          src="https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg_biryani_1.jpg"
        />
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4>4.3 stars </h4>
        <h4> 38 Mins</h4>
      </div>
    );
  };
  export default RestaurantCard;
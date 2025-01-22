import { IMAGE_URL } from "../Utils/constants";

export const CardComponent = (props) => {
  const { info } = props?.resData?.card?.card;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={IMAGE_URL + info?.cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{info?.name}</h3>
      {info?.cuisines.slice(0, 4).join(", ")}
      <h4>{info?.avgRating} Stars</h4>
      {/* <h4>{resData?.info?.costForTwo}</h4> */}
      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default CardComponent;

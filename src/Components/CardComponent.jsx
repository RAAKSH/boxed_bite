import { IMAGE_URL } from "../Utils/constants";

export const CardComponent = (props) => {
  const { info } = props?.resData?.card?.card;

  return (
    <div className="m-2 p-2 w-[250px] h-[380px] bg-gray-100 hover:bg-slate-300 border border-solid rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
    <img
      src={IMAGE_URL + info?.cloudinaryImageId}
      alt="res-logo"
      className="object-cover w-full h-48 rounded-lg"
    />
    <div className="flex flex-col justify-between flex-grow mt-2">
      <div className="space-y-1">
        <h3 className="font-bold text-xl truncate">{info?.name}</h3>
        <h4 className="font-light text-sm text-gray-700 truncate">
          {info?.cuisines?.slice(0, 4)?.join(", ")}
        </h4>
        <h4>{info?.avgRating} Stars</h4>
        <h4>{info?.sla?.deliveryTime} minutes</h4>
      </div>
  
     
    </div>
  </div>
  );
};

export const withPromotedCard = (CardComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute  bg-black text-white rounded-lg px-2 py-1 z-20">
          Promoted
        </div>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default CardComponent;

import React from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../Utils/useRestraurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestraurantsMenu = () => {
  const { id } = useParams();

  const menuData = useRestaurantMenu(id);
  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (e) =>
        e.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div>
      {
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg">
            {cuisines?.join(" , ")}- {costForTwoMessage}
          </p>
          <ul>
            {categories?.map((item) => (
              <RestaurantCategory key={item?.card?.card} data={item?.card?.card} />
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default RestraurantsMenu;

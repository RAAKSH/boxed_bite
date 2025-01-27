import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU } from "../Utils/constants";
import { useRestaurantMenu } from "../Utils/useRestraurantMenu";

const RestraurantsMenu = () => {
  //const [menuData, setMenuData] = useState(null);
  const { id } = useParams();

  //   console.log("asdasd", id);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(MENU + id + "&catalog_qa=undefined&query=Biryani");
  //     const json = await data?.json();

  //     setMenuData(json?.data);
  //   };

  const menuData  = useRestaurantMenu(id);
  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("=======", itemCards);

  console.log("=======", menuData);

  return (
    <div>
      {
        <>
          <h1 className="menu-styles">{name}</h1>
          <p>
            {cuisines?.join(" , ")}- {costForTwoMessage}
          </p>
          <ul>
            {itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}- {item?.card?.info?.price / 100}
              </li>
            ))}
          </ul>{" "}
        </>
      }
    </div>
  );
};

export default RestraurantsMenu;

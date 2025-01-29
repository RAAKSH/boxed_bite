import React, { useState } from "react";
import ItemMenu from "./ItemMenu";

const RestaurantCategory = ({ data }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-8/12 mx-auto my-4 bg-slate-100 shadow-xl p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg m-1">
          {data?.title}({data?.itemCards?.length}){" "}
        </span>
        <span className="m-1" onClick={handleShow}>
          ⬇{" "}
        </span>
      </div>

      {show && <ItemMenu items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

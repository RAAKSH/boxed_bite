import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

function UserF() {
  const [data, setData] = useState({});

  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/RAAKSH");

    const dataJson = await data.json();
    setData(dataJson);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("I am here");
  //   }, 1000);

  //   return () => {
  //     console.log("clearing the interval");

  //     clearInterval(interval); // This is unmounting phase
  //   };
  // }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {!data || Object.keys(data).length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex mx-auto my-4 p-4 w-full">
          <div className="w-[520px] flex items-center justify-center p-2 ">
            <img
              src={data?.avatar_url}
              alt={"Profile_image"}
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>

          <div className="w-2/2 ml-[300px]  px-3 mt-[50px]">
            <p className=" font-sans   font-lg font-bold m-3">
              Name: Raksha Chandrashekar
            </p>
            <p className=" font-sans   font-lg font-bold m-3">
              Location: Bengaluru
            </p>
            <p className=" font-sans   font-lg font-bold m-3">
              Contact: rakshac29@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default UserF;

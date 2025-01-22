import { CardComponent } from "./CardComponent";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [data, setData] = useState([]);
  const[filterData,setFilterData]=useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.907852&lng=77.4763541&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const dataJson = await data.json();

    console.log("json", dataJson);
    const slicedArray = dataJson?.data?.cards.slice(3);

    setData(slicedArray);
    setFilterData(slicedArray); 
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    const filteredData = data?.filter(
      (item) => item?.card?.card?.info?.avgRating >= 4.2
    );
    setData(filteredData);
  };

  const handleChange = (e) => {
    setSearchText(e.target?.value);
  };
  const handleSearch = () => {
    const dataRes = data?.filter((item) => {
      return item?.card?.card?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
    });

    setFilterData(dataRes);
  };

  return (
    <div className="body">
      {data?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="text-search"
                value={searchText}
                onChange={(e) => handleChange(e)}
              ></input>
              <button className="button-search" onClick={handleSearch}>
                Search
              </button>
            </div>
            <button className="filter-top" onClick={handleClick}>
              Top Rated Restraurants
            </button>
          </div>
          <div className="res-container">
            {filterData?.map((item) => (
              <CardComponent key={item?.card?.card?.info?.id} resData={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

import React, { useEffect, useState } from "react";

function UserF() {
  const [data, setData] = useState({});

//   const fetchUser = async () => {
//     const data = await fetch("https://api.github.com/users/RAAKSH");

//     const dataJson = await data.json();
//     setData(dataJson);
//   };
  useEffect(() => {
    const interval=setInterval(() => {
      console.log("I am here");
    }, 1000);

    return()=> {
        console.log("clearing the interval");
        
        clearInterval(interval);     // This is unmounting phase
    }
  }, []);



  return (
    <div>
      <div className="user-card">
        <img src={this.state?.userInfo?.avatar_url} className="user-img" />
        <div className="text">
          <h1>Name:{this.state?.userInfo?.name}</h1>
          <h3>Location:{this.state?.userInfo?.location}</h3>
          <h3>Contact: @Raksha</h3>
        </div>
      </div>
    </div>
  );
}

export default UserF;

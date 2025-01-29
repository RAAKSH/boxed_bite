import logo from "../../public/FoodLogo1.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="h-[100px]  flex justify-between bg-blue-100 shadow-xl">
      <div className="h-[100px] flex">
      <img src={logo} className="h-[100px] w-[150px]  object-cover" />
      </div>
      <div className="flex ">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">
            <div className="flex items-center">
              <span className="mr-2">Online Status:</span>
              {onlineStatus ? (
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              ) : (
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              )}
            </div>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

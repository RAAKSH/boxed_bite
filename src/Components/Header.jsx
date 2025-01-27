import logo from "../../public/FoodLogo1.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


export const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:
            {onlineStatus ? (
              <div class="status-indicator offline"></div>
            ) : (
              <div class="status-indicator offline"></div>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

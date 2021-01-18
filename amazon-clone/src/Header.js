import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const changeAuthentication = () => {
    auth.signOut();
  };

  return (
    <div className="totalHeader">
      <div className="header">
        <Link to="/">
          {/* Amazon Logo */}
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="header__logo"
          />
        </Link>
        {/* Deliver to box */}
        <div className="header__deliverTo">
          <LocationOnOutlinedIcon style={{ color: "white" }} />
          <div className="header__deliveryInfo">
            <span className="header__optionLineOne">
              Deliver To {user?.email || ""}
            </span>
            <span className="header__optionLineTwo">New York, 10016</span>
          </div>
        </div>
        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* Navigation options */}
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option" onClick={changeAuthentication}>
              <span className="header__optionLineOne">
                Hello, {user?.email || "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne"> Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/cart">
            {/* Takes you to the cart page */}
            <div className="header__optionCart">
              <span className='className="header__optionLineTwo header__cartCount"'>
                {cart?.length}
              </span>
              <ShoppingCartIcon />
            </div>
          </Link>
        </div>
      </div>

      <div className="subheader">
        <div className="subheader__menu">
          <MenuRoundedIcon style={{ color: "white" }} />
          <span className="subheader__menuText">All</span>
        </div>
        <span className="subheader__option">Prime Video</span>
        <span className="subheader__option">Your Amazon.com</span>
        <span className="subheader__option">Prime</span>
        <span className="subheader__option">Coupons</span>
        <span className="subheader__option">Customer Service</span>
        <span className="subheader__option">Best Sellers</span>
        <span className="subheader__option">Browsing History</span>

        <span className="subheader__option">Buy Again</span>
        <span className="subheader__option">Fresh</span>
        <span className="subheader__option">Whole Foods</span>
        <span className="subheader__option">Find a Gift</span>

        <span className="subheader__option">True love, low prices</span>
      </div>
    </div>
  );
}

export default Header;

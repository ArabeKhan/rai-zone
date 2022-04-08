import React from "react";
import "./Header.style.css";
import Logo from "../../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextApi/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleSighOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={Logo} alt="_logo" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* Material Ui logo */}
        <SearchIcon className="hedaer_searchIcons" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">
            Hello {user ? ` ${user.email}` : "Sir"}
          </span>
          <Link to={!user && "/login"}>
            {user ? (
              <span onClick={handleSighOut} className="header_optionLineTwo">
                Log Out
              </span>
            ) : (
              <span className="header_optionLineTwo">Sign In</span>
            )}
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

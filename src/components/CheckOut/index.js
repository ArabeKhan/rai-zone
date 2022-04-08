import React from "react";
import "./CheckOut.style.css";
import banner from "../../images/banner-images/banner.jpg";
import SubTotal from "../SubTotal";
import { useStateValue } from "../../ContextApi/StateProvider";
import CheckoutProduct from "../CheckoutProduct";

const CheckOut = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={banner} alt="_banner" />
        <div>
          <h2>Hello , {user ? user.email : "Sir"}</h2>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;

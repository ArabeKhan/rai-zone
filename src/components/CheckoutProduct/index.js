import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider";
import "./CheckoutProduct.style.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="_chc" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">$ {price}</p>
        <div className="checkoutProduct_price">
          <p>Rating : {rating}</p>
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

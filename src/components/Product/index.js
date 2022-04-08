import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider";
import "./Product.style.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p>
            Rating : <span>{rating}</span>
          </p>
        </div>
      </div>
      <img src={image} alt="_shoe" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;

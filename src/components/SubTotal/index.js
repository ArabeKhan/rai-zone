import React from "react";
import "./SubTotal.style.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../ContextApi/StateProvider";
import { getBasketTotal } from "../../ContextApi/reducer";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items)
              <strong>: {value}</strong>
            </p>
            <small className="subtitle_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default SubTotal;

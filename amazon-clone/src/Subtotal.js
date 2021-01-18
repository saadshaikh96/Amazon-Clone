import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getCartTotal(cart)}
        decimalDigits={2}
        displayType={"text"}
        thousandsSeparator={true}
      />

      <button
        disabled={cart?.length === 0}
        onClick={(e) => history.push(user ? "/payment" : "/login")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

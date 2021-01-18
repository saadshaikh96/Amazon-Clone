import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";

function CartItem({ id, title, rating, price, image, isCheckingOut = true }) {
  const [{ cart }, dispatch] = useStateValue();

  const deleteFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cartItem">
      <img src={image} alt={title} className="cartItem__image" />

      <div className="cartItem__details">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <strong>${price}</strong>
        </p>
        <Rating
          name="half-rating"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        {isCheckingOut && <button onClick={deleteFromCart}>Delete</button>}
      </div>
    </div>
  );
}

export default CartItem;

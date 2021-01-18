import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { id, title, price, image, rating },
    });
  };

  return (
    <div className="product">
      <div className="product__details">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>

        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </div>

      <img src={image} alt={title} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

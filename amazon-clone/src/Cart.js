import React from "react";
import Subtotal from "./Subtotal";
import CartItem from "./CartItem";
import "./Cart.css";
import { useStateValue } from "./StateProvider";

function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__products">
        <img
          src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt="Advertisement"
          className="cart__ad"
        />

        <h2 className="cart__title">Shopping Cart</h2>
        {/* <CartItem /> */}
        {cart.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>

      <div className="cart__checkout">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;

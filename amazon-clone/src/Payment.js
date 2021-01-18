import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [hasSucceeded, setHasSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();

  useEffect(() => {
    /*stripe secret allows us to charge the customer. Need to generate everytime the cart changes. 
    Tells stripe something like "Hey, I need to charge the customer $50"*/
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the currency in sub-units. So for dollars, it expects the total value in cents.
        url: `/payments/create?total=${Math.round(getCartTotal(cart) * 100)}`,
      });
      //   console.log("Data = ", response);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  //   console.log("Client secret is = ", clientSecret);

  const processPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent is nothing but payment confirmation. It is Stripe's fancy lingo

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            createdAt: paymentIntent.created,
          });

        setHasSucceeded(true);
        setError(null);
        setIsProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setIsDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({cart?.length} items)</h1>
        {/* payment section - address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>444 3rd Ave</p>
            <p>New York, NY</p>
            <p>10016</p>
          </div>
        </div>

        {/* payment section - cart items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((items) => (
              <CartItem
                id={items.id}
                title={items.title}
                price={items.price}
                image={items.image}
                rating={items.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - card details */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe payment */}
            <form onSubmit={processPayment}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: ${getCartTotal(cart)}</h3>
                    </>
                  )}
                  decimalDigits={2}
                  displayType={"text"}
                  thousandsSeparator={true}
                />

                <button
                  disabled={
                    isProcessing ||
                    isDisabled ||
                    hasSucceeded ||
                    cart?.length == 0 ||
                    !user
                  }
                >
                  <span>{isProcessing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

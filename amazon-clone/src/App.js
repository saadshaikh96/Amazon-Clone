import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51I5R0LIE5UNqFWJhMjWq0ydRkR3tzJFKTlSWvTCqSyU8vrQLVNnC6Ra0rH7hjhgl6jzQbPmtlhZkyYr2MAR3Aouu00uyKCDtjx"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User = ", authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>

          <Route path="/payment">
            {/* <Header /> */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            {/* Home page */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

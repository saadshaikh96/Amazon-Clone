import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ cart, user }, dispatch] = useStateValue();

  useEffect(() => {
    // console.log("Orders user = ", user);
    if (!user) {
      setOrders([]);
    } else {
      console.log("In the else block");
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
    console.log("User orders = ", orders);
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

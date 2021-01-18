const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I5R0LIE5UNqFWJhbvAXyn18xuvtgzrk1YGW0JZLqDvWLlvznvG0dLOBHaRMlKsx80hkKLL0iaLMDkD7LYkFX01C00qN5mDQNR"
);

// App config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//Routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  //   console.log("QUERY TOTAL = ", request.query.total);
  //   console.log("STRIPE = ", stripe);
  const totalAmount = request.query.total;

  console.log(`Payment request received for $${totalAmount}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount,
    currency: "usd",
  });

  //   console.log("PAYMENT INTENT = ", paymentIntent);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen

exports.api = functions.https.onRequest(app);

//API endpoint = http://localhost:5001/clone-90982/us-central1/api

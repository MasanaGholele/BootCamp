import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


function Payment({ amount }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(async () => {
    const res = await axios.get("http://localhost:3000/api/v1/checkout/config");
    const publishableKey = res.data.publishableKey;
    setStripePromise(loadStripe(publishableKey));
  }, []);

  useEffect(async () => {
    if (amount >= 1) {
      const res = await axios.post("http://localhost:3000/api/v1/checkout/create-payment-intent", {
        amount: amount
      })
      const clientSecret = res.data.clientSecret;
      setClientSecret(clientSecret);
    }
  }, []);


  return (
    <>
      <h1>Stripe Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;

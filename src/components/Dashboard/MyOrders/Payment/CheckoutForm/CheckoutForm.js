import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";

const CheckoutForm = ({ order }) => {
  const { price } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [order.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="text-white"
          options={{
            style: {
              base: {
                fontSize: "16px",
                //   color: "#424770",
                color: "#ffffff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />{" "}
        <hr className="border-2 border-base-100 mt-2" />
        <button
          className="mt-10 btn hover:bg-orange-500 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay{" "}
        </button>
      </form>
      {cardError && <p className="text-red-500 ">{cardError} </p>}
    </>
  );
};

export default CheckoutForm;

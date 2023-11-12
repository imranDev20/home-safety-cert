import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CheckoutForm from "./checkout-form";
import axios from "axios";

export default function PaymentDetails({
  setActiveStep,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
}) {
  const [stripePromise, setStripePromise] = useState<any>();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const response = await axios.get("/api/config");
        setStripePromise(loadStripe(response.data.publishableKey));
      } catch (error) {
        console.log(error);
      }
    };

    fetchKey();
  }, []);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post("/api/create-payment-intent");
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClientSecret();
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            loader: "always",

            appearance: {
              theme: "stripe",
              labels: "floating",
            },
          }}
        >
          <CheckoutForm setActiveStep={setActiveStep} />
        </Elements>
      )}
    </>
  );
}

import Lottie from "lottie-react";
import successAnimation from "@/assets/success-animation.json";
import errorAnimation from "@/assets/error-animation-2.json";
import { Box, Button, Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/shared/functions";
import { useEffect, useState } from "react";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import PaymentResult from "./payment-result";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function Outcome() {
  const [stripePromise, setStripePromise] = useState<any>();

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

  return (
    <>
      <PaymentResult />
    </>
  );
}

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { LoadingButton } from "@mui/lab";
import { Alert, Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { createQueryString } from "@/shared/functions";
import { Order } from "@/types/misc";

export default function CheckoutForm({ order }: { order: Order }) {
  const [status, setStatus] = useState<string>();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url:
            window.location.origin +
            window.location.pathname +
            "?" +
            createQueryString("active_step", "4"),
          receipt_email: order.email,
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          router.push(
            pathname +
              "?" +
              createQueryString("active_step", "4") +
              "&" +
              createQueryString(
                "payment_intent",
                res.error.payment_intent?.id as string
              ) +
              "&" +
              createQueryString(
                "payment_intent_client_secret",
                res.error.payment_intent?.client_secret as string
              ) +
              "&" +
              createQueryString("redirect_status", "failed")
          );
          setStatus(res.error.message);
        } else {
          router.push(
            pathname +
              "?" +
              createQueryString("active_step", "4") +
              "&" +
              createQueryString("payment_intent", res.paymentIntent.id) +
              "&" +
              createQueryString(
                "payment_intent_client_secret",
                res.paymentIntent.client_secret as string
              ) +
              "&" +
              createQueryString("redirect_status", res.paymentIntent.status)
          );
          setStatus(res.paymentIntent.status);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          defaultValues: {
            billingDetails: {
              email: order.email,
              name: order.name,
              phone: order.phone,
              address: {
                country: "GB",
                city: "London",
                postal_code: order.postCode,
                line1: order.house,
              },
            },
          },
        }}
      />
      <LoadingButton
        variant="contained"
        type="submit"
        loading={loading}
        sx={{ mt: 2 }}
      >
        Pay
      </LoadingButton>

      {status && (
        <Alert
          severity={status === "succeeded" ? "success" : "error"}
          sx={{
            mt: 2,

            "& .MuiAlert-icon": {
              alignItems: "center",
            },
          }}
        >
          {status}
        </Alert>
      )}
    </form>
  );
}

// http://localhost:3000/quote?payment_intent=pi_3OBcCZJZT84KLAtm0JExs2nR&payment_intent_client_secret=pi_3OBcCZJZT84KLAtm0JExs2nR_secret_4aIBn0NJlR0XPAPb9LDmABNWW&redirect_status=failed

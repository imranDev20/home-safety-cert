import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { LoadingButton } from "@mui/lab";
import { Alert, Button } from "@mui/material";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CheckoutForm({
  setActiveStep,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
}) {
  const [status, setStatus] = useState<string>();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    console.log(window.location.href);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: window.location.href,
          receipt_email: "imrandev20@gmail.com",
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          router.push(
            pathname +
              "?" +
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
          window.scrollTo(0, 300);
          setActiveStep(3);
        } else {
          setStatus(res.paymentIntent.status);
          router.push(
            pathname +
              "?" +
              createQueryString("payment_intent", res.paymentIntent.id) +
              "&" +
              createQueryString(
                "payment_intent_client_secret",
                res.paymentIntent.client_secret as string
              ) +
              "&" +
              createQueryString("redirect_status", res.paymentIntent.status)
          );
          window.scrollTo(0, 300);
          setActiveStep(3);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          defaultValues: {
            billingDetails: {
              email: "imrandev20@gmail.com",
              name: "Imran Kabir",
              phone: "+4402034884929",
              address: {
                country: "UK",
                postal_code: "E1 5NP",
                city: "London",
                line1: "Salisbury Ave, Barking",
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

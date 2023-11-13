import Lottie from "lottie-react";
import successAnimation from "@/assets/success-animation.json";
import errorAnimation from "@/assets/error-animation-2.json";
import { Box, Button, Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/shared/functions";
import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export default function PaymentResult() {
  const stripe = useStripe();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<null | {
    status: string;
    text: string;
  }>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = searchParams.get("payment_intent_client_secret");

    const fetchIntent = async () => {
      const response = await stripe.retrievePaymentIntent(
        clientSecret as string
      );

      const { paymentIntent } = response;

      if (!paymentIntent) {
        console.log("Payment intent wasn't found");
        return;
      }

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage({
            status: paymentIntent.status,
            text: "Success! Payment received.",
          });
          break;

        case "processing":
          setMessage({
            status: paymentIntent.status,
            text: "Payment processing. We'll update you when payment is received.",
          });
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage({
            status: paymentIntent.status,
            text: "Payment failed. Please try another payment method.",
          });

          break;

        default:
          setMessage({
            status: paymentIntent.status,
            text: "Something went wrong.",
          });
          break;
      }
    };

    fetchIntent();
  }, [stripe, searchParams]);

  return (
    <div>
      {message?.status === "succeeded" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
            }}
          >
            <Lottie animationData={successAnimation} loop={false} />
          </Box>
          <Typography component="h1" variant="h5">
            {message.text}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mt: 1,
            }}
          >
            Thank you for your order. An email containing your receipt has been
            sent. <br /> Create an account using{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 500,
              }}
            >
              imrankabir997@gmail.com
            </Typography>{" "}
            to monitor your order.
          </Typography>

          <Typography
            sx={{
              color: "text.primary",

              fontSize: 18,
              mt: 2,
            }}
          >
            Transaction Number:{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 500,
              }}
            >
              8219038109201
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "text.primary",
              fontSize: 18,
            }}
          >
            Order ID:{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 500,
              }}
            >
              82190
            </Typography>
          </Typography>
        </Box>
      )}

      {(message?.status !== "succeeded" ||
        message?.status !== "processing" ||
        message?.status !== "requires_payment_method") && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
            }}
          >
            <Lottie animationData={errorAnimation} loop={false} />
          </Box>
          <Typography component="h1" variant="h5">
            {message?.text}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mt: 1,
            }}
          >
            We&apos;re sorry, but there was an issue processing your payment.
            Please double-check your payment information and try again. If the
            problem persists, contact our customer support for assistance.
          </Typography>

          <Button
            variant="blue-outlined"
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("active_step", "3")
              );
            }}
            sx={{
              mt: 2,
            }}
          >
            Go Back
          </Button>
        </Box>
      )}
    </div>
  );
}
import Lottie from "lottie-react";
import successAnimation from "@/assets/success-animation.json";
import errorAnimation from "@/assets/error-animation-2.json";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/shared/functions";
import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export default function Outcome() {
  const stripe = useStripe();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<null | {
    status: string;
    text: string;
  }>(null);
  const pathname = usePathname();
  const [info, setInfo] = useState({
    email: "",
    id: "",
  });

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = searchParams.get("payment_intent_client_secret");

    const fetchIntent = async () => {
      try {
        const response = await stripe.retrievePaymentIntent(
          clientSecret as string
        );

        const { paymentIntent } = response;

        console.log(response);

        setInfo({
          email: response.paymentIntent?.receipt_email as string,
          id: response.paymentIntent?.id as string,
        });

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
      } catch (error: any) {
        setMessage({
          status: error.name as string,
          text: error.message as string,
        });
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
          <Typography
            component="h1"
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
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
              {info.email}
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
              {info.id}
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

      {(message?.status === null || message?.status === "processing") && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: 300,
          }}
        >
          <CircularProgress size={40} />
          <Typography
            sx={{
              mt: 3,
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            Loading
          </Typography>
        </Box>
      )}

      {message?.status === "requires_payment_method" && (
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
          <Typography
            component="h1"
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
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
                pathname + "?" + createQueryString("active_step", "4")
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

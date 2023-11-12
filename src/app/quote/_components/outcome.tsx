import Lottie from "lottie-react";
import successAnimation from "@/assets/success-animation.json";
import errorAnimation from "@/assets/error-animation-2.json";
import { Box, Button, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Outcome({
  setActiveStep,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
}) {
  const searchParams = useSearchParams();
  const redirectStatus = searchParams.get("redirect_status");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {redirectStatus === "succeeded" && (
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
            Payment Successful!
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

      {redirectStatus === "failed" && (
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
            Payment Failed!
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
              router.push(pathname);

              setActiveStep(2);
            }}
            sx={{
              mt: 2,
            }}
          >
            Go Back
          </Button>
        </Box>
      )}
    </>
  );
}

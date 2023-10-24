import Lottie from "lottie-react";
import successAnimation from "@/assets/success-animation.json";
import { Box, Divider, Typography } from "@mui/material";

export default function Outcome() {
  return (
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
          mt: 5,
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
  );
}

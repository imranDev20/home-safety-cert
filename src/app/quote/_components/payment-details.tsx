import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {};

export default function PaymentDetails({}: Props) {
  return (
    <>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          mb: 3,
        }}
      >
        3. Payment Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            placeholder="Your name on card"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Card Number"
            variant="outlined"
            placeholder="Enter your card number"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Card Expiration Date"
            variant="outlined"
            placeholder="Your name on card"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="CVC/CVV"
            variant="outlined"
            placeholder="Card Verification Code/Value"
          />
        </Grid>
      </Grid>
    </>
  );
}

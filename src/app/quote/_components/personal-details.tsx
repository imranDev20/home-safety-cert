"use client";
import { Chip, Divider, Grid, TextField, Typography } from "@mui/material";

export default function PersonalDetails() {
  return (
    <>
      <Typography
        component="h2"
        variant="h5"
        sx={{
          mb: 3,
        }}
      >
        2. Personal Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            placeholder="Your name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            placeholder="Your email address"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            placeholder="Your phone number"
          />
        </Grid>

        <Grid item xs={12}>
          <Divider>
            <Chip
              label="Address"
              sx={{
                fontWeight: 500,
                fontSize: 16,
              }}
            />
          </Divider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="House and Street"
            variant="outlined"
            placeholder="Your house number and street name"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Post Code"
            variant="outlined"
            placeholder="Your post code"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled
            fullWidth
            defaultValue="London"
            label="City"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
}

"use client";
import { ArrowCircleRightRounded } from "@mui/icons-material";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import {
  BsChatSquareQuote,
  BsEnvelope,
  BsPerson,
  BsPhone,
  BsSignpostSplit,
} from "react-icons/bs";

export default function Form() {
  return (
    <Grid container spacing={2} component="form">
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Name"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsPerson />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Number"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsPhone />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Email"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsEnvelope />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Enter Zip Code"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsSignpostSplit />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Message..."
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          sx={{
            ".MuiInputBase-root": {
              display: "flex",
              alignItems: "start",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" sx={{ mt: 1.8 }}>
                <BsChatSquareQuote />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Button
          fullWidth
          variant="blue"
          color="primary"
          endIcon={<ArrowCircleRightRounded />}
        >
          Submit Request
        </Button>
      </Grid>
    </Grid>
  );
}

"use client";
import HookFormError from "@/app/_components/common/hook-form-error";
import { ArrowCircleRightRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneNumberInput from "./phone-number-input";

import {
  BsChatSquareQuote,
  BsEnvelope,
  BsPerson,
  BsPhone,
  BsSignpostSplit,
} from "react-icons/bs";

type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  message: string;
};

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      zipCode: "",
      message: "",
    },
  });

  const onFormSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={2}
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      noValidate
      sx={{
        mt: 3,
      }}
    >
      <Grid item md={6} xs={12}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name can't be empty",
            pattern: {
              value: /^[A-Za-z'-]+$/,
              message: "Not a valid human name",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
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
          )}
        />
        <HookFormError name="name" errors={errors} />
      </Grid>
      <Grid item md={6} xs={12}>
        <PhoneInput
          name="phone"
          control={control}
          defaultCountry="GB"
          inputComponent={PhoneNumberInput}
          placeholder="Your Phone number"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsPhone />
              </InputAdornment>
            ),
          }}
          rules={{
            required: "You did not provide a phone number",
            validate: (value: string) => {
              const valid = isValidPhoneNumber(value);

              return valid || `Your provided phone number is not valid`;
            },
          }}
        />

        <HookFormError name="phone" errors={errors} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email address can't be empty",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Not a valid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              placeholder="Your Email Address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <BsEnvelope />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <HookFormError name="email" errors={errors} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Controller
          name="zipCode"
          control={control}
          rules={{
            required: "Zip code can't be empty",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              required
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
          )}
        />
        <HookFormError name="zipCode" errors={errors} />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Message (optional)"
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
          )}
        />
        <HookFormError name="message" errors={errors} />
      </Grid>
      <Grid item md={6} xs={12}>
        <LoadingButton
          fullWidth
          variant="blue"
          color="primary"
          type="submit"
          endIcon={<ArrowCircleRightRounded />}
        >
          Submit Request
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

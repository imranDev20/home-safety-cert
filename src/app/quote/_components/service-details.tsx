"use client";

import HookFormError from "@/app/_components/common/hook-form-error";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { isObjectEmpty } from "@/shared/functions";
import { ServiceFormInput } from "@/types/form";
import { Order } from "@/types/misc";

export default function ServiceDetails({
  setActiveStep,
  order,
  setOrder,
}: {
  setActiveStep: Dispatch<SetStateAction<number>>;
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
}) {
  const {
    control,
    watch,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<ServiceFormInput>({
    defaultValues: {
      isGas: order.isGas ? order.isGas : false,
      isEicr: order.isEicr ? order.isEicr : false,
      isEpc: order.isEpc ? order.isEpc : false,
      appliances: order.appliances ? order.appliances : "",
      fuseBoards: order.fuseBoards ? order.fuseBoards : "",
      bedRooms: order.bedRooms ? order.bedRooms : "",
      tflZone: order.tflZone ? order.tflZone : "",
      time: order.time ? order.time : "",
    },
  });

  const isGas = watch("isGas");
  const isEicr = watch("isEicr");
  const isEpc = watch("isEpc");

  const handleServiceDetailsSubmit: SubmitHandler<ServiceFormInput> = (
    data
  ) => {
    setOrder({ ...order, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // router.push(
    //   pathname +
    //     "?" +

    // );
    window.scrollTo(0, 300);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleServiceDetailsSubmit)}
      noValidate
    >
      <SnackbarProvider />
      <Typography
        component="h2"
        variant="h5"
        sx={{
          mb: 3,
        }}
      >
        1. Service Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            control={control}
            rules={{
              required: {
                value: !isEicr && !isEpc,
                message: "You must select a service",
              },
            }}
            name="isGas"
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    required={!isEicr && !isEpc}
                    onChange={(e) => {
                      onChange(e.target.checked);

                      setValue("appliances", "");
                      setOrder({ ...order, appliances: "" });

                      clearErrors("isEicr");
                      clearErrors("isEpc");
                      clearErrors("isGas");
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Gas
                  </Typography>
                }
              />
            )}
          />

          <HookFormError name="isGas" errors={errors} />

          <Controller
            control={control}
            name="appliances"
            rules={{
              required: {
                value: isGas,
                message: "Please select the number of appliances",
              },
            }}
            render={({ field }) => (
              <FormControl
                disabled={!isGas}
                fullWidth
                sx={{
                  mt: 1,
                }}
              >
                <FormLabel
                  sx={{
                    fontSize: 18,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  How many gas appliances does your property have?
                </FormLabel>
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="1 Applicance"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="2 Appliance"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="3 Appliance"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
          <HookFormError name="appliances" errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="isEicr"
            rules={{
              required: {
                value: !isGas && !isEpc,
                message: "You must select a service",
              },
            }}
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    required={!isGas && !isEpc}
                    onChange={(e) => {
                      onChange(e.target.checked);

                      setValue("fuseBoards", "");
                      setOrder({ ...order, fuseBoards: "" });

                      clearErrors("isEicr");
                      clearErrors("isEpc");
                      clearErrors("isGas");
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    EICR
                  </Typography>
                }
              />
            )}
          />
          <HookFormError name="isEicr" errors={errors} />

          <Controller
            name="fuseBoards"
            control={control}
            rules={{
              required: {
                value: isEicr,
                message: "Please select the number of fuse boards",
              },
            }}
            render={({ field }) => (
              <FormControl fullWidth sx={{ mt: 1 }} disabled={!isEicr}>
                <FormLabel
                  sx={{
                    fontSize: 18,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  How many Fuse Boards does your property have?
                </FormLabel>
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="1 unit"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="2 units"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="3 units"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
          <HookFormError name="fuseBoards" errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="isEpc"
            rules={{
              required: {
                value: !isGas && !isEicr,
                message: "You must select a service",
              },
            }}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    required={!isEicr && !isGas}
                    onChange={(e) => {
                      onChange(e.target.checked);

                      setValue("bedRooms", "");
                      setOrder({ ...order, bedRooms: "" });

                      clearErrors("isEicr");
                      clearErrors("isEpc");
                      clearErrors("isGas");
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    EPC
                  </Typography>
                }
              />
            )}
          />
          <HookFormError name="isEpc" errors={errors} />

          <Controller
            name="bedRooms"
            control={control}
            rules={{
              required: {
                value: isEpc,
                message: "Please select the number of bedrooms",
              },
            }}
            render={({ field }) => (
              <FormControl fullWidth sx={{ mt: 1 }} disabled={!isEpc}>
                <FormLabel
                  sx={{
                    fontSize: 18,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  How many Bed Rooms does your property has?
                </FormLabel>
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="0-3"
                    control={<Radio />}
                    label="0-3 bedrooms"
                  />
                  <FormControlLabel
                    value="4-6"
                    control={<Radio />}
                    label="4-6 bedrooms"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
          <HookFormError name="bedRooms" errors={errors} />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Controller
            name="tflZone"
            control={control}
            rules={{
              required: "TFL Zone information is required",
            }}
            render={({ field }) => (
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    fontSize: 18,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  Is your property inside TFL Zone 1 or outside TFL Zone 5?
                </FormLabel>
                <RadioGroup {...field}>
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                  <FormControlLabel
                    value="tfl_1"
                    control={<Radio />}
                    label="Inside TFL Zone 1"
                  />
                  <FormControlLabel
                    value="tfl_5"
                    control={<Radio />}
                    label="Outside TFL Zone 5"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
          <HookFormError name="tflZone" errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="time"
            rules={{
              required: "Time information is required",
            }}
            render={({ field }) => (
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    fontSize: 18,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  When do you want the service?
                </FormLabel>
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="24 hours"
                    control={<Radio />}
                    label="Within the next 24 Hours"
                  />
                  <FormControlLabel
                    value="48 hours"
                    control={<Radio />}
                    label="Within the next 48 Hours"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Some other time"
                  />
                </RadioGroup>
              </FormControl>
            )}
          />
          <HookFormError name="time" errors={errors} />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormHelperText
          error
          sx={{
            fontSize: 16,
          }}
        >
          {!isObjectEmpty(errors) && "Please select all the necessary fields"}
        </FormHelperText>
        <Button
          type="submit"
          variant="blue"
          sx={{
            mt: 2,
          }}
        >
          Next: Personal Details
        </Button>
      </Box>
    </Box>
  );
}

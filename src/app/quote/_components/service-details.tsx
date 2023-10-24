"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function ServiceDetails() {
  const { control, watch, resetField } = useFormContext();

  const isGas = watch("isGas");
  const isEicr = watch("isEicr");
  const isEpc = watch("isEpc");

  return (
    <Box>
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
            name="isGas"
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      if (isGas) resetField("appliances");
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

          <Controller
            control={control}
            name="appliances"
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
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="isEicr"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      if (isEicr) resetField("fuseBoards");
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

          <Controller
            name="fuseBoards"
            control={control}
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
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="isEpc"
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      if (isEpc) resetField("bedRooms");
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

          <Controller
            name="bedRooms"
            control={control}
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
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Controller
            name="tflZone"
            control={control}
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
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="time"
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
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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

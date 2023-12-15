import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Divider, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const steps = [
  {
    label: "Service Details",
    optional: "Fitst Step",
  },
  {
    label: "Personal Details",
    optional: "Second Step",
  },
  {
    label: "Confirmation",
    optional: "Third Step",
  },
  {
    label: "Payment Details",
    optional: "Last Step",
  },
];

export default function RightSidebarStepper({
  activeStep,
}: {
  activeStep: number;
}) {
  const handleNext = () => {};

  const handleBack = () => {};

  console.log(activeStep);

  return (
    <Card
      elevation={0}
      sx={{
        boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
        position: "sticky",
        top: 80,
      }}
    >
      <CardContent>
        <Box>
          <Typography
            component="h3"
            variant="h5"
            sx={{
              mb: 1,
            }}
          >
            Order Completion
          </Typography>
          <Divider
            sx={{
              mb: 3,
            }}
          />
          <Stepper activeStep={activeStep - 1} orientation="vertical">
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel
                  sx={{
                    "& .MuiStepIcon-root.Mui-active": {
                      color: "#53C31B",
                    },
                    "& .MuiStepIcon-root.Mui-completed": {
                      color: "#53C31B",
                    },
                  }}
                >
                  <Typography variant="caption">{step.optional}</Typography>
                  <Typography
                    component="h4"
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Grid container spacing={3} mt={3}>
            <Grid item xs={6}>
              <Button
                disabled={activeStep === 1}
                fullWidth
                startIcon={<ChevronLeft />}
                variant="blue-outlined"
                onClick={handleBack}
              >
                Back
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                fullWidth
                type="submit"
                variant="blue"
                endIcon={<ChevronRight />}
                onClick={handleNext}
              >
                {activeStep === 3 ? "Send" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

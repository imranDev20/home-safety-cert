"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, Container, Grid } from "@mui/material";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";
import Heading from "../_components/common/heading";
import Paragraph from "../_components/common/paragraph";
import RightSidebarStepper from "./_components/right-sidebar-stepper";
import ServiceDetails from "./_components/service-details";
import PersonalDetails from "./_components/personal-details";
import PaymentDetails from "./_components/payment-details";
import Outcome from "./_components/outcome";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type QuoteFormInput = {
  isGas: boolean;
  isEicr: boolean;
  isEpc: boolean;
  appliances: string;
  fuseBoards: string;
  bedRooms: string;
  tflZone: string;
  time: string;
};

export default function QuotePage() {
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm<QuoteFormInput>({
    defaultValues: {
      isGas: false,
      isEicr: false,
      isEpc: false,
      appliances: "",
      fuseBoards: "",
      bedRooms: "",
      tflZone: "",
      time: "",
    },
  });

  const { handleSubmit } = methods;
  const onServiceDetailsSubmit: SubmitHandler<QuoteFormInput> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
      }}
    >
      <PageHeader backgroundImage={BackgroundImage} title="Request a Quote" />

      <Heading sx={{ textAlign: "center", mb: 1, mt: 7 }}>
        3 Simple Steps to Your Quote
      </Heading>
      <Paragraph sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}>
        Obtaining a quote for our landlord safety certification services is
        quick and easy. Follow our three simple steps to get a quote tailored to
        your needs.
      </Paragraph>

      <Container
        maxWidth="md"
        sx={{
          pb: 7,
        }}
      >
        <FormProvider {...methods}>
          <Grid
            container
            spacing={3}
            component="form"
            onSubmit={handleSubmit(onServiceDetailsSubmit)}
          >
            <Grid item md={8}>
              <Card
                elevation={0}
                sx={{
                  boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                  }}
                >
                  {activeStep === 0 ? <ServiceDetails /> : null}
                  {activeStep === 1 ? <PersonalDetails /> : null}
                  {activeStep === 2 ? <PaymentDetails /> : null}
                  {activeStep === 3 ? <Outcome /> : null}
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={4}>
              <RightSidebarStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </Container>
    </Box>
  );
}

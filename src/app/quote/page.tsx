"use client";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";
import Heading from "../_components/common/heading";
import Paragraph from "../_components/common/paragraph";
import RightSidebarStepper from "./_components/right-sidebar-stepper";
import ServiceDetails from "./_components/service-details";
import PersonalDetails from "./_components/personal-details";
import PaymentDetails from "./_components/payment-details";
import Outcome from "./_components/outcome";
import { Order } from "@/types/misc";
import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const serviceRef = useRef(null);

  const [order, setOrder] = useState<Order>({
    isGas: false,
    isEpc: false,
    isEicr: false,
    appliances: "",
    fuseBoards: "",
    bedRooms: "",
    tflZone: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    house: "",
    postCode: "",
    city: "",
  });

  const activeStep = parseInt(searchParams.get("active_step") as string);

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [activeStep]);

  const [stripePromise, setStripePromise] = useState<any>();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const response = await axios.get("/api/config");
        setStripePromise(loadStripe(response.data.publishableKey));
      } catch (error) {
        console.log(error);
      }
    };

    fetchKey();
  }, []);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post("/api/create-payment-intent");
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClientSecret();
  }, []);

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
        <Grid container spacing={3}>
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
                {stripePromise && clientSecret ? (
                  <Elements
                    stripe={stripePromise}
                    options={{
                      clientSecret,
                      loader: "always",

                      appearance: {
                        theme: "stripe",
                        labels: "floating",
                      },
                    }}
                  >
                    {activeStep === 1 || Number.isNaN(activeStep) ? (
                      <ServiceDetails order={order} setOrder={setOrder} />
                    ) : null}
                    {activeStep === 2 ? (
                      <PersonalDetails order={order} setOrder={setOrder} />
                    ) : null}
                    {activeStep === 3 ? <PaymentDetails order={order} /> : null}
                    {activeStep === 4 ? <Outcome /> : null}
                  </Elements>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      height: 300,
                    }}
                  >
                    <CircularProgress size={40} />
                    <Typography
                      sx={{
                        mt: 3,
                        fontWeight: 500,
                        fontSize: 20,
                      }}
                    >
                      Loading
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4}>
            <RightSidebarStepper activeStep={activeStep} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

import { Phone } from "@mui/icons-material";
import { INFO } from "@/shared/constants";
import Heading from "@/app/_components/common/heading";
import Paragraph from "@/app/_components/common/paragraph";

const About = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        my: 8,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6}></Grid>
        <Grid container item md={6} spacing={3}>
          <Grid item md={12}>
            <Heading
              headingType="h1"
              sx={{
                mb: 2,
                maxWidth: 600,
              }}
            >
              Introducing Home Safety Cert: Your Trusted Partner for Landlord
              Safety Certifications
            </Heading>

            <Paragraph sx={{ my: 2 }}>
              We are a team of professionals focused on providing landlord
              safety certifications in a hassle-free manner. Our services
              include Gas Safety Certificates, Electrical certification, Energy
              Performance Certificates, PAT testing, Fire Alarm Certificates,
              Fire Risk Assessments, and more. Our vetted experts have extensive
              experience in their respective fields.
            </Paragraph>

            <Paragraph sx={{ my: 2 }}>
              Our customer-centric approach includes a rating system for
              tradespeople and a general safety check for potential hazards
              during each property visit. Our reminder service sends
              notifications when services are due, saving you time and hassle.
              We are constantly updating our system to make it easier for
              landlords and estate agents.
            </Paragraph>
            <Paragraph sx={{ my: 2 }}>
              We prioritize tenant safety and insurance claims, ensuring
              complete compliance and safety for your properties. Our services
              are hassle-free and require no contract or direct debit setup. We
              only charge when you agree to our services. Choose us for reliable
              and stress-free certification services.
            </Paragraph>

            <Paragraph
              sx={{
                backgroundColor: "background.main",
                px: 2,
                py: 2,
                mt: 3,
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
                fontSize: 17,
              }}
            >
              As professionals, our utmost priority lies in valuing our service
              above revenue. Our growth hinges solely upon the recommendations
              we receive from satisfied clients like you. We toil diligently to
              ensure your happiness and contentment with our services.
            </Paragraph>
          </Grid>

          <Grid
            container
            item
            md={12}
            columns={14}
            display="flex"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  height: 55,
                  width: 55,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Phone
                  sx={{
                    color: "text.primary",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="span"
                sx={{
                  ...theme.typography.body2,
                  fontSize: 17,
                  mr: 1,
                }}
              >
                Call Anytime:
              </Typography>
              <Typography
                component="a"
                href={"tel:" + INFO.phone.text}
                sx={{
                  color: "text.primary",
                  fontSize: 22,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {INFO.phone.text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

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

            <Paragraph>
              At Home Safety Cert, we specialize in landlord safety
              certifications. As per legal requirements, landlords must obtain
              various certificates to rent or sell a property. The majority of
              these certificates need annual revalidation. Managing these
              certifications has become increasingly challenging for landlords
              and estate agents due to complex laws and timelines. Our goal is
              to alleviate the burden of property certifications, providing you
              with peace of mind.
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

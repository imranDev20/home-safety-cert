"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import {
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";
import Heading from "../_components/common/heading";
import Paragraph from "../_components/common/paragraph";
import RightSidebarStepper from "./_components/right-sidebar-stepper";

export default function QuotePage() {
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

      <Container maxWidth="md">
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
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
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

                    <FormControl
                      fullWidth
                      sx={{
                        mt: 1,
                      }}
                    >
                      <FormLabel>
                        How many Gas Appliances does your property has?
                      </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="1 Applicance"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="2 Appliance"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="3 Appliance"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
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

                    <FormControl fullWidth sx={{ mt: 1 }}>
                      <FormLabel>
                        How many Fuse Boards does your property has?
                      </FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="1 unit"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="2 units"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="3 units"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card
              elevation={0}
              sx={{
                boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
              }}
            >
              <CardContent>
                <RightSidebarStepper />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

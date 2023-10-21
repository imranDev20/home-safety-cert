import React from "react";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "../../images/about-bg.jpeg";
import {
  Container,
  Grid,
  Stack,
  Link as MuiLink,
  Tooltip,
  Box,
  Typography,
} from "@mui/material";
import Heading from "../_components/common/heading";
import Paragraph from "../_components/common/paragraph";
import { CONTACT_PAGE_INFO, SOCIALS } from "@/shared/constants";
import Link from "next/link";
import Form from "../_components/common/form";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" backgroundImage={BackgroundImage} />
      <Container>
        <Grid container spacing={5} sx={{ my: 10 }}>
          <Grid item md={4}>
            <Heading>
              Let Us Help You Ensure Your Property is Safe and Certified.
              Contact Us Today!
            </Heading>
            <Paragraph>
              Contact us today and let us take the headache out of property
              certifications. Our expert team ensures your property is safe and
              certified.
            </Paragraph>
            <Stack direction="row" spacing={2}>
              {SOCIALS.map((social) => (
                <Tooltip title={social.name} placement="top" key={social.id}>
                  <MuiLink
                    component={Link}
                    href={social.href}
                    target="_blank"
                    sx={{
                      border: "1px solid",
                      width: 30,
                      height: 30,
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "secondary.main",
                      color: "secondary.main",
                      borderRadius: 300,
                    }}
                  >
                    <social.icon />
                  </MuiLink>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
          <Grid item md={8}>
            <Form />
          </Grid>
        </Grid>
      </Container>

      <div style={{ width: "100%", position: "relative", marginTop: 150 }}>
        <Grid
          container
          sx={{
            backgroundColor: "primary.main",
            maxWidth: 1000,
            mx: "auto",
            borderRadius: { xs: 0, md: 200 },
            position: { xs: "relative", md: "absolute" },
            left: "50%",
            top: "-15%",
            transform: "translateX(-50%)",
          }}
        >
          {CONTACT_PAGE_INFO.map((item) => (
            <Grid
              key={item.id}
              item
              md={4}
              xs={12}
              sx={{
                py: 3,
                px: 5,
                borderRight: "1px solid",
                borderRightColor: "rgba(255,255,255,.07)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  backgroundColor: "rgba(255,255,255,.07)",
                  color: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <item.Icon
                  style={{
                    fontSize: 28,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  component="h4"
                  variant="h6"
                  sx={{
                    color: "white",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  {item.info}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <iframe
          width="100%"
          height="400"
          style={{
            border: 0,
            overflow: "hidden",
            margin: 0,
          }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kemp%20House%20EC1V%202NX%20London%20United%20Kingdom+(Home%20Safety%20Certificate)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}

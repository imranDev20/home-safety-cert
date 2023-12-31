"use client";
import { Box, Container, Grid, Typography } from "@mui/material";

import Heading from "@/app/_components/common/heading";
import Paragraph from "@/app/_components/common/paragraph";
import {
  BookingIcon,
  CalendarIcon,
  CertificateIcon,
  DoorIcon,
} from "@/app/_components/common/icons";

const Process = () => {
  const processes = [
    {
      id: 1,
      title: "Book your service",
      subtitle:
        "Book our services via website or phone. Request a quote for fast, reliable service",
      Icon: BookingIcon,
    },
    {
      id: 2,
      title: "Confirm the Inspection date",
      subtitle:
        "Choose the date and time that suits you best. We'll confirm it shortly. Flexible scheduling for your convenience.",
      Icon: CalendarIcon,
    },
    {
      id: 3,
      title: "Open the door",
      subtitle:
        "Open the door and let our certified experts handle the job, hassle-free. Your safety is our top priority.",
      Icon: DoorIcon,
    },
    {
      id: 4,
      title: "Receive your Certificate",
      subtitle:
        "After our certified professionals have completed their inspection and testing, you will receive your official certification promptly.",
      Icon: CertificateIcon,
    },
  ];
  return (
    <Container component="section" sx={{ my: 15 }}>
      <Heading
        sx={{
          mb: 5,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Get the Services You Need in Just a Few Easy Steps
      </Heading>
      <Grid container spacing={5}>
        {processes.map((process, index) => (
          <Grid item md={3} sm={6} xs={12} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: 50,
                  border: "4px solid #f5f5f5",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 5,
                  position: "relative",
                }}
              >
                <process.Icon
                  sx={{
                    fontSize: 50,
                  }}
                />
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    width: 40,
                    height: 40,
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 40,
                    right: "-10px",
                    borderRadius: 30,
                    transform: "translateY(-50%)",
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  0{index + 1}
                </Box>
              </Box>

              <Typography
                component="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: 20,
                  textAlign: "center",
                  mb: 0.5,
                }}
              >
                {process.title}
              </Typography>
              <Paragraph sx={{ textAlign: "center" }}>
                {process.subtitle}
              </Paragraph>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Process;

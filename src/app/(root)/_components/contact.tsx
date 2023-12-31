"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Reviews from "./reviews";
import Form from "@/app/_components/common/form";

const Contact = ({ isPage }: { isPage: boolean }) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        mb: 10,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          boxShadow: isPage
            ? "none"
            : { xs: "none", md: "0 0 9px 0 rgba(29, 33, 67, 0.10)" },
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              height: "100%",
              position: "relative",
              color: "white",
              maxWidth: 640,

              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "primary.main",
                opacity: 1,
              },
            }}
          >
            <Reviews />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "secondary.main",
                opacity: 0.9,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                p: 7,
                maxWidth: 640,
              }}
            >
              <Typography component="h2" variant="h4">
                Get in Touch with Us
              </Typography>

              <Form />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

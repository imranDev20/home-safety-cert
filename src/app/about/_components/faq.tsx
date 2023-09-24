"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FaqAccordion from "./faq-accordion";
import Paragraph from "@/app/_components/common/paragraph";
import Heading from "@/app/_components/common/heading";
import { FAQS } from "@/shared/constants";

const Faq = () => {
  const theme = useTheme();

  return (
    <Container sx={{ my: 15 }}>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item md={5}>
          <Box
            sx={{
              borderRight: "1px solid",
              borderRightColor: "border.main",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                color: theme.typography.body2,
                fontWeight: 500,
              }}
            >
              Have any Questions?
            </Typography>
            <Heading
              headingType="h2"
              sx={{
                mb: 2,
                maxWidth: 600,
              }}
            >
              Recently Asked Questions
            </Heading>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Paragraph>
            Discover answers to frequently asked questions regarding our
            landlord safety certifications and services. Clear any uncertainties
            and gain valuable insights.
          </Paragraph>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <FaqAccordion faqs={FAQS.slice(0, 5).map((item) => item)} />
        </Grid>
        <Grid item md={6}>
          <FaqAccordion faqs={FAQS.slice(5).map((item) => item)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;

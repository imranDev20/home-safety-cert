import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";

export default function PricingPage() {
  return (
    <Container maxWidth={false} disableGutters>
      <PageHeader backgroundImage={BackgroundImage} title="Pricing" />
    </Container>
  );
}

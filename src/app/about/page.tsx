import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../(root)/components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Container maxWidth={false} component="main" disableGutters>
      <PageHeader backgroundImage={BackgroundImage} title="About" />
    </Container>
  );
}

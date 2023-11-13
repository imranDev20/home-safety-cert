"use client";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import Lottie from "lottie-react";
import notFoundAnimation from "@/assets/not-found-animation.json";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 6,
        mb: 10,
      }}
    >
      <Lottie animationData={notFoundAnimation} loop={true} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button LinkComponent={Link} sx={{ mt: 3 }} variant="blue" href="/">
          Back to Home Page
        </Button>
      </Box>
    </Container>
  );
}

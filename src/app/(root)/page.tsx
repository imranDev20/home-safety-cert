import * as React from "react";
import { Box } from "@mui/material";
import Hero from "./_components/hero";
import About from "./_components/about";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <About />
    </Box>
  );
}

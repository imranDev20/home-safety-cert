import { Box } from "@mui/material";
import Hero from "./_components/hero";
import About from "./_components/about";
import Pricing from "./_components/pricing";
import Services from "../_components/global/services";
import Contact from "./_components/contact";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <About />
      <Pricing />
      <Services />
      <Contact isPage={false} />
    </Box>
  );
}

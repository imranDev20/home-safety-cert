import { Box } from "@mui/material";
import Hero from "./_components/hero";
import About from "./_components/about";
import Pricing from "./_components/pricing";
import Services from "../_components/global/services";
import Contact from "./_components/contact";
import Process from "./_components/process";
import Achievements from "./_components/achievements";

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <About />
      <Pricing />
      <Services />
      <Contact isPage={false} />
      <Process />
      <Achievements />
    </Box>
  );
}

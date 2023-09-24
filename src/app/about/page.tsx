import { Container } from "@mui/material";
import PageHeader from "../_components/common/page-header";
import BackgroundImage from "@/images/about-bg.jpeg";
import About from "./_components/about";

export default function AboutPage() {
  return (
    <Container maxWidth={false} component="main" disableGutters>
      <PageHeader backgroundImage={BackgroundImage} title="About" />
      <About />
    </Container>
  );
}

import { Container, Grid } from "@mui/material";
import PageHeader from "../_components/common/page-header";
import Heading from "../_components/common/heading";
import Paragraph from "../_components/common/paragraph";
import { SERVICES } from "@/shared/constants";
import BackgroundImage from "../../images/about-bg.jpeg";
import ServiceCard from "./_components/service-card";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" backgroundImage={BackgroundImage} />
      <Container sx={{ my: 10 }}>
        <Heading sx={{ textAlign: "center", mb: 1 }}>
          Your Comprehensive Solution for Home Safety Certification Services
        </Heading>
        <Paragraph
          sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}
        >
          Our experienced team offers a range of certifications to ensure your
          home is safe and compliant with regulations. We are committed to
          providing reliable and efficient services at competitive prices, and
          we strive to ensure the safety and well-being of our clients.
        </Paragraph>
        <Grid container spacing={3}>
          {SERVICES.map((service) => {
            return (
              <Grid item md={4} sm={6} xs={12} key={service.id}>
                <ServiceCard service={service} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

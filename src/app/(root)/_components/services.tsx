"use client";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ServiceCard from "./service-card";
import { SERVICES } from "@/shared/constants";
import Heading from "../../_components/common/heading";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const StyledCarouselProvider = styled(CarouselProvider)({
  "& .carousel__inner-slide": {
    width: "calc(100% - 20px)",
    height: "calc(100% - 20px)",
    left: "10px",
    top: "10px",
  },
});

function Services() {
  return (
    <Container sx={{ mt: 20, mb: 15 }}>
      <Heading
        sx={{
          mb: 5,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Our Comprehensive Home Safety Solutions
      </Heading>

      <StyledCarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={90}
        totalSlides={SERVICES.length}
        visibleSlides={3}
      >
        <Slider>
          {SERVICES.map((service, index) => (
            <Slide index={index} key={service.id}>
              <ServiceCard service={service} />
            </Slide>
          ))}
        </Slider>
      </StyledCarouselProvider>
    </Container>
  );
}

export default Services;

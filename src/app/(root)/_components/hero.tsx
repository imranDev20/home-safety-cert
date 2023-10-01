"use client";
import {
  CarouselProvider,
  Slider,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Box, Container } from "@mui/material";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

import CarImage from "@/images/hero/hero-image-1.jpg";
import MacImage from "@/images/hero/hero-image-2.jpeg";
import HeroInfos from "./hero-infos";
import HeroSlide from "./hero-slide";

import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "@/styles/Hero.module.css";

const heroSlides = [
  {
    id: 1,
    image: CarImage,
    subtitle: "Certified Safety for Your Property",
    titleFirstLine: "Ensuring Your Property's",
    titleSecondLine: "Safety and Compliance",
  },
  {
    id: 2,
    image: MacImage,
    subtitle: "Simplify Your Property Certification Process",
    titleFirstLine: "Taking the Headache Out of ",
    titleSecondLine: "Property Certifications",
  },
];

const Hero = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      disableGutters
      sx={{
        position: "relative",
        ".focusRing___1airF.carousel__slide-focus-ring": {
          outline: "none!important",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <CarouselProvider
          totalSlides={heroSlides.length}
          naturalSlideHeight={10}
          naturalSlideWidth={100}
          dragEnabled={false}
          isPlaying
          interval={5000}
        >
          <Slider moveThreshold={0.3} classNameAnimation={styles.fadeAnimation}>
            {heroSlides.map((item, index) => {
              return <HeroSlide key={item.id} index={index} item={item} />;
            })}
          </Slider>
          <Box
            sx={{
              position: "absolute",
              zIndex: 3,
              bottom: 50,
              left: "50%",
              "& .carousel__dot": {
                backgroundColor: "#B4B3B5",
                border: "none",
                width: 35,
                height: 5,
                mx: 1,
                mb: 3,
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 0.1,
                transition: "250ms all",
              },

              "& .carousel__dot--selected": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <DotGroup
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
              width: "100%",
              px: 5,
              "& button": {
                backgroundColor: "transparent",
                border: "none",
              },
            }}
          >
            <ButtonBack>
              <ArrowBackIosNewRounded
                sx={{
                  fontSize: 28,
                }}
              />
            </ButtonBack>
            <ButtonNext>
              <ArrowForwardIosRounded
                sx={{
                  fontSize: 28,
                }}
              />
            </ButtonNext>
          </Box>
        </CarouselProvider>
      </Box>

      <HeroInfos />
    </Container>
  );
};

export default Hero;

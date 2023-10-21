"use client";
import { Slide, CarouselContext } from "pure-react-carousel";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/Hero.module.css";
import { useContext, useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";

export default function HeroSlide({ index, item }: any) {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  const isActive = currentSlide === index;

  return (
    <Slide
      index={index}
      classNameHidden={styles.hide}
      classNameVisible={styles.show}
      style={{
        minHeight: "450px",
        height: "calc(100vh - 118px)",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Box
        sx={{
          height: "100%",
          ":before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0) 55%)",
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid item md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="h4"
                  color="text.secondary"
                  fontWeight={500}
                  className={isActive ? styles.slideInLeft : ""}
                  sx={{
                    fontSize: 18,
                  }}
                >
                  {item.subtitle}
                </Typography>

                <Typography
                  component="h4"
                  color="text.primary"
                  fontWeight={700}
                  className={
                    isActive
                      ? `${styles.slideInLeft} ${styles.delayed_500}`
                      : ""
                  }
                  sx={{
                    mt: 2,
                    fontSize: 42,
                  }}
                >
                  {item.titleFirstLine}
                </Typography>

                <Typography
                  component="h4"
                  color="text.primary"
                  fontWeight={700}
                  className={
                    isActive
                      ? `${styles.slideInLeft} ${styles.delayed_1000}`
                      : ""
                  }
                  sx={{
                    fontSize: 42,
                    mb: 2,
                  }}
                >
                  {item.titleSecondLine}
                </Typography>

                <Box sx={{ width: "100%", mt: 2.5 }}>
                  <Button
                    className={
                      isActive
                        ? `${styles.slideInUp} ${styles.delayed_1500}`
                        : ""
                    }
                    size="large"
                    variant="blue"
                    disableElevation
                    endIcon={<CgArrowLongRight />}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Image
          src={item.image}
          alt={item.title || "Hero Image"}
          loading="eager"
          fill
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </Box>
    </Slide>
  );
}

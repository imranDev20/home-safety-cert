import { Box, Typography, Grid } from "@mui/material";
import { OpenIcon } from "@/app/_components/common/icons";

import Image from "next/image";
import { INFO } from "@/shared/constants";

const HeroInfos = () => {
  const heroInfo = [
    {
      id: 1,
      Icon: OpenIcon,
      title: "Opening Hours",
      info: "Mon - Fri: 08:00 - 18:00",
    },
    {
      id: 2,
      Icon: OpenIcon,
      title: "Get in touch with us",
      info: INFO.email.text,
      isEmail: true,
    },
    {
      id: 3,
      Icon: OpenIcon,
      title: "24/7 Support",
      info: "020 3488 4929",
      isPhone: true,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        position: { xs: "static", lg: "absolute" },
        left: 0,
        bottom: 0,
        zIndex: 1,
        transform: { xs: "translateY(0%)", lg: "translateY(50%)" },
      }}
    >
      <Grid container>
        <Grid
          item
          lg={10}
          xs={12}
          display="flex"
          justifyContent="flex-end"
          sx={{
            backgroundColor: "primary.main",
            borderTopRightRadius: { xs: 0, lg: 100 },
            borderBottomRightRadius: { xs: 0, lg: 100 },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", lg: 1050 },
              width: "100%",
              py: 4,
              pr: 6,
            }}
          >
            <Grid container spacing={3}>
              {heroInfo.map((item) => (
                <Grid key={item.id} container item md={4}>
                  <Grid
                    item
                    xs={2}
                    sm={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <item.Icon />
                  </Grid>
                  <Grid item xs={10} sm={9}>
                    <Typography
                      fontWeight={600}
                      sx={{
                        color: "white",
                        fontSize: 16,
                        mb: 0.7,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      sx={{
                        color: "white",
                        fontSize: 16,
                        textDecoration: "none",
                        transition: "0.3s ease",

                        "&:hover": {
                          color: "secondary.main",
                        },
                      }}
                      href={`${
                        item.isEmail ? "mailto" : item.isPhone ? "tel" : ""
                      }:${item.info}`}
                      component={item.isEmail || item.isPhone ? "a" : "p"}
                    >
                      {item.info}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroInfos;

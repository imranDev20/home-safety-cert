import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    name: "Justin Timberlake",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work. I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 1",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 2",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 3",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
];

const Reviews = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  return (
    <Box sx={{ p: 7 }}>
      <Typography
        component="h3"
        variant="h4"
        textAlign="center"
        sx={{ color: "white", zIndex: 10, position: "relative", mb: 4 }}
      >
        Hear From Our Satisfied Customers
      </Typography>
    </Box>
  );
};

export default Reviews;

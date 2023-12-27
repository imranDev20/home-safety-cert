"use client";
import { INFO } from "@/shared/constants";
import { Login } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsClockFill,
} from "react-icons/bs";

const Topbar = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
        display: { xs: "none", lg: "block" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container sm={7}>
            <Link
              underline="none"
              component="a"
              href="tel:+1-2345-6789-101"
              sx={{
                pr: 3,
                py: 1.5,
                fontSize: 15,
                color: "white",
                display: "flex",
                alignItems: "center",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFillTelephoneFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              {INFO.phone.text}
            </Link>
            <Link
              underline="none"
              href="mailto:info@homesafetycert.co.uk"
              sx={{
                px: 3,
                py: 1.5,
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                transition: "200ms color ease",
                color: "white",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFillEnvelopeFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              {INFO.email.text}
            </Link>
            <Typography
              sx={{
                px: 3,
                py: 1.5,
                color: "white",
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                transition: "200ms color ease",
              }}
            >
              <BsClockFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              {INFO.workingHours.text}
            </Typography>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4} display="flex" justifyContent="flex-end">
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFacebook fontSize={14} />
            </Link>
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsInstagram fontSize={14} />
            </Link>
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsTwitter fontSize={14} />
            </Link>

            <Box
              sx={{
                pl: 1.5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                startIcon={
                  <Login
                    sx={{
                      color: "secondary.main",
                    }}
                  />
                }
                sx={{
                  color: "white",
                  fontSize: 12,
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Topbar;

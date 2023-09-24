"use client";
import { INFO, NAV_LINKS, OTHER_PAGES } from "@/shared/constants";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Stack,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main" }}>
      <Container maxWidth="lg" sx={{ color: "white", py: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={4}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 4 }}
            >
              About Company
            </Typography>
            <Typography
              paragraph
              sx={{ ...theme.typography.body2, color: "white" }}
            >
              Home Safety Cert provides essential safety certifications for
              homes and properties in London, UK. Our expert inspections ensure
              compliance with regulations, giving you the assurance that your
              property is safe and secure.
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Quick Link
            </Typography>

            {NAV_LINKS.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <MuiLink
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  component={Link}
                  href={
                    item === "Home"
                      ? "/"
                      : "/" + item.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  {item}
                </MuiLink>
              </Stack>
            ))}
          </Grid>

          <Grid item md={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Miscellaneous
            </Typography>
            {OTHER_PAGES.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <MuiLink
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  component={Link}
                  href={
                    item === "Home"
                      ? "/"
                      : "/" + item.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  {item}
                </MuiLink>
              </Stack>
            ))}
          </Grid>
          <Grid item md={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Contact Us
            </Typography>
            {Object.values(INFO)
              .slice(0, 3)
              .map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  alignItems="center"
                  my={2}
                  sx={{
                    ".MuiTypography-root:hover": {
                      color: item.type.includes("link")
                        ? "secondary.main"
                        : null,
                      transition: ".5s color ease",
                    },

                    "svg:has(+ a:hover)": {
                      color: item.type.includes("link")
                        ? "secondary.main"
                        : null,
                      transition: ".5s color ease",
                    },
                    a: {
                      color: "white",
                      transition: ".5s color ease",
                      textDecoration: "none",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    },

                    svg: {
                      mr: 2,
                      color: "secondary.main",
                    },
                  }}
                >
                  <item.icon />
                  {item.type.includes("email") ? (
                    <a href={`mailto:${item.text}`}>{item.text}</a>
                  ) : item.type.includes("phone") ? (
                    <a href={`tel:${item.text}`}>{item.text}</a>
                  ) : (
                    <Typography sx={{ color: "white" }}>{item.text}</Typography>
                  )}
                </Stack>
              ))}
          </Grid>
        </Grid>
        <Divider sx={{ border: "1px solid rgba(255,255,255,.07)", my: 3 }} />
        <Typography paragraph textAlign="center" sx={{ color: "white" }}>
          Copyright © {new Date().getFullYear()} Home Safety Cert. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

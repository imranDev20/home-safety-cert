"use client";
import { MouseEvent, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Grid,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { alpha } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { CgArrowLongRight } from "react-icons/cg";
import { ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

import { DrawerAppBarProps, HideOnScrollProps } from "@/types/props";
import { DRAWER_WIDTH, NAV_LINKS, SERVICES } from "@/shared/constants";
import { usePathname } from "next/navigation";

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const DrawerAppBar = ({ children }: DrawerAppBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Home Safety Cert
      </Typography>
      <Divider />
      <List>
        {NAV_LINKS.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton
              component={Link}
              href={item.route}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          component="nav"
          sx={{
            backgroundColor: "white",
            boxShadow: "0 0 20px 0 rgba(6, 22, 58, 0.11)",
          }}
          position="sticky"
        >
          <Container>
            <Toolbar
              disableGutters
              sx={{
                height: "70px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "primary.main",
                }}
              >
                Home Safety Cert
              </Typography>

              <Box sx={{ display: { xs: "none", lg: "flex" }, height: "100%" }}>
                {NAV_LINKS.map((item) => (
                  <Box
                    key={item.route}
                    sx={{
                      display: "flex",
                      alignItems: "stretch",
                      position: "relative",

                      "&:hover": {
                        ".MuiPaper-root": {
                          maxHeight: "1000px",
                          opacity: 1,
                          bottom: 0,
                          pointerEvents: "auto",
                        },
                        ".mui-1a1tg5j-MuiSvgIcon-root": {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Button
                      component={Link}
                      href={item.route}
                      endIcon={
                        item.hasChild ? (
                          <ExpandMore
                            sx={{
                              transition: "250ms all ease-in-out",
                            }}
                          />
                        ) : null
                      }
                      sx={{
                        fontWeight: 600,
                        mx: 1,
                        color:
                          pathname === item.route
                            ? "secondary.main"
                            : "text.primary",
                      }}
                    >
                      {item.label}
                    </Button>

                    {item.hasChild && (
                      <Paper
                        elevation={0}
                        sx={{
                          position: "absolute",
                          left: "50%",
                          bottom: -20,
                          p: 2,
                          width: "1000px",
                          transform: "translateX(-50%) translateY(100%)",
                          boxShadow: "0 0 20px 0 rgba(6, 22, 58, 0.11)",
                          maxHeight: 0,
                          overflow: "hidden",
                          transition: "0.3s all ease-in-out",
                          opacity: 0,
                          pointerEvents: "none",
                        }}
                      >
                        <Grid container spacing={1}>
                          {SERVICES.map((service) => (
                            <Grid key={service.id} item sm={4}>
                              <MuiLink
                                component={Link}
                                href={"/services/" + service.slug}
                                underline="none"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  cursor: "pointer",
                                  p: 1.5,
                                  borderRadius: 1,
                                  ":hover": {
                                    backgroundColor: "#F7F7F7",
                                    transition: "250ms ease",
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    backgroundColor: alpha(
                                      theme.palette.secondary.main,
                                      0.2
                                    ),
                                    p: 1.3,
                                    mr: 2,
                                    borderRadius: 1,
                                  }}
                                >
                                  <service.Icon sx={{ fontSize: 40 }} />
                                </Box>
                                <Box>
                                  <Typography
                                    component="h3"
                                    sx={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    {service.name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      color: "text.secondary",
                                    }}
                                  >
                                    {service.description.substring(0, 40)}
                                  </Typography>
                                </Box>
                              </MuiLink>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    )}
                  </Box>
                ))}
              </Box>

              <Button
                variant="blue"
                color="primary"
                href="/quote/"
                LinkComponent={Link}
                sx={{ ml: 2, display: { xs: "none", lg: "flex" } }}
                endIcon={<CgArrowLongRight />}
              >
                Request a Quote
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  display: { xs: "flex", lg: "none" },
                  color: "primary.main",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "lg" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default DrawerAppBar;

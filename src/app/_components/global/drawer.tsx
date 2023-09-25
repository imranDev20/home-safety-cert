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
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Menu,
  Grid,
  alpha,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CgArrowLongRight } from "react-icons/cg";
import { ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

import { DrawerAppBarProps, HideOnScrollProps } from "@/types/props";
import { DRAWER_WIDTH, NAV_LINKS, SERVICES } from "@/shared/constants";

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
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
            clipPath: "inset(0 0 -25px 0)",
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
                  <Button
                    key={item.route}
                    component={item.hasChild ? "div" : Link}
                    href={item.route}
                    onClick={item.hasChild ? handleMenuClick : undefined}
                    endIcon={item.hasChild ? <ExpandMore /> : null}
                    sx={{
                      fontWeight: 600,
                      mx: 1,
                      color: "text.primary",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 70,
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  MenuListProps={{
                    sx: {
                      p: 0,
                    },
                  }}
                >
                  <Grid
                    container
                    maxWidth={1000}
                    sx={{
                      p: 1,
                    }}
                    spacing={2}
                  >
                    {SERVICES.map((service) => (
                      <Grid item key={service.id} md={4}>
                        <MenuItem
                          onClick={handleMenuClose}
                          sx={{
                            borderRadius: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: alpha(
                                  theme.palette.secondary.main,
                                  0.3
                                ),

                                mr: 1,
                                display: "flex",
                                justifyContent: "center",
                                borderRadius: 1,
                                p: 1.5,
                              }}
                            >
                              <service.Icon
                                sx={{
                                  fontSize: 40,
                                }}
                              />
                            </Box>

                            <Box>
                              <Typography
                                component="h4"
                                sx={{ fontWeight: 500 }}
                              >
                                {service.name}
                              </Typography>

                              <Typography
                                sx={{
                                  whiteSpace: "normal",
                                  color: "text.secondary",
                                }}
                              >
                                {service.description.substring(0, 45) + "..."}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      </Grid>
                    ))}
                  </Grid>
                </Menu>
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

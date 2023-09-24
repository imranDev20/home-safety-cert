"use client";
import { useState } from "react";
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
} from "@mui/material";
import { CgArrowLongRight } from "react-icons/cg";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

import { DrawerAppBarProps, HideOnScrollProps } from "@/types/props";
import { DRAWER_WIDTH, NAV_LINKS } from "@/shared/constants";

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
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              href={item === "Home" ? "/" : "/" + item.toLowerCase()}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
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
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {NAV_LINKS.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    href={
                      item === "Home"
                        ? "/"
                        : "/" + item.toLowerCase().replaceAll(" ", "-")
                    }
                    sx={{
                      fontWeight: 600,
                      mx: 1,
                      color: location?.pathname.includes(item.toLowerCase())
                        ? "secondary.main"
                        : "black.main",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item}
                  </Button>
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
                <Menu />
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

"use client";
import { useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { ServiceCardProps } from "@/types/props";
import { CgArrowLongRight } from "react-icons/cg";

export default function ServiceCard({ service }: ServiceCardProps) {
  const [expand, setExpand] = useState<boolean>(false);
  const { id, name, description, Icon, startingPrice } = service;

  const theme = useTheme();

  console.log();

  return (
    <Card
      onMouseOver={() => setExpand(true)}
      onMouseOut={() => setExpand(false)}
      elevation={0}
      sx={{
        display: "block",
        textDecoration: "none",
        p: 4,
        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
        transition: ".4s ease all",
        position: "relative",
        cursor: "pointer",
        // "&:hover": {
        //   transform: "translateY(-10px)",
        // },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          px: 1,
          py: 2,
          fontSize: "20px",
          fontWeight: 600,
          color: "text.primary",
          zIndex: 20,
          "&::before": {
            position: "absolute",
            content: "''",
            width: "75px",
            height: "70px",
            top: 0,
            right: 0,
            backgroundColor: "secondary.main",
            zIndex: -1,
            borderRadius: "0 6px 0 70px",
          },

          "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "0 6px 0 90px",
            width: expand ? "100px" : 0,
            height: expand ? "95px" : 0,
            zIndex: -1,
            opacity: 0.5,
            backgroundColor: "#f7c355",
            transition: "all .4s",
          },
        }}
      >
        £{startingPrice}
      </Box>

      <Icon
        sx={{
          fontSize: 60,
          mb: 3,
        }}
      />

      <Typography component="h3" sx={{ fontWeight: 600, fontSize: 20 }}>
        {name}
      </Typography>
      <Typography
        component="p"
        sx={{ ...theme.typography.body2, mb: 3, mt: 2 }}
      >
        {description}
      </Typography>
      <Button
        LinkComponent={Link}
        variant="blue"
        endIcon={<CgArrowLongRight />}
        sx={{ py: 1 }}
        onClick={(e) => e.stopPropagation()}
        href="/quote"
      >
        Book Now
      </Button>
    </Card>
  );
}

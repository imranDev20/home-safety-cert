"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  SxProps,
  Typography,
} from "@mui/material";
import React, { ReactElement } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { SERVICES } from "@/shared/constants";

export type CenterProps = {
  children: ReactElement;
  sx?: SxProps;
};

const Center = ({ children, sx }: CenterProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", ...sx }}>
      {children}
    </Box>
  );
};

export default function PricingTable() {
  return (
    <>
      <Container>
        {SERVICES.map((item) => {
          const { name, Icon, detailedPackages, additionalPackage, id } = item;
          return (
            <Card
              key={id}
              elevation={0}
              sx={{
                mx: "auto",
                maxWidth: 700,
                mb: 10,
                borderRadius: 0,
                boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
              }}
            >
              <CardHeader
                sx={{ backgroundColor: "#f7f7f7" }}
                titleTypographyProps={{
                  sx: {
                    fontSize: 20,
                    textAlign: "center",
                    color: "text.primary",
                  },
                }}
                title={name}
              />
              <CardContent
                sx={{
                  p: 0,
                }}
              >
                <Center sx={{ my: 3 }}>
                  <Icon
                    sx={{
                      fontSize: 66,
                    }}
                  />
                </Center>

                <Box sx={{ mb: 2 }}>
                  {detailedPackages?.map((pack) => (
                    <Box
                      key={pack.name}
                      sx={{
                        color: "text.main",
                        py: 1,
                        borderBottom: "1px solid",
                        borderBottomColor: "#F1F1F1",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                        px: 3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{pack.name}</Typography>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                      >
                        - {pack.price ? `£${pack.price}` : "Quote Price"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {additionalPackage && additionalPackage.length > 0 && (
                  <Typography
                    sx={{
                      px: 3,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Additional Services
                  </Typography>
                )}

                <Box sx={{ mb: 4, mt: 2 }}>
                  {additionalPackage?.map((pack) => (
                    <Box
                      key={pack.name}
                      sx={{
                        color: "text.main",
                        py: 1,
                        borderBottom: "1px solid",
                        borderBottomColor: "#F1F1F1",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                        px: 3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{pack.name}</Typography>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                          textAlign: "right",
                        }}
                      >
                        - {pack.price ? `£${pack.price}` : "Quote Price"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Center>
                  <Button
                    endIcon={<CgArrowLongRight />}
                    variant="blue-outlined"
                  >
                    Get Started
                  </Button>
                </Center>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

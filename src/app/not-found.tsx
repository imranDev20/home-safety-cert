import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import NotFoundImage from "../images/not-found-image.svg";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 6,
        mb: 10,
      }}
    >
      <NotFoundImage />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button LinkComponent={Link} sx={{ mt: 3 }} variant="blue" href="/">
          Back to Home Page
        </Button>
      </Box>
    </Container>
  );
}

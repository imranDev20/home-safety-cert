import { Jost } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    blue: true;
    yellow: true;
    "blue-outlined": true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    border: Palette["primary"];
  }

  interface PaletteOptions {
    border?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: [
      jost.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.8,
      letterSpacing: ".3px",
      color: "#666",
    },
  },
  palette: {
    primary: {
      light: "#5d9cec",
      main: "#004975",
      dark: "#002048",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffb14e",
      main: "#f7c355",
      dark: "#bf8c2a",
      contrastText: "#fff",
    },
    error: {
      light: "#ff6659",
      main: "#f44336",
      dark: "#b22a1d",
      contrastText: "#fff",
    },
    success: {
      light: "#5af158",
      main: "#4caf50",
      dark: "#357a38",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffe74c",
      main: "#ffca28",
      dark: "#b2951d",
      contrastText: "#000",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    grey: {
      "300": grey[300],
      "400": grey[400],
    },
    text: {
      primary: "#253238",
      secondary: "#666",
    },
    background: {
      default: "white",
      paper: "#fff",
    },
    divider: "#ddd",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
      variants: [
        {
          props: { variant: "blue" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "primary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }),
        },
        {
          props: { variant: "yellow" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "secondary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "primary.main",
              },
            }),
        },
        {
          props: { variant: "blue-outlined" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "white",
              fontWeight: 600,
              color: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              "&:hover": {
                color: "white",
                bgcolor: "primary.main",
              },
            }),
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            backgroundColor: "white",
            "&:hover": {
              borderColor: "primary.main",
            },
          }),
        input: ({ theme }) =>
          theme.unstable_sx({
            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
    },
  },
});

export default theme;

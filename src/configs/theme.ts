import { Jost } from "next/font/google";
import { createTheme } from "@mui/material/styles";

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

// declare module "@mui/material/styles" {
//   interface PaletteColor {
//     primary?: string;
//   }

//   interface SimplePaletteColorOptions {
//     primary?: string;
//   }
// }

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
      color: "#888888",
    },
  },
  palette: {
    primary: {
      light: "#ffa726",
      main: "#004975",
      dark: "#ef6c00",
      contrastText: "rgba(255,255,255, 1)",
    },
    secondary: {
      light: "#ffa726",
      main: "#F7C355",
      dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(255,255,255, 1)",
    },

    border: {
      main: "#F1F1F1",
    },
    text: {
      primary: "#888888",
    },
    background: {
      default: "#F7F7F7",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    // Name of the component
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

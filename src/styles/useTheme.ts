import { createTheme } from "@mui/material/styles"

export default function useTheme() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",  
      h1: {
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "400",
        fontSize: "64px",
        letterSpacing: "5%",
      },
      h2: {
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "400",
        fontSize: "32px",
        letterSpacing: "25%",
      },
     
      body1: {
        fontFamily: "Roboto Slab, serif",
        fontWeight: "400",
        fontSize: "18px",
        letterSpacing: "0%",
      },
      body2: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "400",
        fontSize: "20px",
        letterSpacing: "0%",
      },
    },

    palette: {
      primary: { main: "#20170E" },
      secondary: { main: "#2C2116" },
      warning: { main: "#D77F33" },
      error: { main: "#F34E26" },
      success: { main: "#938456" },
      info: { main: "#F3DFA0" },
      background: {
        default: "#121212",
        paper: "#EAEAEA",
      },
      text: {
        primary: "#EAEAEA",
        secondary: "#000000",
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#121212",
          },
        },
      },
    },
  })

  return theme
}

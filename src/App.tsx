import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import useTheme from "./styles/useTheme";


export default function App() {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Home />

    </ThemeProvider>
  )
}

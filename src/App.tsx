import AppRouter from "./components/router/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

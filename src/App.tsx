import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;

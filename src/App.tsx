import AppRouter from "./components/router/AppRouter";
import { ThemeProvider } from "./themes/ThemeContext";
import AntdProvider from "./themes/AntdProvider";

function App() {
  return (
    <ThemeProvider>
      <AntdProvider>
        <AppRouter />
      </AntdProvider>
    </ThemeProvider>
  );
}

export default App;

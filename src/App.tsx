import { ConfigProvider } from "antd";
import { lightTheme } from "./themes";
import AppRouter from "./components/router/AppRouter";

function App() {
  return (
    <ConfigProvider theme={lightTheme}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;

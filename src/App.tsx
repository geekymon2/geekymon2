import { ConfigProvider } from "antd";
import AppLayout from "./components/layout/AppLayout";
import { lightTheme } from "./themes";

function App() {
  return (
    <ConfigProvider theme={lightTheme}>
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;

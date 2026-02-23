import { ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";
import { useTheme } from "./ThemeContext";
import darkTheme from "./dark";
import lightTheme from "./light";
import { DARK } from "../constants/themes";

export default function AntdProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme === DARK ? darkTheme : lightTheme}>
      {children}
    </ConfigProvider>
  );
}

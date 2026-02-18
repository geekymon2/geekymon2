import type { ThemeConfig } from "antd";
import { theme } from "antd";

const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 6,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    colorBgContainer: "#ffffff",
  },
  components: {
    Button: {
      controlHeight: 40,
      borderRadius: 8,
    },
    Layout: {
      headerBg: "#ffffff",
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};

export default lightTheme;

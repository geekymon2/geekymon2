import { Button, Flex, Layout, Menu } from "antd";
import { headerStyle, titleStyle, menuStyle } from "./headerStyles";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "../../themes/ThemeContext";
import { DARK } from "../../constants/themes";

export default function Header() {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "1",
      label: "Home",
      onClick: () => navigate(ROUTES.HOME),
    },
    {
      key: "2",
      label: "About",
      onClick: () => navigate(ROUTES.ABOUT),
    },
    {
      key: "3",
      label: "Skills",
      onClick: () => navigate(ROUTES.SKILLS),
    },
    {
      key: "4",
      label: "Projects",
      onClick: () => navigate(ROUTES.PROJECTS),
    },
    {
      key: "5",
      label: "Contact",
      onClick: () => navigate(ROUTES.CONTACT),
    },
  ];

  const { theme, toggleTheme } = useTheme();
  return (
    <Layout.Header style={headerStyle}>
      <Flex
        justify="space-between"
        gap="middle"
        align="center"
        style={{ width: "100%" }}
      >
        <Flex>
          <Title level={3} style={titleStyle}>
            GeekyMon2
          </Title>
        </Flex>
        <Flex align="center" gap="large">
          <Menu mode="horizontal" items={menuItems} style={menuStyle} />
          <Button
            size="large"
            onClick={toggleTheme}
            icon={theme === DARK ? <SunOutlined /> : <MoonOutlined />}
          ></Button>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}

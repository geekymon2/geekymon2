import { Layout, Menu } from "antd";
import { headerStyle, titleStyle, menuStyle } from "./headerStyles";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

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
      label: "Contact",
      onClick: () => navigate(ROUTES.CONTACT),
    },
    {
      key: "4",
      label: "Settings",
      onClick: () => (window.location.href = "#settings"),
    },
  ];

  return (
    <Layout.Header style={headerStyle}>
      <Title level={3} style={titleStyle}>
        GeekyMon2
      </Title>
      <Menu mode="horizontal" items={menuItems} style={menuStyle} />
    </Layout.Header>
  );
}

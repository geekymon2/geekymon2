import { Layout, Menu } from "antd";
import { headerStyle, titleStyle, menuStyle } from "./headerStyles";
import Title from "antd/es/typography/Title";

export default function Header() {
  const menuItems = [
    {
      key: "1",
      label: "Home",
      onClick: () => (window.location.href = "/"),
    },
    {
      key: "2",
      label: "About",
      onClick: () => (window.location.href = "about"),
    },
    {
      key: "3",
      label: "Contact",
      onClick: () => (window.location.href = "/contact"),
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

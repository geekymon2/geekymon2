import { Layout } from "antd";

import { layoutStyle, contentStyle, innerLayoutStyle } from "./appLayoutStyles";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={layoutStyle}>
      <Header />
      <Layout style={innerLayoutStyle}>
        <Layout.Content style={contentStyle}>{children}</Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

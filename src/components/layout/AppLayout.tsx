import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import { layoutStyle, contentStyle, innerLayoutStyle } from "./appLayoutStyles";
import HeroSection from "../hero/HeroSection";

export default function AppLayout() {
  return (
    <Layout style={layoutStyle}>
      <Header />
      <Layout style={innerLayoutStyle}>
        <Layout.Content style={contentStyle}>
          <HeroSection />
        </Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

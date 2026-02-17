import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout>
        <Layout.Content
          style={{
            padding: "24px",
            margin: 0,
            minHeight: 280,
          }}
        ></Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

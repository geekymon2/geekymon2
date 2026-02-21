import { Row, Col, Typography, Image, Layout } from "antd";
import {
  heroImage,
  heroParagraphStyle,
  heroSectionStyle,
  heroTitleStyle,
} from "./heroSectionStyles";
import Title from "antd/es/typography/Title";

const { Paragraph } = Typography;

const HeroSection = () => {
  return (
    <Layout style={heroSectionStyle}>
      <Row gutter={[32, 32]} align="top">
        <Col xs={24} md={12}>
          <Title level={3} style={heroTitleStyle}>
            Hi, I am Geeky Mon2 👋
          </Title>
          <Paragraph style={heroParagraphStyle}>
            I design and deliver modern software platforms powered by cloud and
            open source.
          </Paragraph>
          <Paragraph style={heroParagraphStyle}>
            With 20+ years of engineering experience, I specialise in full-stack
            and cloud-native development across React, .NET, Java, and
            microservices architectures.
          </Paragraph>
          <Paragraph style={heroParagraphStyle}>
            I build scalable, secure, and high-performance solutions using
            Azure, Kubernetes, Docker, and modern open-source technologies.
          </Paragraph>
          <Paragraph style={heroParagraphStyle}>
            Focused on platform engineering, system design, and modern
            application development.
          </Paragraph>
          <Paragraph style={heroParagraphStyle}>
            👋 Introduction 💻 Software ⚛️ React ☁️ Cloud 🚀 Performance /
            Deployment 🧠 Architecture 🔧 Engineering 📦 Platform 🌐 Web • .NET
            🧩 • Java 🧱 Microservices 🐳 Docker ☸️ Kubernetes Frontend 🎨
            Backend ⚙️ Full-Stack 🌐 Web 🏗️ Cloud-Native ☁️ Azure 🚀 Scalable
            Solutions 🔒 Secure Software 🧠 System Design 🧩 Platform
            Engineering 💡 Modern Development
          </Paragraph>
        </Col>

        {/* Right Column: Image */}
        <Col xs={24} md={12}>
          <Image
            style={heroImage}
            src="/hero.svg"
            alt="Hero Image"
            width="100%"
            preview={false}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default HeroSection;

import { Row, Col, Typography, Button, Image, Layout } from "antd";
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
          <Title style={heroTitleStyle}>Hi, I am GeekyMon2</Title>
          <Paragraph style={heroParagraphStyle}>
            I am interested in a wide array of tools and technologies and like
            to keep up to the latest and greatest. I have development expertise
            with .net, java, spring, spring boot, reactjs, flutter. I love using
            open source and linux.
          </Paragraph>
          <Button type="primary" size="large">
            My Skills
          </Button>
        </Col>

        {/* Right Column: Image */}
        <Col xs={24} md={12}>
          <Image
            style={heroImage}
            src="/hero-image.jpg"
            alt="Hero Section Image"
            width="100%"
            preview={false}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default HeroSection;

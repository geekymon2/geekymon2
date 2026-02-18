import { Layout, Row, Col } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Layout.Footer className="footer">
      <Row gutter={16} className="footer-top-row">
        <Col xs={24} sm={12}>
          <p className="footer-copyright">
            © {currentYear} geekymon2. All rights reserved.
          </p>
        </Col>
      </Row>
      <Row className="footer-social-row">
        <Col span={24}>
          <span className="social-icon">
            <GithubOutlined className="social-icon-inner" />
          </span>
          <span className="social-icon">
            <TwitterOutlined className="social-icon-inner" />
          </span>
          <span className="social-icon-last">
            <LinkedinOutlined className="social-icon-inner" />
          </span>
        </Col>
      </Row>
    </Layout.Footer>
  );
}

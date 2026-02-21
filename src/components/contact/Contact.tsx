import { useState } from "react";
import { Form, Input, Button, Card, Row, Col, message, Layout } from "antd";

const { TextArea } = Input;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Values:", values);
      message.success("Message sent successfully!");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card title="Contact Us">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Enter your email address" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: "Please enter the subject" },
                ]}
              >
                <Input placeholder="Enter subject" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea rows={5} placeholder="Write your message..." />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;

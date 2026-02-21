import { useState } from "react";
import { Form, Input, Button, Card, Row, Col, Layout } from "antd";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = () => {

    emailjs
      .send(
        serviceId,
        templateId,
        form.getFieldsValue(),
        publicKey,
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Failed:", error);
          alert("Failed to Send Message, please try again.");
        },
      );
  };

  const onFinish = () => {
    setLoading(true);
    sendEmail();
    setLoading(false);
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

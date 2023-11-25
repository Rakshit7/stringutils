import { Button, Form, Input, Row, Col } from "antd";
import { useState } from "react";
import Header from "./Header";

const LandingPage = () => {
  const [form] = Form.useForm();
  const [userName, setUserName] = useState("");
  const onFinishHandle = () => {
    window.localStorage.setItem("username", userName);
    window.location.replace("/");
  };
  return (
    <>
      <Form form={form} onFinish={onFinishHandle}>
        <Row justify={"center"} style={{ marginBottom: "16px" }}>
          <Col xs={24} md={12} lg={12}>
            <Form.Item
              rules={[{ required: true, message: "This field is required!" }]}
            >
              <Input
                required
                placeholder="Please enter your name!"
                value={userName}
                onChange={(e: any) => setUserName(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LandingPage;

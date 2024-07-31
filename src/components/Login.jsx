import { Button, Card, Form, Input } from "antd";

export default function Login() {
  return (
    <Form layout="vertical">
      <Card size="default" className="w-[500px] shadow-lg">
        <h1 className="text-2xl font-bold text-blue-400 mb-5">LOGIN</h1>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <div className="flex gap-x-2 justify-end">
          <Form.Item>
            <Button type="text">Reset</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="button">Login</Button>
          </Form.Item>
        </div>
      </Card>
    </Form>
  );
}

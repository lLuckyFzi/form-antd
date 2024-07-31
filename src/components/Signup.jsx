import { Button, Card, Checkbox, Form, Input, Select } from "antd";
import React from "react";

const checkboxOptions = [
  { label: "Facebook", value: "Facebook" },
  { label: "Google", value: "Google" },
  { label: "Instagram", value: "Instagram" },
];
const selectOptions = [
  {
    value: "fe",
    label: "Frontend",
  },
  {
    value: "be",
    label: "Backend",
  },
  {
    value: "dg",
    label: "Design UI/UX",
  },
];

function Signup() {
  const [form] = Form.useForm();

  return (
    <Card className="shadow-md">
      <div className="mb-5">
        <p className="font-bold text-2xl">Welcome on board!</p>
        <p>We need a little bit of data from you to get you started!</p>
      </div>
      <Form
        form={form}
        initialValues={{}}
        layout="vertical"
        onFinish={(v) => {
          // Can use this for data entry with Form Data
          //   const fd = new FormData(v)
          //   const data = Object.fromEntries(fd.entries())
          //   console.log(data);
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", message: "Invalid Email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <div className="flex gap-x-4">
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm-password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const errorUnmatchedPassword = new Error(
                    "The new password you entered doesnt matched!"
                  );

                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(errorUnmatchedPassword);
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </div>
        <hr className="mb-4" />
        <div className="flex gap-x-4">
          <Form.Item label="First Name" name="first-name">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item label="Last Name" name="last-name">
            <Input placeholder="Last Name" />
          </Form.Item>
        </div>
        <Form.Item label="What best describes your role?" name="role">
          <Select placeholder="Role" options={selectOptions} />
        </Form.Item>
        <Form.Item label="How did you find us?" name="promotion">
          <Checkbox.Group options={checkboxOptions} />
        </Form.Item>
        <hr className="mb-4" />
        <Form.Item name="term-conditions" valuePropName="checked">
          <Checkbox>I AGREE TO THE TERM AND CONDITIONS</Checkbox>
        </Form.Item>
        <div className="flex gap-x-2 justify-end">
          <Form.Item>
            <Button type="text" htmlType="reset">
              Reset
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
}

export default Signup;

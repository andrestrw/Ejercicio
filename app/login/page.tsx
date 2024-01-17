"use client";

import { Button, Field, PasswordField } from "@/components";
import Form from "antd/es/form";
import { useTransition } from "react";
import { login } from "../actions";

type SubmitData = {
  username: string;
  password: string;
};

const Login = () => {
  const [pending, start] = useTransition();

  const onFinish = async (data: SubmitData) => {
    start(async () => {
      await login(data);
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Form onFinish={onFinish}>
        <div className="w-56 flex justify-center items-center flex-col">
          <h3 className="text-3xl h-10 text-white">Login</h3>
          <Form.Item name="username">
            <Field />
          </Form.Item>
          <Form.Item name="password">
            <PasswordField />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={pending}>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;

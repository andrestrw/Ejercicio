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
      <Form onFinish={onFinish} className="mx-auto sm:w-96   w-11/12">
        <div className="sm:w-96 w-11/12 flex justify-center items-center flex-col  border-orange-50  rounded-md border-4 sm:px-10 px-8 py-14 mx-auto ">
          <h3 className="text-3xl h-10 text-white mb-8  ">Welcome</h3>
          <Form.Item name="username">
            <Field />
          </Form.Item>
          <Form.Item name="password">
            <PasswordField />
          </Form.Item>
          <Form.Item className="mt-2">
            <Button type="primary" htmlType="submit" loading={pending}>
              Log in
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;

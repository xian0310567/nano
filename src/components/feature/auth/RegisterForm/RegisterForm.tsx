import React from "react";

import { Button, Form, Input } from "antd";

import useRegistration from "@/hooks/feature/auth/useRegistration";

import styled from "./lib/registerForm.module.css";

const LoginForm = () => {
  const { registerUser } = useRegistration();
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className={styled.container}
      onFinish={(value) => {
        registerUser(value);
      }}
    >
      <Form.Item
        label="ID"
        name="userId"
        rules={[{ required: true, message: "ID를 입력해주세요." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "이름을 입력해주세요." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="PW"
        name="password"
        rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: false, message: "이메일을 입력해주세요." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

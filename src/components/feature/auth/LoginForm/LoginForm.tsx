import React from "react";

import { Button, Form, Input } from "antd";

import styled from "./lib/loginForm.module.css";

const LoginForm = () => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className={styled.container}
    >
      <Form.Item
        label="ID"
        name="ID"
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
        name="Email"
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

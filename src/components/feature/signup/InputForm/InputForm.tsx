import { Container, Item, Submit } from "./InputForm.styled";
import { Form, Input, Select } from "antd";

import useCreateUser, { SignUpProps } from "@/hooks/feature/auth/useCreateUser";

const InputForm = () => {
  const { createUser } = useCreateUser();

  const finish = (values: SignUpProps) => {
    createUser(values);
  };

  return (
    <Container>
      <Form name="회원가입" onFinish={finish}>
        <Item
          name="userName"
          rules={[{ required: true, message: "이름이 입력되지 않았습니다" }]}
        >
          <Input size="large" placeholder="이름" />
        </Item>
        <Item
          name="email"
          rules={[
            { type: "email", message: "알맞은 이메일 형식을 입력해주세요." },
            { required: true, message: "이메일이 입력되지 않았습니다." },
          ]}
        >
          <Input size="large" placeholder="이메일" />
        </Item>
        <Item
          name="passWord"
          dependencies={["passWord"]}
          rules={[
            { required: true, message: "패스워드가 입력되지 않았습니다" },
            () => ({
              validator(_, value) {
                if (!value || value.length >= 6) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("패스워드는 6자 이상이어야 합니다.")
                );
              },
            }),
          ]}
        >
          <Input size="large" placeholder="패스워드" type="password" />
        </Item>
        <Item
          name="validPassWord"
          style={{ marginBottom: 24 }}
          rules={[
            { required: true, message: "패스워드가 입력되지 않았습니다." },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("passWord") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("패스워드가 다릅니다."));
              },
            }),
          ]}
        >
          <Input size="large" placeholder="패스워드 확인" type="password" />
        </Item>
        <Item name="authType" initialValue="user">
          <Select
            size="large"
            options={[
              { value: "user", label: "일반" },
              { value: "admin", label: "관리자" },
            ]}
          />
        </Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues: SignUpProps, currentValues: SignUpProps) =>
            prevValues.authType !== currentValues.authType
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("authType") === "admin" && (
              <Item name="authCode" rules={[{ required: true }]}>
                <Input size="large" placeholder="관리자 코드" type="password" />
              </Item>
            )
          }
        </Form.Item>
        <Item>
          <Submit size="large" htmlType="submit">
            회원가입
          </Submit>
        </Item>
      </Form>
    </Container>
  );
};

export default InputForm;

//   AuthType: "Admin" | "User";
//   AuthCode?: string;

import styled from "styled-components";

import { Form, Button } from "antd";

export const Container = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;

  width: 300px;

  & > button {
    margin-top: 30px;
  }
`;

export const Submit = styled(Button)`
  width: 100%;
`;

export const Item = styled(Form.Item)`
  color: #fff;

  margin-bottom: 12px;
`;

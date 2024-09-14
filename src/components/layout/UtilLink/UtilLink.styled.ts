import styled from "styled-components";

import { Button as AtomicButton } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  width: 100%;

  position: absolute;
  top: 80%;
`;

export const Button = styled(AtomicButton)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #f3f3f3;
`;

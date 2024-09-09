import { Space } from "./RedirectDescription.styled";
import Link from "next/link";

const RedirectDescription = () => {
  return (
    <Space>
      <Link href="/signup">회원가입</Link>
    </Space>
  );
};

export default RedirectDescription;

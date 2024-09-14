import Link from "next/link";
import Image from "next/image";
import { Container, Button } from "./UtilLink.styled";

import geditor from "@/assets/geditor.ico";
import taobao from "@/assets/taobao.ico";
import itemscout from "@/assets/itemscout.ico";

const UtilLink = () => {
  return (
    <Container>
      <Button
        icon={
          <Image src={geditor} width={16} height={16} alt="제디터 바로가기" />
        }
      >
        <Link href="https://brand.geditor.co.kr/">Geditor</Link>
      </Button>
      <Button
        icon={
          <Image src={taobao} width={16} height={16} alt="타오바오 바로가기" />
        }
      >
        <Link href="https://world.taobao.com/">Taobao</Link>
      </Button>
      <Button
        icon={
          <Image
            src={itemscout}
            width={16}
            height={16}
            alt="아이템스카우트 바로가기"
          />
        }
      >
        <Link href="https://itemscout.io/">ItemScout</Link>
      </Button>
    </Container>
  );
};

export default UtilLink;

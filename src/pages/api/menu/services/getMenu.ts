import type { NextApiRequest, NextApiResponse } from "next";

import getUser from "@/pages/api/common/getUser";

export type Menu = {
  key: number | string;
  label: string;
  link?: string;
  children?: Menu[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[] | string>
) {
  const { access_token, refresh_token } = req.cookies;

  const user = await getUser({ access_token, refresh_token });

  if (!user) return res.status(401).send("Authentication failed");

  const role = user.user_metadata.role;

  // master
  if (role === "admin") {
    const menu: Menu[] = [
      {
        key: 1,
        label: "상품 목록",
        children: [
          { key: "1-1", label: "업로드 완료", link: "/product/upload" },
          {
            key: "1-2",
            label: "업로드 대기",
            link: "/product/pending-product",
          },
        ],
      },
      {
        key: 2,
        label: "소싱",
        children: [
          { key: 3, label: "검수 대기", link: "/user-items/standby" },
          { key: 4, label: "검수 완료", link: "/user-items/complate" },
          { key: 5, label: "업로드 거절", link: "/user-items/reject" },
        ],
      },
    ];

    return res.status(200).send(menu);
  }

  // user
  if (role === "user") {
    const menu: Menu[] = [
      {
        key: 1,
        label: "상품 목록",
        children: [
          { key: "1-1", label: "업로드 완료", link: "/product/upload" },
        ],
      },
    ];

    return res.status(200).send(menu);
  }

  // if (!data) return res.status(204).send([]);
}

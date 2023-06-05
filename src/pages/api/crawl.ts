// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cheerio from "cheerio";

type Data = {
  price: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  if (!req.query.url) return res.status(400).send("not found param: url");

  axios.get(req.query.url + "", { maxRedirects: 1 }).then((response) => {
    const $ = cheerio.load(response.data);

    $("meta").each((_, el) => {
      const key = $(el).attr("property")?.split(":")[1];
      if (key == "title") {
        const title = $(el).attr("content");
        const price = title?.slice(0, title.indexOf("₩"));
        if (!price) {
          res.status(500).send("값을 찾을 수 없습니다.");
        } else {
          res.status(200).send({
            price: parseInt(price),
          });
        }
      }
    });
  });
}

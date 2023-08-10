import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

export default (_req: NextApiRequest, res: NextApiResponse<Data>): void => {
  const filePath = path.join(process.cwd(), "docs/resume.pdf");
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": stat.size,
    "Content-Disposition": "inline; filename=resume.pdf",
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};

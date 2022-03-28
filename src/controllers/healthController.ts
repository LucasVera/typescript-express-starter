import { Request, Response } from "express";

export default {
  healthCheck: (_req: Request, res: Response) => res.send("ok"),
};

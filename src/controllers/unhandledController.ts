import { Request, Response } from "express";

export default {
  unhandledRequest: (_req: Request, res: Response) =>
    res.status(404).send("Unknown route"),
};

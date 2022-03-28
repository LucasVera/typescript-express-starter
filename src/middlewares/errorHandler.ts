import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) return next(error);

  // (TODO): Handle a more standard json response for errors
  res.status(500).send(`${error.name} - ${error.message}`);
};

export default errorHandler;

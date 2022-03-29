import { inspect } from "util";

export class BaseError extends Error {
  errorType: string;
  statusCode: number;
  data?: object | string;

  maskStackTrace = () => this.stack = '';

  toString = () => inspect(this, false, 6);
}

export class ValidationError extends BaseError {
  errorType = 'ValidationError';

  constructor(message: string, statusCode: number, data?: object | string) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data || {};
    Error.captureStackTrace(this, this.constructor);
  }
}

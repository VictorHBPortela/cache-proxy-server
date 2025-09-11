/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Request, Response } from "express";
import { errorResponse } from "../utils/responses.js";

export function errorHandler(err: any, req: Request, res: Response): void {
  console.error(err);
  errorResponse(res, 500, err);
}

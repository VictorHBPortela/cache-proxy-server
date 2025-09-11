import { Cache } from "../utils/cache.js";
import type { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/responses.js";
import axios from "axios";

const cache = new Cache();
await cache.connect();

export function proxyMiddleWare(origin: string) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | undefined> => {
    try {
      const target = new URL(req.url, origin).toString();
      const key = `${req.url}:${origin}`;
      const cachedData = await cache.get(key);

      if (cachedData) {
        res.set("X-Cache", "HIT");
        return successResponse(res, JSON.parse(cachedData));
      }

      const response = await axios.get(target, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("response", response);
      const { data } = response;

      if (data) {
        cache.set(key, JSON.stringify(data), 3600);
        res.set("X-Cache", "MISS");
        return successResponse(res, data);
      }
    } catch (err) {
      next(err);
    }
  };
}

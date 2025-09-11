import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import { origin, port } from "./utils/commandParser.js";
import { proxyMiddleWare } from "./middlewares/proxyMiddleware.js";

const app = express();

app.use(express.json());
app.use("/", proxyMiddleWare(origin));
app.use(errorHandler);

app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err) => {
    throw new Error(`Failed to start server: ${err.message}`);
  });

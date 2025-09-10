import express from "express";
import originRouter from "./routes/origin.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { origin, port } from "./utils/commandParser.js";

const PORT = port || 3000;
const ORIGIN = origin;
const app = express();

app.use(express.json());
app.use("/origin", originRouter);
app.use(errorHandler);

app
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    throw new Error(`Failed to start server: ${err.message}`);
  });

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Cache } from "./cache.js";

const cache = new Cache();

const argv = yargs(hideBin(process.argv))
  .option("port", {
    alias: "p",
    type: "number",
    description: "Specify the port number",
    default: 3000,
  })
  .option("origin", {
    alias: "o",
    type: "string",
    description: "Specify the origin",
    default: "",
  })
  .command(
    "clear-cache",
    "Clear the cache",
    {
      key: { type: "string", requiresArg: false },
    },
    () => {
      cache.clearCache();
    }
  )
  .parseSync();

const { port, origin } = argv;
export { port, origin };

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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
    default: "development",
  })
  .parseSync();

const { port, origin } = argv;
export { port, origin };

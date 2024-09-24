import { FileHandler } from "./utils/file-handler";
import { parseInput } from "./utils/input-parser";

if (process.argv.length < 4) {
  console.error("Usage: yarn start <inputFilePath> <outputFilePath>");
  process.exit(1);
}

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

try {
  const input = FileHandler.readFile(inputFilePath);
  const controller = parseInput(input);
  controller.simulate();
  const output = controller.writeOutput();
  FileHandler.writeFile(outputFilePath, output);
  console.log(`Simulation ended. Results wrote in ${outputFilePath}`);
} catch (error) {
  console.error("The following error has occured :", error);
  process.exit(1);
}

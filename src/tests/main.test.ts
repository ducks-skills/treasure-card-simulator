import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

describe("main.ts", () => {
  const inputFilePath = path.resolve(__dirname, "input.txt");
  const outputFilePath = path.resolve(__dirname, "output.txt");
  const expectedOutputFilePath = path.resolve(__dirname, "expectedOutput.txt");

  beforeEach(() => {
    const inputContent = `C - 3 - 4
M - 1 - 0
M - 2 - 1
T - 0 - 3 - 2
T - 1 - 3 - 3
A - Lara - 1 - 1 - S - AADADAGGA`;
    fs.writeFileSync(inputFilePath, inputContent, "utf-8");

    const expectedOutputContent = `C - 3 - 4
M - 1 - 0
M - 2 - 1
T - 1 - 3 - 2
A - Lara - 0 - 3 - S - 3
`;
    fs.writeFileSync(expectedOutputFilePath, expectedOutputContent, "utf-8");
  });

  afterEach(() => {
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
    if (fs.existsSync(inputFilePath)) {
      fs.unlinkSync(inputFilePath);
    }
    if (fs.existsSync(expectedOutputFilePath)) {
      fs.unlinkSync(expectedOutputFilePath);
    }
  });

  test("should read input file, simulate movements, and write output file", () => {
    execSync(
      `ts-node ${path.resolve(
        __dirname,
        "../main.ts"
      )} ${inputFilePath} ${outputFilePath}`
    );

    const actualOutput = fs.readFileSync(outputFilePath, "utf-8");

    const expectedOutput = fs.readFileSync(expectedOutputFilePath, "utf-8");
    expect(actualOutput).toBe(expectedOutput);
  });

  test("should handle missing input file argument", () => {
    try {
      execSync(`ts-node ${path.resolve(__dirname, "../main.ts")}`);
    } catch (error) {
      expect((error as Error).message).toContain(
        "Usage: yarn start <inputFilePath> <outputFilePath>"
      );
    }
  });

  test("should handle missing output file argument", () => {
    try {
      execSync(
        `ts-node ${path.resolve(__dirname, "../main.ts")} ${inputFilePath}`
      );
    } catch (error) {
      expect((error as Error).message).toContain(
        "Usage: yarn start <inputFilePath> <outputFilePath>"
      );
    }
  });

  test("should handle non-existent input file", () => {
    const nonExistentInputFilePath = path.resolve(
      __dirname,
      "nonExistentInput.txt"
    );
    try {
      execSync(
        `ts-node ${path.resolve(
          __dirname,
          "../main.ts"
        )} ${nonExistentInputFilePath} ${outputFilePath}`
      );
    } catch (error) {
      expect((error as Error).message).toContain(
        "The following error has occured :"
      );
    }
  });
});

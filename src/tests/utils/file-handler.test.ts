import path from "path";
import { FileHandler } from "../../utils/file-handler";
import { readFileSync, unlinkSync, writeFileSync } from "fs";

describe("FileHandler", () => {
  const testFilePath = path.resolve(__dirname, "testFile.txt");
  const testContent = "This is a test content.";

  beforeEach(() => {
    writeFileSync(testFilePath, testContent, "utf-8");
  });

  afterEach(() => {
    unlinkSync(testFilePath);
  });

  test("should read file content correctly", () => {
    const content = FileHandler.readFile(testFilePath);
    expect(content).toBe(testContent);
  });

  test("should write file content correctly", () => {
    const newContent = "This is a new test content.";
    FileHandler.writeFile(testFilePath, newContent);
    const content = readFileSync(testFilePath, "utf-8");
    expect(content).toBe(newContent);
  });
});

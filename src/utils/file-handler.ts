import { readFileSync, writeFileSync } from "fs";
import path from "path";

export class FileHandler {
  static readFile(filePath: string): string {
    const absolutePath = path.resolve(filePath);
    return readFileSync(absolutePath, "utf-8");
  }

  static writeFile(filePath: string, content: string): void {
    const absolutePath = path.resolve(filePath);
    writeFileSync(absolutePath, content, "utf-8");
  }
}

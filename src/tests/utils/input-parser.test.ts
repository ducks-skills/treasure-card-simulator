import { parseInput } from "../../utils/input-parser";

describe("InputParser", () => {
  test("should parse input correctly", () => {
    const input = `C - 3 - 4
M - 1 - 1
M - 2 - 2
T - 0 - 3 - 2
T - 1 - 3 - 1
A - Lara - 1 - 1 - S - AADADA
      `;
    const controller = parseInput(input);
    expect(controller["map"].width).toBe(3);
    expect(controller["map"].height).toBe(4);
    expect(controller["map"].mountains).toHaveLength(2);
    expect(controller["map"].treasures).toHaveLength(2);
    expect(controller["map"].adventurers).toHaveLength(1);
    expect(controller["map"].adventurers[0].name).toBe("Lara");
    expect(controller["map"].adventurers[0].x).toBe(1);
    expect(controller["map"].adventurers[0].y).toBe(1);
    expect(controller["map"].adventurers[0].direction).toBe("S");
    expect(controller["map"].adventurers[0].movements).toEqual([
      "A",
      "A",
      "D",
      "A",
      "D",
      "A",
    ]);
  });

  test("should handle empty input", () => {
    const input = "";
    expect(() => parseInput(input)).toThrow();
  });

  test("should handle invalid input", () => {
    const input = `C - 3 - 4
M - 1 - 1
T - 0 - 3 - 2
A - Lara - 1 - 1 - S - AADADA
X - 1 - 1
      `;
    expect(() => parseInput(input)).toThrow();
  });
});

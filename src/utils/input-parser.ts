import { MapController } from "../controller/map-controller";
import { Direction, Movement } from "../models/adventurer";
export function parseInput(rawInput: string): MapController {
  const input = rawInput.trim();
  if (input.length < 1) throw "Exception: empty file";
  const lines = input.split("\n").filter((line) => !line.startsWith("#"));
  const [width, height] = lines[0].split(" - ").slice(1).map(Number);
  const controller = new MapController(width, height);

  for (let i = 1; i < lines.length; i++) {
    const [type, ...args] = lines[i].trim().split(" - ");
    if (type === "M") {
      const [x, y] = args.map(Number);
      controller.addMountain(x, y);
    } else if (type === "T") {
      const [x, y, count] = args.map(Number);
      controller.addTreasure(x, y, count);
    } else if (type === "A") {
      const [name, x, y, direction, movements] = args;
      controller.addAdventurer(
        name,
        Number(x),
        Number(y),
        direction as Direction,
        movements.split("") as Movement[]
      );
    } else {
      throw "Exception: Wrong file format";
    }
  }

  return controller;
}

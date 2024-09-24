import { Adventurer } from "../../models/adventurer";
import { Map } from "../../models/map";
import { Mountain } from "../../models/mountain";
import { Treasure } from "../../models/treasure";
import { MapViewer } from "../../viewer/map-viewer";

describe("MapView", () => {
  let map: Map;

  beforeEach(() => {
    map = new Map(3, 4);
  });

  test("should print map with mountains", () => {
    const mountain: Mountain = { x: 1, y: 1 };
    map.addMountain(mountain);
    const logSpy = jest.spyOn(console, "log");
    MapViewer.printMap(map);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("M"));
  });

  test("should print map with treasures", () => {
    const treasure: Treasure = { x: 0, y: 3, count: 2 };
    map.addTreasure(treasure);
    const logSpy = jest.spyOn(console, "log");
    MapViewer.printMap(map);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("T(2)"));
  });

  test("should print map with adventurers", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["A", "A", "D", "A", "D", "A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    const logSpy = jest.spyOn(console, "log");
    MapViewer.printMap(map);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("A(Lara)"));
  });
});

import { MapController } from "../../controller/map-controller";

describe("MapController", () => {
  let controller: MapController;

  beforeEach(() => {
    controller = new MapController(3, 4);
  });

  test("should add a mountain", () => {
    controller.addMountain(1, 1);
    expect(controller["map"].mountains).toHaveLength(1);
  });

  test("should add a treasure", () => {
    controller.addTreasure(0, 3, 2);
    expect(controller["map"].treasures).toHaveLength(1);
  });

  test("should add an adventurer", () => {
    controller.addAdventurer("Lara", 1, 1, "S", ["A", "A", "D", "A", "D", "A"]);
    expect(controller["map"].adventurers).toHaveLength(1);
  });

  test("should simulate movements", () => {
    controller.addAdventurer("Lara", 1, 1, "S", ["A", "A", "D", "A", "D", "A"]);
    const logSpy = jest.spyOn(console, "log");
    controller.simulate();
    expect(logSpy).toHaveBeenCalled();
  });

  test("should write output", () => {
    const logSpy = jest.spyOn(console, "log");
    controller.writeOutput();
    expect(logSpy).toHaveBeenCalled();
  });
});

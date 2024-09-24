import { Adventurer } from "../../models/adventurer";
import { Map } from "../../models/map";
import { Mountain } from "../../models/mountain";
import { Treasure } from "../../models/treasure";

describe("Map", () => {
  let map: Map;

  beforeEach(() => {
    map = new Map(3, 4);
  });

  test("should add a mountain", () => {
    const mountain: Mountain = { x: 1, y: 1 };
    map.addMountain(mountain);
    expect(map.mountains).toContain(mountain);
  });

  test("should add a treasure", () => {
    const treasure: Treasure = { x: 0, y: 3, count: 2 };
    map.addTreasure(treasure);
    expect(map.treasures).toContain(treasure);
  });

  test("should add an adventurer", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["A", "A", "D", "A", "D", "A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    expect(map.adventurers).toContain(adventurer);
  });

  test("should collect treasure", () => {
    const treasure: Treasure = { x: 0, y: 3, count: 2 };
    map.addTreasure(treasure);
    const collected = map.collectTreasure(0, 3);
    expect(collected).toBe(1);
    expect(map.treasures[0].count).toBe(1);
  });

  test("should move adventurer forward", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    map.moveAdventurer(adventurer, "A");
    expect(adventurer.y).toBe(2);
  });

  test("should turn adventurer left", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["G"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    map.moveAdventurer(adventurer, "G");
    expect(adventurer.direction).toBe("E");
  });

  test("should turn adventurer right", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["D"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    map.moveAdventurer(adventurer, "D");
    expect(adventurer.direction).toBe("W");
  });

  test("should not move adventurer into mountain or an adventurer", () => {
    const mountain: Mountain = { x: 1, y: 2 };
    map.addMountain(mountain);
    const adventurerA: Adventurer = {
      name: "A",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurerA);
    map.moveAdventurer(adventurerA, "A");
    expect(adventurerA.y).toBe(1);
    const adventurerB: Adventurer = {
      name: "B",
      x: 2,
      y: 3,
      direction: "S",
      movements: ["A"],
      treasuresCollected: 0,
    };
    const adventurerC: Adventurer = {
      name: "C",
      x: 2,
      y: 2,
      direction: "S",
      movements: ["A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurerB);
    map.addAdventurer(adventurerC);
    map.moveAdventurer(adventurerC, "A");
    expect(adventurerC.y).toBe(2);
  });

  test("should collect treasure when moving onto it", () => {
    const treasure: Treasure = { x: 1, y: 2, count: 1 };
    map.addTreasure(treasure);
    const adventurer: Adventurer = {
      name: "Lara",
      x: 1,
      y: 1,
      direction: "S",
      movements: ["A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    map.moveAdventurer(adventurer, "A");
    expect(adventurer.y).toBe(2);
    expect(adventurer.treasuresCollected).toBe(1);
  });

  test("should not move adventurer out of bounds", () => {
    const adventurer: Adventurer = {
      name: "Lara",
      x: 0,
      y: 0,
      direction: "N",
      movements: ["A"],
      treasuresCollected: 0,
    };
    map.addAdventurer(adventurer);
    map.moveAdventurer(adventurer, "A");
    expect(adventurer.y).toBe(0);
  });
});

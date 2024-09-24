import { Adventurer, Direction, Movement } from "../models/adventurer";
import { Map } from "../models/map";
import { Mountain } from "../models/mountain";
import { Treasure } from "../models/treasure";
import { MapViewer } from "../viewer/map-viewer";

export class MapController {
  private map: Map;

  constructor(width: number, height: number) {
    this.map = new Map(width, height);
  }

  addMountain(x: number, y: number) {
    const mountain: Mountain = { x, y };
    this.map.addMountain(mountain);
  }

  addTreasure(x: number, y: number, count: number) {
    const treasure: Treasure = { x, y, count };
    this.map.addTreasure(treasure);
  }

  addAdventurer(
    name: string,
    x: number,
    y: number,
    direction: Direction,
    movements: Movement[]
  ) {
    const adventurer: Adventurer = {
      name,
      x,
      y,
      direction,
      movements,
      treasuresCollected: 0,
    };
    this.map.addAdventurer(adventurer);
  }

  simulate() {
    for (const adventurer of this.map.adventurers) {
      for (const movement of adventurer.movements) {
        this.map.moveAdventurer(adventurer, movement);
        MapViewer.printMap(this.map);
      }
    }
  }

  writeOutput() {
    return MapViewer.writeOutput(this.map);
  }
}

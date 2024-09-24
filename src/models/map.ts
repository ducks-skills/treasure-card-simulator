import { Mountain } from "./mountain";
import { Treasure } from "./treasure";
import { Adventurer, Movement } from "./adventurer";

export class Map {
  width: number;
  height: number;
  mountains: Mountain[];
  treasures: Treasure[];
  adventurers: Adventurer[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.mountains = [];
    this.treasures = [];
    this.adventurers = [];
  }

  addMountain(mountain: Mountain) {
    this.mountains.push(mountain);
  }

  addTreasure(treasure: Treasure) {
    this.treasures.push(treasure);
  }

  addAdventurer(adventurer: Adventurer) {
    this.adventurers.push(adventurer);
  }

  canMove(x: number, y: number): boolean {
    return !this.isAdventurer(x, y) && !this.isMountain(x, y);
  }

  isAdventurer(x: number, y: number): boolean {
    return this.adventurers.some((m) => m.x === x && m.y === y);
  }

  isMountain(x: number, y: number): boolean {
    return this.mountains.some((m) => m.x === x && m.y === y);
  }

  collectTreasure(x: number, y: number): number {
    const treasureIdx = this.treasures.findIndex((t) => t.x === x && t.y === y);
    if (treasureIdx !== -1) {
      const treasure = this.treasures[treasureIdx];
      treasure.count--;
      if (treasure.count === 0) {
        this.treasures = this.treasures.filter((t) => t !== treasure);
      } else {
        console.log("Collected");
        this.treasures[treasureIdx] = treasure;
      }
      return 1;
    }
    return 0;
  }

  simulate() {
    for (const adventurer of this.adventurers) {
      for (const movement of adventurer.movements) {
        this.moveAdventurer(adventurer, movement);
      }
    }
  }

  moveAdventurer(adventurer: Adventurer, movement: Movement) {
    if (movement === "A") {
      let newX = adventurer.x;
      let newY = adventurer.y;

      switch (adventurer.direction) {
        case "N":
          newY--;
          break;
        case "S":
          newY++;
          break;
        case "E":
          newX++;
          break;
        case "W":
          newX--;
          break;
      }

      if (
        newX >= 0 &&
        newX < this.width &&
        newY >= 0 &&
        newY < this.height &&
        this.canMove(newX, newY)
      ) {
        adventurer.x = newX;
        adventurer.y = newY;
        adventurer.treasuresCollected += this.collectTreasure(newX, newY);
      }
    } else if (movement === "G") {
      switch (adventurer.direction) {
        case "N":
          adventurer.direction = "W";
          break;
        case "W":
          adventurer.direction = "S";
          break;
        case "S":
          adventurer.direction = "E";
          break;
        case "E":
          adventurer.direction = "N";
          break;
      }
    } else if (movement === "D") {
      switch (adventurer.direction) {
        case "N":
          adventurer.direction = "E";
          break;
        case "E":
          adventurer.direction = "S";
          break;
        case "S":
          adventurer.direction = "W";
          break;
        case "W":
          adventurer.direction = "N";
          break;
      }
    }
  }
}

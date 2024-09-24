import { Map } from "../models/map";

export class MapViewer {
  static printMap(map: Map) {
    const mapArray: string[][] = Array.from({ length: map.height }, () =>
      Array(map.width).fill(".")
    );

    map.mountains.forEach((m) => {
      mapArray[m.y][m.x] = "M";
    });

    map.treasures.forEach((t) => {
      mapArray[t.y][t.x] = `T(${t.count})`;
    });

    map.adventurers.forEach((a) => {
      mapArray[a.y][a.x] = `A(${a.name})`;
    });

    mapArray.forEach((row) => {
      console.log(row.join(" "));
    });
    console.log("\n");
  }

  static writeOutput(map: Map): string {
    let output = `C - ${map.width} - ${map.height}\n`;
    map.mountains.forEach((m) => (output += `M - ${m.x} - ${m.y}\n`));
    map.treasures.forEach(
      (t) => (output += `T - ${t.x} - ${t.y} - ${t.count}\n`)
    );
    map.adventurers.forEach(
      (a) =>
        (output += `A - ${a.name} - ${a.x} - ${a.y} - ${a.direction} - ${a.treasuresCollected}\n`)
    );
    return output;
  }
}

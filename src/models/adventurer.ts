export type Direction = "N" | "S" | "E" | "W";
export type Movement = "A" | "G" | "D";

export interface Adventurer {
  name: string;
  x: number;
  y: number;
  direction: Direction;
  movements: Movement[];
  treasuresCollected: number;
}

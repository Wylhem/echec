import { Tile } from "../dashboard/tile";
import { IMove } from "../interfaces/IMoves";

export abstract class Piece implements IMove {
  abstract name: string;
  abstract position: Tile;

  abstract canMove(tile: Tile): boolean;

  move(tile: Tile): boolean {
    if (this.canMove(tile)) {
      this.position = tile;
      console.log(`${this.name} moved to ${tile.getX()}, ${tile.getY()}`);
      return true;
    } else {
      console.log(`${this.name} cannot move to ${tile.getX()}, ${tile.getY()}`);
      return false;
    }
  }
}

import { Piece } from "../piece";
import { Tile } from "../../dashboard/tile";

export class Pawn extends Piece {
  name = "Pawn";
  position: Tile;

  constructor(tile: Tile) {
    super();
    this.position = tile;
  }

  canMove(tile: Tile): boolean {
    const currentTile = this.position;
    const diffX = Math.abs(currentTile.getX() - tile.getX());
    const diffY = Math.abs(currentTile.getY() - tile.getY());
    if (currentTile.getY() - tile.getY() === 1 && diffX === 1) {
      return true;
    } else if (currentTile.getY() - tile.getY() === 1 && diffX === 0) {
      return true;
    } else if (
      currentTile.getY() - tile.getY() === 2 &&
      currentTile.getY() === 1 &&
      diffX === 0
    ) {
      return true;
    }
    return false;
  }
}

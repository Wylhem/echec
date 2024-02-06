import { Tile } from "../dashboard/tile";

export interface IMove {
  move(tile: Tile): void;
}

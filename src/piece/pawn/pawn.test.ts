import { beforeEach, describe, expect, test } from "vitest";
import { Pawn } from "./pawn";
import { Tile } from "../../dashboard/tile";
import { title } from "process";

describe("Pawn", () => {
  let pawn: Pawn;
  let tile1: Tile;
  let tile2: Tile;
  let tile3: Tile;
  beforeEach(() => {
    tile1 = new Tile(0, 0);
    pawn = new Pawn(tile1);

    tile2 = new Tile(1, 1);
    tile3 = new Tile(2, 1);
  });

  test("move", () => {
    pawn.move(tile2);
    expect(pawn.position).toEqual(tile2);
  });

  test("canMove within movement range", () => {
    expect(pawn.canMove(tile2)).toBe(true);
  });

  test("canMove outside movement range", () => {
    expect(pawn.canMove(tile3)).toBe(false);
  });

  test("canMove on first move", () => {
    pawn.move(tile2);
    expect(pawn.canMove(tile3)).toBe(true);
  });

  test("canMove on not first move", () => {
    pawn.move(tile2);
    pawn.move(tile3);
    expect(pawn.canMove(tile2)).toBe(false);
  });
});

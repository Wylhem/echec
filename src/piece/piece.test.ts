import { describe } from "node:test";
import { expect, test } from "vitest";
import { Pawn } from "./pawn/pawn";
import { Piece } from "./piece";

describe("Piece", () => {
  test("piece children should be define", () => {
    const piece: Piece = new Pawn("couleur");
    expect(piece).toBeDefined();
  });
});

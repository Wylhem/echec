export abstract class Piece {
  constructor(private color: Color) {}

  abstract getColor(): Color;
}

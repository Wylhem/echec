export class Tile {
  constructor(private x: number, private y: number) {}

  getPosition(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}

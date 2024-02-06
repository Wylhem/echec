import { Color } from '../Color/enums';
import { Dashboard } from '../dashboard/dashboard';

class Player {
  constructor(name: string, playingColor: Color) {
    this.playingColor = playingColor;
    this.name = name;
  }
    private playingColor: Color;
    private name: string;

    makeMove(chessBoard: Dashboard, startingX: number, startingY: number, endingX: number, endingY: number): boolean {

        let piece = chessBoard.getPiece(startingX, startingY);
        if (piece === null) {
            return false;
        }
        if (piece.getColor() !== this.playingColor) {
            return false;
        }

        return piece.move(chessBoard, startingX, startingY, endingX, endingY);
    }
}

export { Player };

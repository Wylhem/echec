import { Tile } from './tile';

class Dashboard {

    constructor() {
        this.board = this.createBoard();
    }

    board: Tile[][];

    createBoard(): Tile[][] {
        let tiles: Tile[][] = [];
        for (let i = 0; i < 8; i++) {
            tiles[i] = [];
            for (let j = 0; j < 8; j++) {
                tiles[i][j] = new Tile(i, j);
            }
        }
        return tiles;
    }

    getPiece(x: number, y: number) {
        return this.board[x][y].getPiece();
    }
}

export { Dashboard };
import {expect, test} from 'vitest'
import {Dashboard} from './dashboard'
import {Tile} from './tile'

test('Testing if the dashboard exists', () => {
    let dashboard = new Dashboard();
    expect(dashboard).toBeDefined();
});


test('Testing the tiles creations', () => {
    let dashboard = new Dashboard();
    expect(dashboard.board.length).toBe(8);
    for (let i = 0; i < 8; i++) {
        expect(dashboard.board[i].length).toBe(8);
        for (let j = 0; j < 8; j++) {
            expect(dashboard.board[i][j] instanceof Tile).toBe(true);
        }
    }
});

test('Testing the tiles initialisation with', () => {
    let dashboard = new Dashboard();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            expect(dashboard.board[i][j].piece instanceof Object).toBe(true);
            expect(dashboard.board[i][j].piece).toBe(null);
        }
    }
});
import {expect, test} from 'vitest'
import {Dashboard} from './dashboard'
import {Slot} from './slot'

test('Testing if the dashboard exists', () => {
    let dashboard = new Dashboard();
    expect(dashboard).toBeDefined();
});


test('Testing the dimensions of the board', () => {
    let dashboard = new Dashboard();
    expect(dashboard.board.length).toBe(8);
    for (let i = 0; i < 8; i++) {
        expect(dashboard.board[i].length).toBe(8);
        for (let j = 0; j < 8; j++) {
            expect(dashboard.board[i][j] instanceof Slot).toBe(true);
        }

    }
});